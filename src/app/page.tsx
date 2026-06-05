import Timer from "@/components/Timer";
import { getAllSessions } from "@/db/queries";
import SessionItem from "@/components/SessionItem";

export default async function Home() {
  const sessions = await getAllSessions();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Timer />

      <ul className="m-6">
        {sessions.map((session) => (
          <SessionItem session={session} key={session.id} />
        ))}
      </ul>
    </div>
  );
}
