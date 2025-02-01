<template>
  <div class="p-8 bg-white">
    <h1 class="text-2xl font-bold">Deckauswahl</h1>
    <div class="border-t-2 border-t-gray-200" />
    <div class="my-8" />
    <appCardGrid />
   <button class="fixed bottom-4 left-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700"
   @click="handleSignOut" >
    <Icon name="mdi:logout" size="24" color="white" />
   </button>
  </div>
</template>

<script lang="ts" setup>
const {signOut} = useAuth();

const handleSignOut = async() =>{
  await signOut()
}



definePageMeta({
  middleware: "auth",
});
</script>

<style></style>
