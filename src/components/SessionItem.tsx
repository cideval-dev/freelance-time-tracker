'use client'

import { formatTime } from "@/lib/utils";
import { Button } from "./ui/button";
import { deleteSession } from "@/app/actions";
import { Session } from "@/db/schema";
import { X } from "lucide-react";
import { Dialog, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogFooter } from "./ui/dialog";
import { useState } from "react";

export default function SessionItem({ session }: { session: Session }) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    async function handleDelete() {
        await deleteSession(session.id);
    }

    return (
        <li
            key={session.id}
            className="flex justify-between items-center p-4 bg-secondary/40 border rounded-xl m-2 gap-1"
        >
            <span className="font-medium text-foreground">{session.title}</span>
            <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-md">
                    {formatTime(session.time)}
                </span>

                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10 h-8 w-8">
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Supprimer cette session ?</DialogTitle>
                            <DialogDescription>
                                Êtes-vous sûr de vouloir supprimer la session "{session.title}" ? Cette action est irréversible.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className="gap-2">
                            <Button variant="outline" onClick={() => setIsModalOpen(false)} autoFocus>
                                Annuler
                            </Button>
                            <Button variant="destructive" onClick={handleDelete}>
                                Supprimer
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </li>
    )
}