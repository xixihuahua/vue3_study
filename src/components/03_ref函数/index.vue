<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>食物名称：{{ food.name }}</h3>
  <h3>食物类型：{{ food.type }}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'App',
  setup() {
    //数据
    let name = ref('嘻嘻花花')
    let age = ref(18)
    let food = ref({
      type: '川菜',
      name: '辣子鸡'
    })

    //方法
    function changeInfo() {
      age.value = 20
      food.value.name = '辣辣子鸡'
      console.log('食物信息', food)
      console.log('age', age)
    }

    //返回一个对象（常用）
    return {
      name,
      age,
      food,
      changeInfo
    }
  }
}
</script>