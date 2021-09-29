<template>
  <div class="home-page">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 广告轮播 -->
        <HomeBanner />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-categroy.vue'
import HomeBanner from './components/home-banner.vue'
export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner }
}
</script>

<style scoped lang="less">
</style>
