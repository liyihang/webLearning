<template>
  <div class="header">
    <ul>
      <li>请先登录</li>
      <li>免费注册</li>
      <li>我的订单</li>
      <li>会员中心</li>
      <li>帮助中心</li>
      <li>下载App</li>
      <div ref="hell"><button @click="clickme">点我</button></div>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    clickme () {
      const h = this.$refs.hell.scrollHeight
      let t = this.$refs.hell.scrollTop
      t = h
      console.log(t)
    }
  }
}
</script>

<style>
.header {
  height: 120px;
  width: 100%;
  background-color: #000;
}
</style>
