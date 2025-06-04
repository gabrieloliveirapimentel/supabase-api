import { fastify } from 'fastify'
import cors from '@fastify/cors'
import chalk from 'chalk'

import { getUsers } from './routes/get-users'
import { getUser } from './routes/get-user'
import { createUser } from './routes/create-user'
import { updateUser } from './routes/update-user'
import { deleteUser } from './routes/delete-user'

const app = fastify()

app.register(cors, {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
})

// Get all users
app.get("/users", getUsers)

// CRUD operations for user
app.post("/user", createUser)
app.get("/user/:uuid", getUser)
app.put("/user/:uuid", updateUser)
app.delete("/user/:uuid", deleteUser)

// Running the server
app.listen({ port: 3333}).then(() => {
    console.log(chalk.blueBright("Server is running at http://localhost:3333"))
  })