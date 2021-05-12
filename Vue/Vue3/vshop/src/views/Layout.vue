<template>
  <!-- header -->
  <nav class="test">顶部通栏</nav>
  <!-- 头部 -->
  <header>头部</header>
  <!-- 页面主体 -->
  <main>
    <RouterView />
  </main>
  <!-- footer -->
  <footer>底部</footer>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style scoped lang="less">
.test{
  color: @comColor;
}
</style>
