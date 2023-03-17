<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import router from '../router';
import { UserInfo } from '../types/UserPageDetail';

export default defineComponent({
  name: 'userpage-id',
  data(): UserInfo {
    return { user: undefined };
  },
  methods: {
    back() {
      router.go(-1);
    },
  },
  beforeMount() {
    axios(
      `https://jsonplaceholder.typicode.com/users/${this.$route.params.userId}`
    ).then((data) => (this.user = data.data));
  },
});
</script>

<template>
  <h3>UserPage Detail</h3>
  <div v-if="!!user">
    <p className="name">{{ user.name }}</p>
    <p className="contact">email : {{ user.email }}</p>
    <p className="contact">phone : {{ user.phone }}</p>
    <p className="contact mb">website : {{ user.website }}</p>
    <p className="city">city : {{ user.address.city }}</p>
    <p>company : {{ user.company.name }}</p>
  </div>
  <button @click="back">back</button>
</template>

<style scoped lang="scss">
h3 {
  margin-bottom: 40px;
  font-size: 1.5em;
  font-weight: 700;
}

p {
  margin-bottom: 5px;
}

button {
  margin-top: 30px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #bbb;

  &:active {
    background-color: lightgray;
  }
}

.name {
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 1.2rem;
}

.contact {
  font-size: 1.2rem;

  &:last-child {
    margin-bottom: 20px;
  }
}

.city {
  margin-top: 20px;
}
</style>
