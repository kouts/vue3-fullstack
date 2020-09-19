<template>
  <div class="container">
    <h1 class="mb-4">This is the users page</h1>
    <div class="row">
      <div class="col-sm-12">
        <div v-for="user in users" :key="user.id" class="card">
          <div class="card-body">
            <h2 class="card-title">{{ user.first_name }} {{ user.last_name }}</h2>
            {{ user.address }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { User } from '../api/interfaces';
import { fetchUsers } from '../api/user';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const users = ref<Array<User>>([]);
    onMounted(() => {
      fetchUsers().then((res: User[]) => {
        // console.log(res[0].first_name);
        users.value = res;
      });
    });

    return {
      users
    };
  }
};
</script>
