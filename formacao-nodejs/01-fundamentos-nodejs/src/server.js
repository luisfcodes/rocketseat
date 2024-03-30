import http from 'node:http';

const users = []

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if(url === '/users' && method === 'GET') {
    return res
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users))
  }

  if(url === '/users' && method === 'POST') {
    users.push({
      id: Math.random(),
      name: 'Lucas',
      email: 'lucas@gmail.com'
    })

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)