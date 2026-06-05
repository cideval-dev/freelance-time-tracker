import Timer from "@/components/Timer";
import { formatTime } from "@/lib/utils";
import { getAllSessions } from "@/db/queries";
import { deleteSession } from "./actions";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default async function Home() {
  const sessions = await getAllSessions();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Timer />

      <ul className="m-6">
        {sessions.map((session) => (
          <li
            key={session.id}
            className="flex justify-between items-center p-4 bg-secondary/40 border rounded-xl m-2 gap-1"
          >
            <span className="font-medium text-foreground">{session.title}</span>
            <span className="font-mono text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-md">
              {formatTime(session.time)}
            </span>
            <form action={deleteSession.bind(null, session.id)}>
              <Button type="submit" variant="ghost" className="text-destructive cursor-pointer"><X /></Button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
