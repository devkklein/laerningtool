<template>
  <div class="flex flex-wrap gap-4">
    <div
      v-for="deck in decks"
      :key="deck.id"
      class="border border-gray-300 p-4 rounded-lg w-52 hover:border-blue-500 cursor-pointer"
      v-on:click="selcetCard(deck.id)"
      >
      <NuxtLink to="">
        
      <h3>{{ deck.name }}</h3>
    </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";


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

const selcetCard = (cardId: number) => {
  return router.push(`/app/${cardId}`);
};

onMounted(() => {
  fetchDecks();
});




</script>
