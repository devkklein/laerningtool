<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold mb-8">{{ deckName }}</h1>
    <div class="card bg-white p-6 rounded-lg shadow-lg mb-8 w-3/5 h-96">
      <textarea v-if="currentCard" class="text-xl min-w-full min-h-full">{{ showFront ? currentCard.frontText : currentCard.backText }}</textarea>
      <textarea v-else class="text-xl">Loading...</textarea>
    </div>
    <div class="flex space-x-4">
      <button @click="prevCard" :disabled="currentIndex === 0" class="btn">Previous</button>
      <button @click="flipCard" class="btn">Flip</button>
      <button @click="nextCard" :disabled="currentIndex === cards.length - 1" class="btn">Next</button>
    </div>
    <button @click="router.push('/app/home')" class="fixed bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700">
      Zurück zur Deckauswahl
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
const router = useRouter();

interface currentCard {
  id: number;
  frontText: string;
  backText: string;
}


const deckId = router.currentRoute.value.params.cardId;
const deckName = ref('');
const cards = ref([]);
const currentIndex = ref(0);
const showFront = ref(true);

const fetchCards = async () => {
  try {
    const response = await $fetch(`/api/app/${deckId}`);
    deckName.value = response.deck.name;
    cards.value = response.cards;
  } catch (error) {
    console.error("Error fetching cards:", error);
  }
};

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    showFront.value = true;
  }
};

const nextCard = () => {
  if (currentIndex.value < cards.value.length - 1) {
    currentIndex.value++;
    showFront.value = true;
  }
};

const flipCard = () => {
  showFront.value = !showFront.value;
};

onMounted(() => {
  fetchCards();
});

const currentCard = computed(() => cards.value[currentIndex.value]);

</script>

<style scoped>
.btn {
  @apply px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 disabled:bg-gray-400;
}
</style>