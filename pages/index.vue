<script setup lang="ts">
const countStore = useCountStore();

let users = await fetch('https://jsonplaceholder.typicode.com/users');
countStore.users = await users.json();
</script>
<template>
  <div>
    <button @click="countStore.count--">-</button>
    {{ countStore.count }}
    <button @click="countStore.count++">+</button>

    <h3>Users</h3>
    <h4>users Count: {{countStore.users.length}}</h4>
  </div>
</template>
