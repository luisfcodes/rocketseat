import { Knex, knex as KnexSetup } from 'knex'
import { env } from './env'

export const config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
} as Knex.Config

export const knex = KnexSetup(config)
