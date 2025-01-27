<template>
  <div class="flex">
    <adminSidebar />
    <div class="h-full w-full p-4">
      <adminAddCard />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>

<style></style>
