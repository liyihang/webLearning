<template>
  <div>
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/login">登录</nuxt-link>
    <nuxt-link to="/user/order">订单</nuxt-link>
    <nuxt-link to="/goods">商品</nuxt-link>
    <nuxt-link to="/api">api</nuxt-link>
    <!-- 加载子页面，默认加载 pages/index.vue -->
    <nuxt />
  </div>
</template>
<style lang="scss">
@import "~assets/color.scss";
</style>