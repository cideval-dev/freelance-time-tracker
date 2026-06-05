'use server'

import { db } from "@/db"
import { sessionsTable } from "@/db/schema"
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createSession(title: string, time: number) {
    await db.insert(sessionsTable).values({
        id: crypto.randomUUID(), 
        title: title, 
        time: time}
    );

    revalidatePath("/");
};

export async function deleteSession(id: string) {
    await db.delete(sessionsTable).where(eq(sessionsTable.id, id));

    revalidatePath("/");
}

export async function getSessions() {
    return await db.select().from(sessionsTable);
};