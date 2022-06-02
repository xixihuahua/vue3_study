<template>
  <h1>vue3写法：一个人的信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>vue2写法性别：{{sex}}</h2>
  <button @click="sayHello">说话</button>
  <button @click="sayYes">vue2写法的方法说话</button>

</template>

<script>
// import {h} from 'vue'
export default {
  name: 'studySetup',
  data() {
    return {
      sex:'男'
    }
  },
  methods:{
    sayYes(){
      alert(`我叫${this.name}，我${this.age}岁了,我是${this.sex}`)
    },
  },
  setup(){
    //数据
    let name = '张三'
    let age = 18

    //方法
    function sayHello(){
      console.log(this)
      alert(`我叫${name}，我${age}岁了,我是${this.sex}`)

    }


    //返回一个对象（常用）
    return {
      name,
      age,
      sayHello,
    }

    //返回一个函数（渲染函数）
    // return ()=> h('h1','嘻嘻花花测试')
  }
}
</script>

