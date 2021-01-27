<template>
  <div id="app">
    <div>插值表达式:{{$store.state.num}}</div>
    <div>计算属性：{{count}}</div>
    <div>辅助函数：{{num}}</div>
  </div>
</template>

<script>
import {mapState}  from 'vuex'
export default {
  name: "App",
  components: {},
  computed:{
    // count(){
    //   // return this.$store.state.num
      
    // }
    ...mapState(['num'])
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
