<template>
  <div>
    <div class="p-4 bg-white rounded-xl shadow-lg space-y-3">
      <form @submit.prevent="submitForm">
        <div>
          <label for="frontText" class="block text-sm font-medium text-gray-700">Vorderseite</label>
          <textarea id="frontText" v-model="frontText"
            class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm focus:outline-none"
            rows="3" spellcheck="true"></textarea>
        </div>
        <div>
          <label for="backText" class="block text-sm font-medium text-gray-700">Rückseite</label>
          <textarea id="backText" v-model="backText"
            class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm focus:outline-none"
            rows="3" spellcheck="true"></textarea>
        </div>
        <div class="flex flex-col">
          <label for="role">Thema</label>
          <select v-model="deckName" id="role" class="border border-gray-200 rounded-lg p-1">
            <option value="uform">Uform</option>
          </select>
        </div>
        <div>
          <label for="cardNumber" class="block text-sm font-medium text-gray-700">Kartennummer</label>
          <input type="number" id="cardNumber" v-model="cardNumber"
            class="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm focus:outline-none" />
        </div>

        <div>
          <button type="submit"
            class="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Karte erstellen
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";


const frontText = ref("");
const backText = ref("");
const cardNumber = ref("");
const deckName = ref(0);

const submitForm = async () => {
  const response = await $fetch("/api/admin/addCard", {
    method: "POST",
    body: {
      frontText: frontText.value,
      backText: backText.value,
      deckName: deckName.value,
      cardNumber: cardNumber.value,
    },
  });
  if (response.ok) {
    alert("Karte erstellt");
    frontText.value = "";
    backText.value = "";
    cardNumber.value = "";

  } else {
    alert("Fehler beim Erstellen der Karte");
  }
};
</script>
