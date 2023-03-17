<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
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
  </div>
</template>

<style scoped lang="scss">
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
