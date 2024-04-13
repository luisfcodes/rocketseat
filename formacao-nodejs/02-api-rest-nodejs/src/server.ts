import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, { prefix: '/transactions' })

app
  .listen({
    port: env.PORT,
    host: 'localhost',
  })
  .then(() => {
    console.log('Server is running on http://localhost:3333 🚀')
  })
