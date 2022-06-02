<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的信息为：{{msg}}</h2>
  <button @click="msg+='！'">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>宠物年龄：{{person.pets.dog.age}}</h2>
  <button @click="person.name+='~'">修改姓名</button>
  <button @click="person.age++">增长年龄</button>
  <button @click="person.pets.dog.age++">狗子年龄+1</button>
</template>

<script>
import {ref,reactive,watch} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let sum = ref(0);
    let msg = ref('这是一个测试');
    let person = ref({
      name:'嘻嘻花花',
      age: 18,
      pets:{
        dog:{
          age:1,
        }
      }
    })

    console.log(sum)
    console.log(person)

    watch(sum.value,(newValue,oldValue)=>{
      console.log('sum变了',newValue,oldValue)
    })

    watch(person,(newValue,oldValue)=>{
      console.log('person',newValue,oldValue)
    },{deep:true})

    //返回一个对象（常用）
    return {
      sum,
      msg,
      person
    }
  }
}
</script>

