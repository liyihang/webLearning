<template>
  <div>
    <!-- 左侧菜单 -->
    <div class="left">
      <nuxt-link to="/api/a">按钮1</nuxt-link>
      <nuxt-link to="/api/b">按钮2</nuxt-link>
    </div>
    <!-- 右侧子页面 -->
    <div class="right">
      <nuxt-child />
    </div>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    // 对它上下文对象中的 query 来接收查询字符串参数id
    console.log(context.query.id)
  },
}
</script>
<style lang="scss">
  .left {
    float: left;
    width: 30%;
  }
  .right {
    float: right;
    width: 68%;
  }
</style>