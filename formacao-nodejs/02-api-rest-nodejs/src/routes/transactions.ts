import { FastifyInstance } from 'fastify'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async (req, res) => {
    const transactions = await knex('transactions').select('*')

    return res.send({
      totalTransactions: transactions.length,
      transactions,
    })
  })

  app.get('/:id', async (req, res) => {
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getTransactionParamsSchema.parse(req.params)

    const transaction = await knex('transactions').where({ id }).first()

    if (!transaction) {
      return res.status(404).send({
        message: 'Transaction not found',
      })
    }

    return res.send(transaction)
  })

  app.get('/summary', async (req, res) => {
    const summary = await knex('transactions')
      .sum('amount', {
        as: 'amount',
      })
      .first()

    if (!summary) {
      return res.send({
        amount: 0,
      })
    }

    return res.send(summary)
  })

  app.post('/', async (req, res) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(req.body)

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'debit' ? amount * -1 : amount,
    })

    return res.status(201).send()
  })
}
