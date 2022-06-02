<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>宠物年龄：{{ pets.dog.age }}</h2>
  <button @click="name+='~'">修改姓名</button>
  <button @click="age++">增长年龄</button>
  <button @click="pets.dog.age++">狗子年龄+1</button>
</template>

<script>
import {reactive, toRef,toRefs} from "vue";

export default {
  name: "Index",
  setup() {
    let person = reactive({
      name: '嘻嘻花花',
      age: 18,
      pets: {
        dog: {
          age: 1,
        }
      }
    })

    const name = toRef(person,'name');
    const age = toRef(person,'age');
    person = toRefs(person);
    console.log('name',name)
    console.log('person',person)
    return {
      name,
      age,
      ...person,
    }
  }
}
</script>