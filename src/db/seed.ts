import chalk from 'chalk'
import { db } from './connection'
import { users } from './schema'

/**
 * Reset database
 */
await db.delete(users);
console.log(chalk.yellowBright("Database reset!"));


/**
 * Create users
*/
await db.insert(users).values({
    name: "John Doe",
    email: "john-doe@gmail.com"
})

await db.insert(users).values({
    name: "Jane Doe",
    email: "jane-doe@gmail.com"
})

console.log(chalk.yellowBright("Users created!"));


console.log(chalk.greenBright("Database seeded successfully!"));
process.exit();
