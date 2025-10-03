'use client';

import { Character } from '@/types/rickAndMorty';
import CharacterCard from './CharacterCard';

type Props = { characters: Character[] };

export default function CharacterList({ characters }: Props) {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
            {characters.map((c) => (
                <CharacterCard key={c.id} character={c} />
            ))}
        </div>
    );
}
