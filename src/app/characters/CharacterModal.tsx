'use client';

import { useUIStore } from '@/store/ui';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import Link from 'next/link';
import Image from 'next/image';

export default function CharacterModal() {
    const { selectedCharacter, isModalOpen, setModalOpen } = useUIStore();

    if (!selectedCharacter) return null;

    return (
        <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{selectedCharacter.name}</DialogTitle>
                </DialogHeader>
                <div className="flex gap-4">
                    <div className="relative w-24 h-24 rounded overflow-hidden">
                        <Image
                            src={selectedCharacter.image}
                            alt={selectedCharacter.name}
                            fill
                            sizes="96px"
                        />
                    </div>
                    <div>
                        <p>{selectedCharacter.status} • {selectedCharacter.species}</p>
                        <p className="text-sm opacity-70">{selectedCharacter.gender}</p>
                    </div>
                </div>
                <DialogFooter>
                    <Link
                        href={`/characters/${selectedCharacter.id}`}
                        className="px-4 py-2 rounded bg-zinc-700 text-white hover:bg-zinc-800"
                        onClick={() => setModalOpen(false)}
                    >
                        More details →
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
