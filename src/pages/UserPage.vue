<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { Home } from '../types/UserPage';

export default defineComponent({
  name: 'userpage',
  data(): Home {
    return { users: [], photos: [] };
  },
  methods: {
    goDetail() {},
  },
  beforeMount() {
    axios('https://jsonplaceholder.typicode.com/users').then(
      (data) => (this.users = data.data)
    );
  },
});
</script>

<template>
  <h3>This is Home of UserPage</h3>
  <ul>
    <li v-for="user in users" key="user.id" @click="goDetail">
      <p className="bold">{{ user.id }}</p>
      <p className="bold">{{ user.name }}</p>
      <p>{{ user.email }}</p>
    </li>
  </ul>
</template>

<style scoped>
h3 {
  margin-bottom: 20px;
  font-size: 1.5em;
  font-weight: 700;
}

li {
  margin-bottom: 20px;
}

p {
  margin-bottom: 5px;
}

.bold {
  font-weight: 700;
}
</style>
