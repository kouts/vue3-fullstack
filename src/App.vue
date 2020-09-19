<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import '@/scss/app.scss';

export default defineComponent({
  setup() {
    const route = useRoute();
    const layout = computed(() => `layout-${route.meta.layout || 'default'}`);
    return {
      layout
    };
  }
});
</script>
