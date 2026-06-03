'use client'

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Mon Tracker de Temps</h1>
      <Button><Play className="mr-2 size-4 fill-current" /> Démarrer</Button>
    </div>
  );
}
