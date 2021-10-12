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
    <!-- brand -->
    <HomeBrand />
    <!-- product -->
    <HomeProduct />
    <!-- HomeSpecial -->
    <HomeSpecial />
  </div>
</template>

<script>
import HomeCategory from './components/home-categroy.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
import HomeSpecial from './components/home-special.vue'
export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner, HomeNew, HomeHot, HomeBrand, HomeProduct, HomeSpecial }
}
</script>

<style scoped lang="less"></style>
