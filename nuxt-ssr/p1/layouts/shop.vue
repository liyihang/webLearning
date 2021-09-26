<template>
  <div>
    <div class="header">页头</div>
    <div class="content">
      <!-- 加载页面 -->
      <nuxt />
    </div>
    <div class="footer">页脚</div>
  </div>
</template>

<style>
  .header {
    height: 50px;
    line-height: 50px;
    background-color: skyblue;
  }
  .content {
    width: 1100px;
    margin: 0 auto;
    padding: 50px
  }
  .footer {
    background-color: #333;
    height: 50px;
  }
</style>