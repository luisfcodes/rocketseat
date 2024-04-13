import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { knex } from '../database'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (req, res) => {
      const sessionId = req.cookies.sessionId

      const transactions = await knex('transactions').where({
        session_id: sessionId,
      })

      return res.send({
        totalTransactions: transactions.length,
        transactions,
      })
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (req, res) => {
      const getTransactionParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getTransactionParamsSchema.parse(req.params)

      const sessionId = req.cookies.sessionId

      const transaction = await knex('transactions')
        .where({
          id,
          session_id: sessionId,
        })
        .first()

      if (!transaction) {
        return res.status(404).send({
          message: 'Transaction not found',
        })
      }

      return res.send(transaction)
    },
  )

  app.get(
    '/summary',
    {
      preHandler: [checkSessionIdExists],
    },
    async (req, res) => {
      const sessionId = req.cookies.sessionId

      const summary = await knex('transactions')
        .where({
          session_id: sessionId,
        })
        .sum('amount', { as: 'amount' })
        .first()

      if (!summary) {
        return res.send({
          amount: 0,
        })
      }

      return res.send(summary)
    },
  )

  app.post('/', async (req, res) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(req.body)

    let sessionId = req.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      res.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'debit' ? amount * -1 : amount,
      session_id: sessionId,
    })

    return res.status(201).send()
  })
}
