'use client';

import Image from 'next/image';
import { Character } from '@/types/rickAndMorty';
import { useUIStore } from '@/store/ui';

type Props = { character: Character };

export default function CharacterCard({ character }: Props) {
    const setSelectedCharacter = useUIStore((s) => s.setSelectedCharacter);
    const setModalOpen = useUIStore((s) => s.setModalOpen);

    const handleClick = () => {
        setSelectedCharacter(character);
        setModalOpen(true);
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer rounded-2xl shadow p-3 hover:shadow-md transition"
        >
            <div className="relative w-full aspect-[1/1] rounded-xl overflow-hidden mb-2">
                <Image src={character.image} alt={character.name} fill sizes="220px" />
            </div>
            <h3 className="font-semibold">{character.name}</h3>
            <p className="text-sm opacity-70">
                {character.status} • {character.species}
            </p>
        </div>
    );
}
