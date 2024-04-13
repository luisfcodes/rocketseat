import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World!'
})

app
  .listen({
    port: 3333,
    host: 'localhost',
  })
  .then(() => {
    console.log('Server is running on http://localhost:3333 🚀')
  })
