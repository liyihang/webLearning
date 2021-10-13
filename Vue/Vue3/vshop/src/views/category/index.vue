<template>
  <div class="top-category">
    <div class="container">
      <Bread>
        <BreadItem to="/">首页</BreadItem>
        <BreadItem to="/">电器</BreadItem>
        <BreadItem>空调</BreadItem>
      </Bread>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopCategory'
}
</script>

<style scoped lang="less">
.top-category {
}
</style>
