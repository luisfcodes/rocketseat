// process.stdin.pipe(process.stdout);

import { Readable, Transform, Writable } from 'node:stream'

class OneToHundredStrem extends Readable {
  index = 1

  _read() {
    const num = this.index++

    setTimeout(() => {
      if (num > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(`${num}\n`)
  
        this.push(buf)
      }
    }, 200)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const num = Number(chunk.toString()) * -1
    callback(null, `${num}\n`)
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10)
    callback()
  }
}

const readStream = new OneToHundredStrem()
readStream
.pipe(new InverseNumberStream())
.pipe(new MultiplyByTenStream())