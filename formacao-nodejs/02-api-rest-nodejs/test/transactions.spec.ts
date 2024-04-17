import { afterAll, beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'

describe('Transactions route', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  it('should return 201', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'Salary',
      amount: 1000,
      type: 'credit',
    })

    expect(response.status).toBe(201)
  })

  it('should be able to list all transactions', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'Salary',
      amount: 1000,
      type: 'credit',
    })

    const sessionCookie = response.headers['set-cookie'][0]

    const listResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', sessionCookie)

    expect(listResponse.status).toBe(200)
    expect(listResponse.body).toEqual({
      totalTransactions: 1,
      transactions: [
        {
          id: expect.any(String),
          title: 'Salary',
          amount: 1000,
          created_at: expect.any(String),
          session_id: expect.any(String),
        },
      ],
    })
  })

  it('should be able to get a specific transaction', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'Salary',
      amount: 1000,
      type: 'credit',
    })

    const sessionCookie = response.headers['set-cookie'][0]

    const listResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', sessionCookie)

    const transactionId = listResponse.body.transactions[0].id

    const getTransactionResponse = await request(app.server)
      .get(`/transactions/${transactionId}`)
      .set('Cookie', sessionCookie)

    expect(listResponse.status).toBe(200)
    expect(getTransactionResponse.body).toEqual(
      expect.objectContaining({
        title: 'Salary',
        amount: 1000,
      }),
    )
  })

  it('should be able to get the summary', async () => {
    const response = await request(app.server).post('/transactions').send({
      title: 'Credit Transaction',
      amount: 1000,
      type: 'credit',
    })

    const sessionCookie = response.headers['set-cookie'][0]

    await request(app.server)
      .post('/transactions')
      .set('Cookie', sessionCookie)
      .send({
        title: 'Debit Transaction',
        amount: 200,
        type: 'debit',
      })

    const summaryResponse = await request(app.server)
      .get('/transactions/summary')
      .set('Cookie', sessionCookie)

    expect(summaryResponse.status).toBe(200)
    expect(summaryResponse.body).toEqual({
      amount: 800,
    })
  })
})
