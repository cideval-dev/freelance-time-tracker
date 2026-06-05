import Timer from "@/components/Timer";
import { Suspense } from "react";
import SessionList, { SessionListSkeleton } from "@/components/SessionList";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Timer />

      <Suspense fallback={<SessionListSkeleton />}>
        <SessionList />
      </Suspense>
    </div>
  );
}
