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
    <!-- 楼层 -->
    <!-- new -->
    <HomeNew />
    <!-- hot -->
    <HomeHot />
  </div>
</template>

<script>
import HomeCategory from './components/home-categroy.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner, HomeNew, HomeHot }
}
</script>

<style scoped lang="less"></style>
