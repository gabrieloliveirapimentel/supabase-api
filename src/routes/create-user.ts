import type { FastifyReply, FastifyRequest } from "fastify";
import chalk from "chalk";

import { eq } from "drizzle-orm";
import { db } from "../db/connection";
import { users } from "../db/schema";

interface CreateUserProps {
    name: string;
    email: string;
}

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
    const { name, email } = request.body as CreateUserProps;
    const [existingUser] = await db.select().from(users).where(eq(users.email, email)).limit(1);

    if (existingUser) return reply.code(400).send({ error: "Usuário já cadastrado com este email." });

    try {
        await db.insert(users).values({
            name,
            email,
            createdAt: new Date(),
        });

        reply.code(201).send({ message: "User registered successfully." });
        console.log(chalk.greenBright("User registered successfully."));
    } catch (error) {
        console.error(chalk.redBright("Error to register user:", error));
        return reply.code(500).send({ error: "Error to register user." });
    }
}