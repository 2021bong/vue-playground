<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'app',
});
</script>

<template>
  <div id="main">
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
  padding: 40px;
}
</style>
