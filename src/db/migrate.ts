import chalk from 'chalk'
import postgres from 'postgres'
import { env } from '../env'

import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'

const connection = postgres(env.DATABASE_URL!, { max: 1})
export const db = drizzle(connection)

await migrate(db, { migrationsFolder: 'drizzle' })
console.log(chalk.green('Database migration completed successfully!'))

await connection.end()

process.exit()