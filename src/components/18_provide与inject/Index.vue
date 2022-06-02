<template>
  <div class="app">
    <h3>我是父组件（祖），{{name}}--{{price}}</h3>
    <Child/>
  </div>
</template>

<script>
import { reactive,toRefs,provide } from 'vue'
import Child from './Child.vue'
export default {
  name:'Father',
  components:{Child},
  setup(){
    let car = reactive({name:'奔驰',price:'40W'})
    provide('car',car) //给自己的后代组件传递数据
    return {...toRefs(car)}
  }
}
</script>

<style>
.app{
  background-color: gray;
  padding: 10px;
}
</style>