<template>
  <div class="p-4 h-screen">
    <div
      class="flex flex-col w-32 h-full bg-white text-black rounded-xl shadow-lg"
    >
      <div
        class="flex items-center justify-center h-20 border-b-4 border-gray-200"
      >
        <h1 class="text-2xl">Admin</h1>
      </div>
      <div class="flex flex-col items-justify-center h-full items-center">
        <router-link
          to="/admin/user"
          class="p-2 hover:border-blue-500 w-full text-center border border-grey"
        >
          <Icon name="mdi:user-outline" size="24" color="white" />
        </router-link>
        <router-link
          to="/admin/card"
          class="p-2 hover:border-blue-500 w-full text-center border border-grey"
        >
          <Icon name="guidance:card" size="24" color="white" />
        </router-link>

        <button
          class="p-2 mt-auto hover:border-blue-500 w-full text-center border border-grey"
          @click="signOut()"
        >
          <Icon name="mdi:logout" size="24" color="white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { signOut } = useAuth();
</script>

<style></style>
