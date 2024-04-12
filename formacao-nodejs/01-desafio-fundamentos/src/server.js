import http from 'node:http';
import { routes } from './routes.js';

const server = http.createServer(async (req, res) => {
  const { url, method } = req;

  for await (const chunk of req) {
    req.body = JSON.parse(chunk);
  }

  const route = routes.find(route => route.method === method && url.match(route.path));

  if(route){
    return route.handler(req, res);
  }

  return res.writeHead(404).end();
})

server.listen(3333, () => {
  console.log('Server is starting on port 3333 🚀');
});