<template>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>宠物年龄：{{ person.pets.dog.age }}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="person.pets.dog.age++">狗子年龄+1</button>
</template>

<script>
import {ref, reactive, toRefs, readonly, shallowReadonly} from 'vue'

export default {
  name: 'Demo',
  setup() {
    //数据
    let sum = ref(0)
    let person = reactive({
      name: 'xixihuahua',
      age: 18,
      pets: {
        dog: {
          age: 1,
        }
      }
    })

    person = readonly(person)
    // person = shallowReadonly(person)
    // sum = readonly(sum)
    // sum = shallowReadonly(sum)

    //返回一个对象（常用）
    return {
      sum,
      ...toRefs(person)
    }
  }
}
</script>

