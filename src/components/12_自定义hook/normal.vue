<template>
  <h3>自定义hooks</h3>
  <div>x: {{ pointer.x }} y: {{ pointer.y }}</div>
</template>

<script lang="ts">
import {onBeforeMount, onMounted, reactive} from "vue"

export default {
  name: "Normal",
  setup() {
    const pointer = reactive({
      x:0, y:0
    });

    const clickHandler = (event: MouseEvent) => {
      pointer.x = event.pageX;
      pointer.y = event.pageY;
    }

    onMounted(() => {
      window.addEventListener('click', clickHandler)
    })

    onBeforeMount(() => {
      window.removeEventListener('click', clickHandler)
    })

    return {
      pointer
    }
  }
}
</script>

