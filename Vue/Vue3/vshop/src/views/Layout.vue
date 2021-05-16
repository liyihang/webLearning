<template>
  <!-- header -->
  <top-nav></top-nav>
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
import TopNav from '@/components/TopNav'
export default {
  components: { TopNav },
  name: 'Layout'
}
</script>

<style scoped lang="less">
.test{
  color: @comColor;
}
</style>
