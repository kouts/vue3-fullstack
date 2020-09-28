<template>
  <div class="container">
    <div class="d-flex flex-row justify-content-between align-items-center">
      <h1 class="mb-4">Users</h1>
      <div>
        <button type="button" class="btn btn-primary" @click="goToUser('add')">Add user</button>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <card-loading v-if="usersLoading" class="mb-3" :shimmer-style="{ height: '75px' }" />
        <template v-else>
          <div v-for="user in users" :key="user.id" class="card mb-3">
            <div class="card-body">
              <div class="d-flex flex-row flex-wrap">
                <div class="flex-grow-1">
                  <h2 class="card-title">{{ user.first_name }} {{ user.last_name }}</h2>
                </div>
                <div class="mb-2 mb-sm-0">
                  <button class="btn btn-sm btn-primary mr-2" type="button" @click="goToUser('display', user.id)">Display</button>
                  <button class="btn btn-sm btn-primary mr-2" type="button" @click="goToUser('edit', user.id)">Edit</button>
                  <button class="btn btn-sm btn-primary" type="button" @click="showDeleteModal = true; idToDelete = user.id;">Delete</button>
                </div>
              </div>
              {{ user.address }}
            </div>
          </div>
        </template>
      </div>
    </div>
    <modal v-model:basedOn="showDeleteModal" title="Delete user" css-class="mw10">
      <p>Are you sure you want to delete this user?</p>
      <hr class="full-hr" />
      <div class="row">
        <div class="col">
          <div class="float-right">
            <button class="btn btn-sm btn-primary" @click="deleteUserAction(idToDelete)">Delete</button>
            <button class="btn btn-sm btn-secondary ml-2" @click="showDeleteModal = false">Cancel</button>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import { User } from '@/api/interfaces';
import { fetchUsers, deleteUser } from '@/api/user';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import CardLoading from '@/components/CardLoading.vue';

export default {
  components: {
    CardLoading
  },
  setup () {
    const router = useRouter();
    const users = ref<Array<User>>([]);
    const showDeleteModal = ref(false);
    const idToDelete = ref(0);
    const usersLoading = ref(true);

    const fetchUsersData = () => {
      return fetchUsers().then((res: User[]) => {
        // console.log(res[0].first_name);
        users.value = res;
        usersLoading.value = false;
      });
    };

    const goToUser = (action: string, id: number) => {
      const userId: number | string = id || '';
      router.push({ path: `/users-details/${action}/${userId}` });
    };

    const deleteUserAction = async (id: number) => {
      await deleteUser(id);
      idToDelete.value = 0;
      showDeleteModal.value = false;
      fetchUsersData();
    };

    onMounted(() => {
      fetchUsersData();
    });

    return {
      users,
      goToUser,
      deleteUserAction,
      showDeleteModal,
      idToDelete,
      usersLoading
    };
  }
};
</script>

<style lang="scss" scoped>
  .mw10 {
    max-width: 640px;
  }
</style>
