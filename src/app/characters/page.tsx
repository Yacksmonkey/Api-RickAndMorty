import CharacterPagination from './CharacterPagination';
import CharacterModal from './CharacterModal';

export const metadata = { title: 'Personajes | Rick & Morty' };

export default function CharactersPage() {
    return (
        <main className="mx-auto max-w-6xl p-6">
            <h1 className="text-3xl font-bold mb-6">Personajes</h1>
            <CharacterPagination />
            <CharacterModal />
        </main>
    );
}
