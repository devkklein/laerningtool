<template>
  <div class="flex">
    <adminSidebar />
    <div class="w-full h-full p-4 flex space-x-6">
      <adminAddUser />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
</script>
