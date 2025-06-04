import chalk from "chalk";
import { asc } from "drizzle-orm";
import { db } from "../db/connection";
import { users } from "../db/schema";
import type { FastifyReply, FastifyRequest } from "fastify";

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
    try {
      const response = await db
        .select()
        .from(users)
        .orderBy(asc(users.createdAt));
  
        return reply.send(response)
    } catch (error) {
      console.log(chalk.redBright("Error to list users:", error));
      return reply.code(500).send({ error: "Error to list users." });
    }
  }