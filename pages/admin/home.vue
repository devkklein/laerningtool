<template>
  <adminSidebar />

</template>

<script lang="ts" setup>
const {data} = useAuth();


definePageMeta({
  middleware: "auth",
});

onMounted(() => {
  console.log("Data:", data.user);
});

</script>

<style></style>
