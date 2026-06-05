'use server'

import { db } from "@/db"
import { sessionsTable } from "@/db/schema"

export async function createSession(title: string, time: number) {
    await db.insert(sessionsTable).values({
        id: crypto.randomUUID(), 
        title: title, 
        time: time}
    );
};