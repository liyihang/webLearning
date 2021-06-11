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
<<<<<<< HEAD
=======
      // console.log(data)
>>>>>>> 484f6bee13b695e93138ba747307e4898b58c993
    })
  }
}
</script>

<style lang="less"></style>
