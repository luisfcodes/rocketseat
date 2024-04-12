import fs from 'node:fs/promises'

export class Database {
  #database = {}

  constructor(){
    this.#persist()
  }

  #persist() {
    fs.writeFile('./db.json', JSON.stringify(this.#database))
  }
}