<template>
  <h3>自定义hooks</h3>
  <div>x: {{ x }} y: {{ y }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import useMousePosition from '../../hooks/useMousePosition';

export default defineComponent({
  name:"Hook",
  setup() {
    const { x, y } = useMousePosition();
    return {
      x,
      y
    }
  }
})
</script>
