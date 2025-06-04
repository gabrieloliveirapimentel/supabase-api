import { randomUUID } from "node:crypto"
import { pgTable, text, uuid, timestamp} from "drizzle-orm/pg-core"

export const users = pgTable("users", {
    uuid: uuid("uuid").$defaultFn(() => randomUUID()).primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    createdAt: timestamp("created_at").notNull().$defaultFn(() => new Date()),   
})