import { randomUUID } from 'node:crypto'
import { Database } from './database.js'

const database = new Database()

const tasks = [
  {
    id: randomUUID(),
    title: 'Estudar Node.js',
    description: 'Estudar os fundamentos do Node.js',
    completed_at: null,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    id: randomUUID(),
    title: 'Estudar React',
    description: 'Estudar os fundamentos do React',
    completed_at: null,
    created_at: new Date(),
    updated_at: new Date()
  }
]


export const routes = [
  {
    method: 'GET',
    path: /^\/tasks$/,
    handler: (req, res) => {
      return res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(tasks))
    }
  },
  {
    method: 'POST',
    path: /^\/tasks$/,
    handler: (req, res) => {
      if (!req.body) {
        return res.writeHead(400).end()
      }

      const { title, description } = req.body

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      }

      tasks.push(task)

      return res.writeHead(201).end()
    }
  }
]