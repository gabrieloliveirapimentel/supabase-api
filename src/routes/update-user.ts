import type { FastifyReply, FastifyRequest } from "fastify";
import chalk from "chalk";

import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { users } from "../db/schema";

interface ParamsProps {
    uuid: string;
}

interface UpdateUserProps {
    name: string;
    email: string;
}

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
    const { uuid } = request.params as ParamsProps;
    const { name, email } = request.body as UpdateUserProps;

    try {
        const [existingUser] = await db.select().from(users).where(eq(users.uuid, uuid)).limit(1);
        if (!existingUser) return reply.code(404).send({ error: "User not find." });
        
        const [existingEmail] = await db.select().from(users).where(eq(users.email, email)).limit(1);
        if (existingEmail && existingEmail.uuid !== uuid) return reply.code(400).send({ error: "User find with this email." });

        await db.update(users)
            .set({
                name,
                email
            })
            .where(eq(users.uuid, uuid));

        reply.code(200).send({ message: "User updated successfully." });
        console.log(chalk.greenBright("User updated successfully."));


    } catch (error) {
        console.error(chalk.redBright("Error to update user:", error));
        return reply.code(500).send({ error: "Error to update user." });
      }
}