<template>
  <div class="flex flex-wrap gap-4">
    <div
     
      v-for="deck in decks"
      :key="deck.id"
      class="border border-gray-300 p-4 rounded-lg w-52 hover:border-blue-500 cursor-pointer"
      @click="selectDeck(deck)"
    >
      <h3>{{ deck.name }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, provide } from "vue";
import { useRouter } from "vue-router";
import { useDeckStore } from "~/stores/deckStores";





interface Deck {
  id: number;
  name: string;
  cards: [];
}



const router = useRouter();
const decks = ref<Deck[]>([]);



const fetchDecks = async () => {
  try {
    const response = await $fetch("/api/app/getDecks");

    if (response.decks) {
      decks.value = response.decks.map((deck: any) => ({
        id: deck.id,
        name: deck.name,
        cards: deck.cards || [],
      }));
    } else {
      decks.value = [];
    }
    console.log("Decks:", decks.value);
  } catch (error) {
    console.error("Error fetching decks:", error);
  }
};

onMounted(() => {
  fetchDecks();
});

const selectDeck = (deck: Deck) => {
  const deckStore = useDeckStore();
  deckStore.setSelectedDeck(deck);
  router.push("/app/card");
};

fetchDecks();
</script>
