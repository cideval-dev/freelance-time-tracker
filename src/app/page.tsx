'use client'

import { Button } from "@/components/ui/button";
import { Play, Square } from "lucide-react";
import { useState, useEffect } from "react";

function formatTime(time: number): string {
  const hours: number = Math.floor(time / 3600);
  const minutes: number = Math.floor(time % 3600 / 60);
  const seconds: number = Math.floor(time % 3600 % 60);

  return `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
}

export default function Home() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    }
  }, [isPlaying])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">{formatTime(time)}</h1>
      <Button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <Square className="mr-2 size-4 fill-current" /> : <Play className="mr-2 size-4 fill-current" />} 
        {isPlaying ? "Arrêter" : "Démarrer"}
        </Button>
    </div>
  );
}
