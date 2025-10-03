'use client';

import { useState } from 'react';
import { Character } from '@/types/rickAndMorty';
import CharacterList from './CharacterList';
import { Loader2 } from 'lucide-react'; // ícono para spinner

export default function CharacterPagination() {
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [data, setData] = useState<{
        characters: Character[];
        totalPages: number;
    } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function loadPage(p: number, searchQuery: string = query) {
        try {
            setError(null);
            setLoading(true);

            const url = searchQuery
                ? `https://rickandmortyapi.com/api/character?page=${p}&name=${searchQuery}`
                : `https://rickandmortyapi.com/api/character?page=${p}`;

            const res = await fetch(url);
            if (!res.ok) throw new Error('Error fetching characters');

            const json = await res.json();
            setData({
                characters: json.results,
                totalPages: Math.min(json.info.pages, 10),
            });
            setPage(p);
        } catch (err) {
            setError('No characters found.');
        } finally {
            setLoading(false);
        }
    }


    if (!data && !loading) {
        loadPage(1);
    }

    return (
        <div className="space-y-6">

            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by name..."
                    className="px-3 py-2 border rounded w-64"
                />
                <button
                    onClick={() => loadPage(1, query)}
                    className="ml-2 px-3 py-2 rounded bg-zinc-700 text-white hover:bg-zinc-800"
                >
                    Search
                </button>
            </div>

            {loading && (
                <div className="flex justify-center py-6">
                    <Loader2 className="h-6 w-6 animate-spin text-zinc-700" />
                </div>
            )}


            {error && <p className="text-center text-red-500">{error}</p>}


            {data && !loading && !error && (
                <>
                    <CharacterList characters={data.characters} />


                    <div className="flex gap-4 justify-center mt-6">
                        <button
                            disabled={page === 1}
                            onClick={() => loadPage(page - 1)}
                            className="px-3 py-2 rounded bg-zinc-700 text-white disabled:opacity-40"
                        >
                            ← Previous
                        </button>

                        <span className="px-3 py-2">
              Page {page} / {data.totalPages}
            </span>

                        <button
                            disabled={page === data.totalPages}
                            onClick={() => loadPage(page + 1)}
                            className="px-3 py-2 rounded bg-zinc-700 text-white disabled:opacity-40"
                        >
                            Next →
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
