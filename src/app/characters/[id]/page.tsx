import Image from 'next/image';
import Link from 'next/link';
import { fetchCharacterById } from '@/lib/rickAndMorty';

type Props = {
    params: { id: string };
};

export default async function CharacterDetailPage({ params }: Props) {
    const id = Number(params.id);
    const character = await fetchCharacterById(id);

    return (
        <main className="mx-auto max-w-4xl p-6">
            <Link href="/characters" className="text-blue-600 hover:underline">
                ← Back to list
            </Link>

            <div className="mt-6 flex flex-col md:flex-row gap-6">
                <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow">
                    <Image
                        src={character.image}
                        alt={character.name}
                        fill
                        sizes="256px"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-2">{character.name}</h1>
                    <p className="mb-2">
                        <span className="font-semibold">Status:</span> {character.status}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Species:</span> {character.species}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Gender:</span> {character.gender}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Origin:</span>{' '}
                        {character.origin.name}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Location:</span>{' '}
                        {character.location.name}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Appears in:</span>{' '}
                        {character.episode.length} episodes
                    </p>
                </div>

            </div>
        </main>
    );
}
