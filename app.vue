<template>
  <naive-config>
    <div class="bg-gray-200">
      <NuxtPage />
    </div>
  </naive-config>
</template>

<script>
import { createPinia } from 'pinia';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
});
</script>