import { create } from 'zustand';
import { Character } from '@/types/rickAndMorty';

type UIState = {
    selectedCharacter: Character | null;
    isModalOpen: boolean;
    setSelectedCharacter: (char: Character | null) => void;
    setModalOpen: (open: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
    selectedCharacter: null,
    isModalOpen: false,
    setSelectedCharacter: (char) => set({ selectedCharacter: char }),
    setModalOpen: (open) => set({ isModalOpen: open }),
}));
