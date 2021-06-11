<template>
  <div id="nav">
    <router-view></router-view>
  </div>
</template>
<script>
import request from './utils/request'
export default {
  created () {
    request('/home/category/head', 'get').then(data => {
    })
  }
}
</script>

<style lang="less"></style>
