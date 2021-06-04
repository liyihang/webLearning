<template>
  <!-- header -->
  <top-nav></top-nav>
  <TopNavStricky />
  <!-- 头部 -->
  <Header></Header>
  <!-- 页面主体 -->
  <main class="main-body">
    <RouterView />
  </main>
  <!-- footer -->
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/Footer'
import TopNav from '@/components/TopNav'
import Header from '@/components/Header'
import TopNavStricky from '@/components/HeaderNavSticky'
export default {
  name: 'Layout',
  components: {
    TopNav,
    Header,
    Footer,
    TopNavStricky
  },
  created () {
    this.$store.dispatch('category/getCategory')
  }
}
</script>

<style scoped lang="less">
.main-body {
  min-height: 600px;
}
.test {
  color: @comColor;
}
</style>
