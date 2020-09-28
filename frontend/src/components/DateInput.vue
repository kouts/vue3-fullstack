<template>
  <input v-model="valueProxy" type="text" class="form-control" :disabled="disabled">
</template>

<script>
import { ref, watch, onUpdated } from 'vue';
import { format, parseISO, isValid } from 'date-fns';
// import { clone } from '@/common/utils';

function convertToGreekDate (isoDate) {
  const parsed = parseISO(isoDate);
  return isValid(parsed) ? format(parsed, 'dd/MM/yyyy') : '';
}

export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup (props, ctx) {
    let fired = false;
    const valueProxy = ref('');
    if (props.modelValue) {
      valueProxy.value = convertToGreekDate(props.modelValue);
      fired = true;
    }
    onUpdated(() => {
      if (!fired) {
        valueProxy.value = convertToGreekDate(props.modelValue);
      }
      fired = true;
    });
    watch(
      valueProxy,
      (newVal) => {
        /* eslint-disable-next-line no-useless-escape */
        const isGreekDate = newVal.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
        if (isGreekDate) {
          const parts = newVal.split('/');
          const date = `${parts[2]}-${parts[1]}-${parts[0]}`;
          ctx.emit('update:modelValue', date);
        } else {
          ctx.emit('update:modelValue', '');
        }
      }, {
        immediate: true
      }
    );
    return {
      // input,
      valueProxy
    };
  }
};
</script>
