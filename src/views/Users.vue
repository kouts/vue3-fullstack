<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-between align-items-center">
      <h1 class="mb-4">This is the users page</h1>
      <div>
        <button type="button" class="btn btn-primary" @click="goToUser('add')">Add user</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div v-for="user in users" :key="user.id" class="card mb-3">
          <div class="card-body">
            <div class="d-flex flex-row flex-wrap">
              <div class="flex-grow-1">
                <h2 class="card-title">{{ user.first_name }} {{ user.last_name }}</h2>
              </div>
              <div class="mb-2 mb-sm-0">
                <button class="btn btn-sm btn-primary mr-2" type="button" @click="goToUser('display', user.id)">Display</button>
                <button class="btn btn-sm btn-primary mr-2" type="button" @click="goToUser('edit', user.id)">Edit</button>
                <button class="btn btn-sm btn-primary" type="button" @click="deleteUser(user.id)">Delete</button>
              </div>
            </div>
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
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const users = ref<Array<User>>([]);

    const goToUser = (action: string, id: number) => {
      const userId: number | string = id || '';
      router.push({ path: `/users-details/${action}/${userId}` });
    };

    const deleteUser = (id: number) => {
      alert(`Deleteing user ${id}`);
    };

    onMounted(() => {
      fetchUsers().then((res: User[]) => {
        // console.log(res[0].first_name);
        users.value = res;
      });
    });

    return {
      users,
      goToUser,
      deleteUser
    };
  }
};
</script>
