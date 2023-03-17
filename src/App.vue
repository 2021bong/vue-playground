<script lang="ts">
import { defineComponent } from 'vue';
import UserPage from './pages/UserPage.vue';

export default defineComponent({
  name: 'app',
  components: {
    UserPage,
  },
  router: [
    { path: '/userpage', components: UserPage },
    { path: '/todolist', components: UserPage },
  ],
  data() {
    return {
      pages: ['userpage', 'todolist'],
    };
  },
});
</script>

<template>
  <div id="main">
    <h1>Welcome to Vue Playground!</h1>
    <router-link :to="p" v-for="p in pages" key="p"
      ><button>{{ p }}</button></router-link
    >
    <router-view />
  </div>
</template>

<style scoped lang="scss">
#main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 50px;
}

a {
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0px;
  }

  button {
    padding: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    font-size: 1em;
  }
}
</style>
