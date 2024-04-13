import { parse } from 'csv-parse';
import fs from 'node:fs/promises';
import http from 'node:http';
import { Readable } from 'node:stream';

(async () => {
  let csvString = await fs.readFile('./tasks.csv', 'utf8')

  csvString = csvString.split('\n').slice(1).filter(line => line.trim() !== '').join('\n')

  const csvStream = Readable.from(csvString)

  const csv = csvStream.pipe(parse({ columns: ['title', 'description'] }))
  
  let count = 0

  process.stdout.write('Loading tasks\n')

  for await (const record of csv) {
    process.stdout.write(`(${count++}) [CREATED - ✅] ${record.title},${record.description}\n`);
    const options = {
      hostname: 'localhost',
      port: 3333,
      path: '/tasks',
      method: 'POST',
    }

    const req = http.request(options)

    req.write(JSON.stringify(record))

    req.end()
    
    await new Promise(resolve => setTimeout(resolve, 100))
  }

  process.stdout.write('Tasks loaded\n')
})()