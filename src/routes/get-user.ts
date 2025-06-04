import type { FastifyReply, FastifyRequest } from "fastify";
import chalk from "chalk";

import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { users } from "../db/schema";

interface ParamsProps {
  uuid: string;
}

export async function getUser(request: FastifyRequest, reply: FastifyReply) {
    const { uuid } = request.params as ParamsProps;

    try {
      const [findUser] = await db
        .select()
        .from(users)
        .where(eq(users.uuid, uuid))
        .limit(1);
  
        return reply.send({
          message: "User found successfully.",
          user: findUser,
        })
    } catch (error) {
      console.log(chalk.redBright("Error to find user:", error));
      return reply.code(500).send({ error: "Error to find user." });
    }
  }