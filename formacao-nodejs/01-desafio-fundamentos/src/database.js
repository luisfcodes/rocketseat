import { randomUUID } from 'node:crypto'
import fs from 'node:fs/promises'

export class Database {
  #database = {}

  constructor(){
    fs.readFile('./db.json', 'utf8').then(data => {
      this.#database = JSON.parse(data)
    }).catch(() => {
      this.#persist()
    })
  }

  #persist() {
    fs.writeFile('./db.json', JSON.stringify(this.#database))
  }

  select(){
    return this.#database
  }

  selectByTitleOrDescription(title, description){
    return Object.values(this.#database).filter(task => {
      return (title ? task.title.toLowerCase().includes(title.toLowerCase()) : false) || 
       (description ? task.description.toLowerCase().includes(description.toLowerCase()) : false);
    })
  }

  insert(data) {
    const id = randomUUID()
    this.#database[id] = data
    this.#persist()
    return id
  }

  update(id, data){
    if (this.#database[id]) {
      this.#database[id] = { ...this.#database[id], ...data }
      this.#persist()
    }
  }

  completeOrReopen(id){
    if (this.#database[id]) {
      this.#database[id].completed_at = this.#database[id].completed_at ? null : new Date()
      this.#persist()
    }
  }

  delete(id){
    if (this.#database[id]) {
      delete this.#database[id]
      this.#persist()
    }
  }

  deleteAll(){
    this.#database = {}
    this.#persist()
  }
}