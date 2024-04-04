import http from 'node:http';
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const num = Number(chunk.toString()) * -1

    console.log(num)
    
    callback(null, `${num}\n`)
  }
}

const server = http.createServer(async (req, res) => {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const body = Buffer.concat(buffers).toString()

  console.log(body)

  res.end(body)

  // req
  // .pipe(new InverseNumberStream())
  // .pipe(res)
})

server.listen(3334)