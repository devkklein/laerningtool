<template>
  <div class="p-8 bg-white">
    <h1 class="text-2xl font-bold">Deckauswahl</h1>
    <div class=" border-t-2 border-t-gray-200"></div>
    <div class=" my-8"></div>
    <appCardGrid />
    
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});


</script>

<style>

</style>