'use client'

import { Button } from "@/components/ui/button";
import { Play, Square } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { createSession } from "@/app/actions";
import { formatTime } from "@/lib/utils";

export default function Timer() {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [taskTitle, setTaskTitle] = useState<string>("");

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

    async function handleSave() {
        await createSession(taskTitle, time);

        setTime(0);
        setTaskTitle("");
        setIsModalOpen(false);
    }

    function onButtonClick(): void {
        if (isPlaying) {
            setIsModalOpen((prev) => !prev);
        }

        setIsPlaying((prev) => !prev);
    }

    return (
    <>
      <h1 className="text-4xl font-bold mb-6">{formatTime(time)}</h1>
      <Button onClick={onButtonClick}>
        {isPlaying ? <Square className="mr-2 size-4 fill-current" /> : <Play className="mr-2 size-4 fill-current" />}
        {isPlaying ? "Arrêter" : "Démarrer"}
      </Button>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enregistrer la session</DialogTitle>
            <DialogDescription>Ajoutez un titre pour lier ce temps à un projet ou un client.</DialogDescription>
          </DialogHeader>
          <Input placeholder="Sur quoi travaillez-vous ?" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
          <Button onClick={handleSave}>Enregistrer</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}