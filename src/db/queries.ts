import { db } from "@/db";
import { sessionsTable } from "./schema";
import { desc } from "drizzle-orm";

export async function getAllSessions() {
    return await db.select().from(sessionsTable).orderBy(desc(sessionsTable.createdAt));
}