import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const transactions = await knex('transactions')
    .select()
    .where('amount', '>', 100)

  return transactions
})

app
  .listen({
    port: env.PORT,
    host: 'localhost',
  })
  .then(() => {
    console.log('Server is running on http://localhost:3333 🚀')
  })
