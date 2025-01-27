// filepath: /home/konrad/Dokumente/source/laerningtool/stores/deckStore.ts
import { defineStore } from 'pinia';

export const useDeckStore = defineStore('deck', {
  state: () => ({
    selectedDeck: null as Deck | null,
  }),
  actions: {
    setSelectedDeck(deck: Deck) {
      this.selectedDeck = deck;
    },
  },
});

interface Deck {
  id: number;
  name: string;
  cards: Card[];
}

interface Card {
  id: number;
  frontText: string;
  backText: string;
}