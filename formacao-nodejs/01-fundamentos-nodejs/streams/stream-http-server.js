import http from 'node:http';
import { Transform } from 'node:stream';

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const num = Number(chunk.toString()) * -1

    console.log(num)
    
    callback(null, `${num}\n`)
  }
}

const server = http.createServer((req, res) => {
  req
  .pipe(new InverseNumberStream())
  .pipe(res)
})

server.listen(3334)