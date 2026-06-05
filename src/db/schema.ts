import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const sessionsTable = pgTable("sessions", {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    time: integer("time").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull()
});