<template>
  <div class="xtx-bread">
    <div class="xtx-bread-item" v-if="parentName">
      <RouterLink v-if="parentPath" :to="parentPath">{{
        parentName
      }}</RouterLink>
      <span v-else>{{ parentName }}</span>
    </div>
    <i v-if="parentName" class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item">
      <span><slot /></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Bread',
  props: {
    parentName: {
      type: String,
      default: ''
    },
    parentPath: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
.xtx-bread {
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all 0.4s;
      &:hover {
        color: @comColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>
