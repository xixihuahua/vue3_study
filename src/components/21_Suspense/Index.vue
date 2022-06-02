<template>
  <h1>我是父组件</h1>
  <Suspense>
    <template v-slot:default>
      <Child/>
    </template>
    <template v-slot:fallback>
      <h3>稍等，加载中...</h3>
    </template>
  </Suspense>
</template>

<script>
// import Child from './Child'//静态引入
import {defineAsyncComponent} from 'vue'
const Child = defineAsyncComponent(()=>import('./Child.vue')) //异步引入
export default {
  name:'Father',
  components:{Child},
}
</script>
