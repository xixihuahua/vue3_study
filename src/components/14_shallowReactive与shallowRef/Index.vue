<template>
  <h1>shallowReactive</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>宠物年龄：{{ person.pets.dog.age }}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.pets.dog.age++">狗子年龄+1</button>

  <h1>shallowRef</h1>
  <h2>x内y的值: {{ y }}</h2>
  <button @click="x.y++">x.y+1</button>

</template>

<script>
import {shallowRef, shallowReactive} from "vue";

export default {
  name: "Index",
  setup() {
    // 只考虑第一层数据的响应式（浅响应）
    let person = shallowReactive({
      name: '嘻嘻花花',
      age: 18,
      pets: {
        dog: {
          age: 1,
        }
      }
    });

    // 基础数据类型与ref功能一致，但是如果是对象，就是浅响应
    let x = shallowRef({
      y: 1,
    })

    return {
      person,
      x,
    }
  },
}
</script>
