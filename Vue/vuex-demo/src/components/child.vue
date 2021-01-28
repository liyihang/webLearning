<template>
  <div>
      <div>用户token---:{{this.$store.state.user.token}}</div>
      <div>用户settings---:{{this.$store.state.settings.title}}</div>
      <div>getter方式：{{token}}</div>
      <div>getter方式：{{title}}</div>
      <div><button @click="updateToken">update it</button></div>
  </div>
</template>

<script>
import {  mapGetters}from 'vuex'
export default {
computed:{
    ...mapGetters(['token','title'])
},
methods:{
    updateToken(){
        this.$store.commit('updateToken')
    }
}
}
</script>

<style>

</style>