import { randomUUID } from 'node:crypto'
import { Database } from './database.js'

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: /^\/tasks$/,
    handler: (req, res) => {
      if (req.url === '/tasks' && !req.body) {
        const tasks = database.select()

        return res.end(JSON.stringify(tasks))
      }

      const { title, description } = req.body

      if (req.url === '/tasks' && ( title || description)) {
        const tasks = database.selectByTitleOrDescription(title, description)

        if (tasks.length === 0) {
          return res.writeHead(404).end()
        }

        return res.end(JSON.stringify(tasks))
      }

      return res.writeHead(400).end()
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

      try {
        database.insert(task)
        res.writeHead(201).end(JSON.stringify(task))
      } catch (error) {
        res.writeHead(500).end()
      }
    }
  },
  {
    method: 'PUT',
    path: /^\/tasks\/([a-z0-9-]+)$/,
    handler: (req, res) => {
      const [, id] = req.url.match(/^\/tasks\/([a-z0-9-]+)$/) ?? []

      if (!id || !req.body) {
        return res.writeHead(400).end()
      }

      const { title, description } = req.body

      const task = database.select()[id]

      if (!task) {
        return res.writeHead(404).end(JSON.stringify({ message: 'Task not found' }));
      }

      const newTask = {
        ...task,
        title: title ?? task.title,
        description: description ?? task.description,
        updated_at: new Date()
      }

      database.update(id, newTask)

      return res.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: /^\/tasks\/?([a-z0-9-]*)?$/,
    handler: (req, res) => {
      const [, id] = req.url.match(/^\/tasks\/([a-z0-9-]+)$/) ?? []

      if (!id) {
        database.deleteAll()
        return res.writeHead(204).end()
      }

      const task = database.select()[id]

      if (!task) {
        return res.writeHead(404).end(JSON.stringify({ message: 'Task not found' }))
      }

      database.delete(id)

      return res.writeHead(204).end()
    }
  },
  {
    method: 'PATCH',
    path: /^\/tasks\/([a-z0-9-]+)\/complete$/,
    handler: (req, res) => {
      const [, id] = req.url.match(/^\/tasks\/([a-z0-9-]+)\/complete$/) ?? []

      if (!id) {
        return res.writeHead(400).end()
      }

      const task = database.select()[id]

      if (!task) {
        return res.writeHead(404).end(JSON.stringify({ message: 'Task not found' }))
      }

      database.completeOrReopen(id)

      return res.writeHead(204).end()
    }
  }
]