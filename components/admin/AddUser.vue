<template>
  <div class="p-4 bg-white rounded-xl shadow-lg space-y-3">
    <h1 class="">Add User</h1>
    <div class="flex flex-col">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="username"
        type="text"
        class="border border-gray-200 rounded-lg p-1"
      />
    </div>

    <div class="flex flex-col">
      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        class="border border-gray-200 rounded-lg p-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="role">Role</label>
      <select
        id="role"
        v-model="role"
        class="border border-gray-200 rounded-lg p-1"
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </div>
    <div class="flex flex-col">
      <button class="bg-blue-500 text-white p-2 rounded-lg" @click="addUser">
        Add User
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const username = ref("");
const password = ref("");
const role = ref("");

const addUser = async () => {
  const response = await $fetch("/api/admin/addUser", {
    method: "POST",

    body: {
      username: username.value,
      password: password.value,
      role: role.value,
    },
  });
  if (response.ok) {
    alert("User added");
  } else {
    alert("Error adding user");
  }
};
</script>

<style></style>
