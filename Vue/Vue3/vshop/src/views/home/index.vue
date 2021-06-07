<template>
  <div class="home-page">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-categroy.vue'
export default {
  name: 'PageHome',
  components: { HomeCategory }
}
</script>

<style scoped lang="less"></style>
