import { randomUUID } from 'node:crypto';
import http from 'node:http';
import { Database } from './database.js';
import { json } from './middlewares/json.js';

const database = new Database()

const server = http.createServer(async (req, res) => {
  const { url, method } = req;

  await json(req, res)

  if(url === '/users' && method === 'GET') {
    const users = database.select('users')

    return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users))
  }

  if(url === '/users' && method === 'POST') {
    const { name, email } = req.body

    const user = ({
      id: randomUUID(),
      name,
      email
    })

    database.insert('users', user)

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)