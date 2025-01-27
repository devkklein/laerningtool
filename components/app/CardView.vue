// filepath: /home/konrad/Dokumente/source/laerningtool/pages/card-view.vue
<template>
  <div class="p-8 bg-white">
    <h1 class="text-2xl font-bold mb-4">{{ deck?.name }}</h1>
    <div v-if="deck && deck.cards.length > 0" class="border border-gray-300 p-4 rounded-lg w-96 mx-auto">
      <div v-if="showFront" class="text-center">
        <h3 class="text-xl font-bold mb-2">Vorderseite</h3>
        <p>{{ deck.cards[currentCardIndex].frontText }}</p>
      </div>
      <div v-else class="text-center">
        <h3 class="text-xl font-bold mb-2">Rückseite</h3>
        <p>{{ deck.cards[currentCardIndex].backText }}</p>
      </div>
      <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" @click="toggleSide">Seite wechseln</button>
      <button class="mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded-lg" @click="nextCard">Nächste Karte</button>
    </div>
    <div v-else class="text-center">
      <p>Keine Karten in diesem Deck.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const deckStore = useDeckStore();
const deck = deckStore.selectedDeck;
const currentCardIndex = ref(0);
const showFront = ref(true);

const toggleSide = () => {
  showFront.value = !showFront.value;
};

const nextCard = () => {
  if (currentCardIndex.value < deck.cards.length - 1) {
    currentCardIndex.value++;
    showFront.value = true;
  } else {
    currentCardIndex.value = 0;
    showFront.value = true;
  }
};
</script>