<template>
  <Study />
</template>

<script lang="ts">
import {defineComponent, ref,} from 'vue';
import Study from './components/21_Suspense/Index.vue';

export default defineComponent({
  name: 'App',
  setup() {
    const msg = ref('hahahaha');

    const updateMsg = (newVal: string) => {
      msg.value += newVal;
    };

    return {
      msg,
      updateMsg,
    };
  },
  components: {
    Study
  },
});
</script>
