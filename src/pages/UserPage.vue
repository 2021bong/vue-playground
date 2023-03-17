<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { Home } from '../types/UserPage';

export default defineComponent({
  name: 'userpage',
  data(): Home {
    return { users: [] };
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
    <router-link
      v-for="user in users"
      key="user.id"
      :to="'/userpage/' + user.id"
      className="link"
    >
      <li className="user-info">
        <p className="bold user-id">{{ user.id }}</p>
        <div>
          <p className="bold">{{ user.name }}</p>
          <p>{{ user.email }}</p>
        </div>
      </li>
    </router-link>
  </ul>
</template>

<style scoped>
h3 {
  margin-bottom: 40px;
  font-size: 1.5em;
  font-weight: 700;
}

li {
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #bbb;
  border-radius: 10px;
}

p {
  margin-bottom: 5px;
}

.link {
  text-decoration: none;
  color: #000;
}

.bold {
  font-weight: 700;
}

.user-id {
  margin-right: 30px;
}

.user-info {
  display: flex;
  align-items: center;
}
</style>
