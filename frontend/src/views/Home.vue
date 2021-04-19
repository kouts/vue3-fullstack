<template>
  <div class="container">
    <div class="text-center">
      <img alt="Vue logo" src="../assets/logo.png" class="text-center">
    </div>
    <ul>
      <li v-for="item in items" :key="item.name">
        {{ item.name }} - {{ item.desc }}
      </li>
    </ul>
    <hello-world msg="Welcome to Vue.js 3 fullstack starter template" />
  </div>
</template>

<script lang="ts">

import { defineComponent, onMounted, ref } from 'vue';
import { fetchItems } from '../api/api';
import { IItem, IItems } from '../api/interfaces';
import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  components: {
    HelloWorld
  },
  setup () {
    const items = ref<Array<IItem>>([]);
    /*
    const newItems = [
      {
        name: 'test',
        desc: 'This is a desc'
      }
    ];
    */
    onMounted(() => {
      fetchItems().then((res: IItems) => {
        // console.log(res);
        // console.log(res.items);
        items.value = res.items;
      });
    });
    return {
      items
    };
  }
});
</script>
