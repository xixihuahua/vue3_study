<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>性别props：{{ sex }}</h2>
  <button @click="sayHello">sayHello</button>
  <slot></slot>
  <slot name="nameSlot"></slot>
</template>

<script>
export default {
  name: "Demo",
  props:['sex'],
  // emits:['hello'],
  beforeCreate() {
    console.log('beforeCreate',this)
  },
  setup(props,context) {
    console.log('setup',this)
    console.log('props',props)
    console.log('context',context)
    console.log('context.attrs',context.attrs)
    let person = {
      name: 'xixihuahua',
      age: 18,
    };

    function sayHello() {
      context.emit('hello',name)
    }
    return {
      person,
      sayHello
    }
  }
}
</script>

<style scoped>

</style>