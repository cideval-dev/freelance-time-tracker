import { getAllSessions } from "@/db/queries";
import SessionItem from "@/components/SessionItem";

export default async function SessionList() {
  const sessions = await getAllSessions();

  if (sessions.length === 0) {
    return <p className="text-muted-foreground text-sm mt-6">Aucune session enregistrée.</p>;
  }

  return (
    <ul className="m-6 w-full max-w-md">
      {sessions.map((session) => (
        <SessionItem key={session.id} session={session} />
      ))}
    </ul>
  );
}

export function SessionListSkeleton() {
  return (
    <div className="m-6 w-full max-w-md space-y-3 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-16 bg-muted-foreground/20 border rounded-xl flex justify-between items-center p-4 m-2 gap-1" />
      ))}
    </div>
  );
}