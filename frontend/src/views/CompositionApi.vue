<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Composition API</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <label>First Name</label>
          <input v-model="data.firstName" type="text" class="form-control" />
          <small class="form-text text-muted">{{ data.firstName }}</small>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="form-group">
          <label>Last Name</label>
          <input v-model="data.lastName" type="text" class="form-control" />
          <small class="form-text text-muted">{{ data.lastName }}</small>
        </div>
      </div>
    </div>
    <hr class="mt-0" />
    <div class="form-group row">
      <div class="col">
        <h4>Addition</h4>
        <input v-model="num1" type="text" class="form-control d-inline-block w-auto mr-2">
        <div class="d-inline-block mr-2">+</div>
        <input v-model="num2" type="text" class="form-control d-inline-block w-auto mr-2">
        <div class="d-inline-block mr-2">=</div>
        <span>{{ result }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const data = ref({
      firstName: 'Giannis',
      lastName: 'Koutsaftakis'
    });
    const num1 = ref(0);
    const num2 = ref(0);
    const result = computed(() => +num1.value + +num2.value);
    return {
      data,
      num1,
      num2,
      result
    };
  }
};
</script>

<style>

</style>
