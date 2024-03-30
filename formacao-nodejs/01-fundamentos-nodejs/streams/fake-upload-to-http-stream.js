import { Readable } from 'node:stream'

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

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStrem(),
  duplex: "half",
})