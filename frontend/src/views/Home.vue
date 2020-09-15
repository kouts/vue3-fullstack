<template>
  <div class="container">
    <div class="text-center">
      <img alt="Vue logo" src="../assets/logo.png" class="text-center">
    </div>
    <hello-world msg="Welcome to Vue.js 3 starter template!" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
});
</script>
