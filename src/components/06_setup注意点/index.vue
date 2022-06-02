<template>
  <Demo @hello="sayHello" sex="女" msg="让我康康context">
    <h1>我是一个插槽</h1>
    <template v-slot:nameSlot>
      我是有名字的插槽
    </template>
  </Demo>
</template>

<script>
import Demo from './Demo'

export default {
  name: "SetUPTest",
  components: {Demo},
  setup(){
    function sayHello(msg) {
      console.log('我是父组件的sayHello方法',msg)
    }
    return{
      sayHello,
    }
  }
}
</script>

<style scoped>

</style>