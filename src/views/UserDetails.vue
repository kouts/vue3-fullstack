<template>
  <div class="container">
    <h1>User {{ routeParams.id ? routeParams.id : 'new' }} details - {{ routeParams.action }} </h1>
    <form @submit.prevent="save">
      <div class="row">
        <div class="col-sm-6 form-group">
          <label>First name</label>
          <input v-model="form.first_name" type="text" class="form-control">
        </div>
        <div class="col-sm-6 form-group">
          <label>Last name</label>
          <input v-model="form.last_name" type="text" class="form-control">
        </div>
        <div class="col-sm-6 form-group">
          <label>Birthday</label>
          <input v-model="form.birthday" type="text" class="form-control">
        </div>
        <div class="col-sm-6 form-group">
          <label>Company</label>
          <input v-model="form.company" type="text" class="form-control">
        </div>
        <div class="col-sm-6 form-group">
          <label>Email</label>
          <input v-model="form.email" type="text" class="form-control">
        </div>
        <div class="col-sm-12 form-group">
          <label>Address</label>
          <textarea v-model="form.address" class="form-control" rows="3"></textarea>
        </div>
      </div>
      <div class="row">
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
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { addUser } from '../api/user';
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
    const save = async() => {
      const toSend = clone(form.value);
      if (routeParams.action === 'add') {
        toSend.created_at = format(new Date(), 'yyyy-MM-dd hh:mm');
        toSend.updated_at = format(new Date(), 'yyyy-MM-dd hh:mm');
        await addUser(toSend);
      }
      router.push({ path: '/users' });
    };

    onMounted(() => {
      // console.log('User details');
    });
    return {
      routeParams,
      form,
      save
    };
  }
});
</script>
