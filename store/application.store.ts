import { HistoryItem } from '@/app/types';
import { create } from 'zustand';

interface State {
  historyItems: HistoryItem[] | [];
  addHistoryItem: (newItem: HistoryItem) => void;
  removeAllHistoryItem: () => void;
}

export const useStore = create<State>((set) => ({
  historyItems: [],
  addHistoryItem: (newItem: HistoryItem) =>
    set((state) => ({ historyItems: [...state.historyItems, newItem] })),
  removeAllHistoryItem: () => set({ historyItems: [] }),
}));
