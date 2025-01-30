<template>
  <div class="p-4 bg-white rounded-xl shadow-lg space-y-3">
    <h1 class="">Add User</h1>
    <div class="flex flex-col">
      <label for="name">Name</label>
      <input
        v-model="username"
        type="text"
        id="name"
        class="border border-gray-200 rounded-lg p-1"
      />
    </div>

    <div class="flex flex-col">
      <label for="password">Password</label>
      <input
        v-model="password"
        type="password"
        id="password"
        class="border border-gray-200 rounded-lg p-1"
      />
    </div>
    <div class="flex flex-col">
      <label for="role">Role</label>
      <select
        v-model="role"
        id="role"
        class="border border-gray-200 rounded-lg p-1"
      >
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </div>
    <div class="flex flex-col">
      <button @click="addUser" class="bg-blue-500 text-white p-2 rounded-lg">
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
