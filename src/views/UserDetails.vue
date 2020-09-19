<template>
  <div class="container">
    <h1 v-if="routeParams.id"> {{ fullName }}</h1>
    <h1 v-else>New user</h1>
    <form @submit.prevent="save">
      <div class="row">
        <div class="col-sm-6 form-group">
          <label>First name</label>
          <input v-model="form.first_name" type="text" class="form-control" :disabled="disabled">
        </div>
        <div class="col-sm-6 form-group">
          <label>Last name</label>
          <input v-model="form.last_name" type="text" class="form-control" :disabled="disabled">
        </div>
        <div class="col-sm-6 form-group">
          <label>Birthday</label>
          <input v-model="form.birthday" type="text" class="form-control" :disabled="disabled">
        </div>
        <div class="col-sm-6 form-group">
          <label>Company</label>
          <input v-model="form.company" type="text" class="form-control" :disabled="disabled">
        </div>
        <div class="col-sm-6 form-group">
          <label>Email</label>
          <input v-model="form.email" type="text" class="form-control" :disabled="disabled">
        </div>
        <div class="col-sm-12 form-group">
          <label>Address</label>
          <textarea v-model="form.address" class="form-control" rows="3" :disabled="disabled"></textarea>
        </div>
      </div>
      <div :class="['row', disabled && 'd-none']">
        <div class="col-sm-12">
          <div class="float-right">
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { fetchUser, addUser, editUser } from '../api/user';
import { User } from '../api/interfaces';
import { clone } from '@/common/utils';
import { format } from 'date-fns';

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const routeParams = route.params;
    const form = ref<User>({
      id: 0,
      first_name: '',
      last_name: '',
      birthday: '',
      company: '',
      email: '',
      address: '',
      created_at: '',
      updated_at: ''
    });
    const fullName = ref('');
    const disabled = ref(false);

    // onCreated
    (async() => {
      if (routeParams.id) {
        form.value = await fetchUser(+routeParams.id);
        fullName.value = `${form.value.first_name} ${form.value.last_name}`;
      }
      if (routeParams.action === 'display') {
        disabled.value = true;
      }
    })();

    const save = async() => {
      const toSend = clone(form.value);
      toSend.updated_at = format(new Date(), 'yyyy-MM-dd hh:mm');
      if (routeParams.action === 'add') {
        toSend.created_at = format(new Date(), 'yyyy-MM-dd hh:mm');
        await addUser(toSend);
      }
      if (routeParams.action === 'edit') {
        await editUser(toSend);
      }
      router.push({ path: '/users' });
    };

    return {
      disabled,
      fullName,
      routeParams,
      form,
      save
    };
  }
});
</script>
