<template>
  <div id="app">
    <div>插值表达式:{{$store.state.num}}</div>
    <!-- <div>计算属性：{{count}}</div> -->
    <div>辅助函数：{{num}}</div>
    <button @click="add(111)">增加</button>
    <button @click="getAsync">Action++</button>
    <Child></Child>
  </div>
</template>

<script>
import {mapState,mapMutations}  from 'vuex'
import Child from './components/child'
export default {
  name: "App",
  components: {Child},
  computed:{
    // count(){
    //   // return this.$store.state.num
      
    // }
    ...mapState(['num'])
  },
  methods:{
    getAsync(){
      this.$store.dispatch('getAsync')
    },
    // add(){
    //   this.$store.commit('add',10)
    // }
    ...mapMutations(['add'])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
