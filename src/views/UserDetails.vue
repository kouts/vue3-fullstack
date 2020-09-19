<template>
  <div class="container">
    <h1>User {{ routeParams.id ? routeParams.id : 'new' }} details - {{ routeParams.action }} </h1>
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
// import { fetchItems } from '../api/api';
// import { Item, Items } from '../api/interfaces';

export default defineComponent({
  setup() {
    const route = useRoute();
    const routeParams = route.params;

    onMounted(() => {
      // console.log('User details');
    });
    return {
      routeParams
    };
  }
});
</script>
