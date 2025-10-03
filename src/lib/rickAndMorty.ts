import { ApiListResponse, Character } from '@/types/rickAndMorty';

const BASE_URL = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(page = 1): Promise<ApiListResponse<Character>> {
    const res = await fetch(`${BASE_URL}/character?page=${page}`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        throw new Error(`Error al obtener personajes (status ${res.status})`);
    }
    return res.json();
}

export async function fetchCharacterById(id: number): Promise<Character> {
    const res = await fetch(`${BASE_URL}/character/${id}`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        throw new Error(`Error al obtener personaje ${id} (status ${res.status})`);
    }
    return res.json();
}