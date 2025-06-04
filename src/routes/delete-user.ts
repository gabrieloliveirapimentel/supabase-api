import type { FastifyReply, FastifyRequest } from "fastify";
import chalk from "chalk";

import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { users } from "../db/schema";

interface ParamsProps {
    uuid: string;
}

export async function deleteUser(request: FastifyRequest, reply: FastifyReply){
    const { uuid } = request.params as ParamsProps;

    try {
        await db.delete(users).where(eq(users.uuid,uuid))

        reply.code(201).send({ message: "User deleted successfully." });
        console.log(chalk.greenBright("User deleted successfully."));

    } catch (error) {
        console.log(chalk.redBright("Error to delete user:", error));
        return reply.code(500).send({ error: "Error to delete user." });
      }
}