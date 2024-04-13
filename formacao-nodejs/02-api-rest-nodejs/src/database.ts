import { knex as KnexSetup } from 'knex'

export const knex = KnexSetup({
  client: 'sqlite',
  connection: {
    filename: './tmp/app.db',
  },
})
