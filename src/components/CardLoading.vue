<template>
  <div v-for="card in [1, 2]" :key="card" class="card" v-bind="$attrs">
    <div class="card-body">
      <div class="shimmer-bg" :style="shimmerStyle"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    shimmerStyle: {
      type: Object,
      default: () => ({
        height: '100px'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.shimmer-bg {
  animation-duration: 2.2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
  background: #ddd;
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
  background-size: 1200px 100%;
}
@-webkit-keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
@keyframes shimmer {
  0% {
    background-position: -1200px 0;
  }
  100% {
    background-position: 1200px 0;
  }
}
</style>
