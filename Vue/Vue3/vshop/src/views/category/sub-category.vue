<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <SubFilter />
      <div class="goods-list">
        <!-- 排序 -->
        <SubSort />
        <!-- 列表 -->
        <ul>
          <li v-for="item in goodsList" :key="item.id">
            <GoodsItem :goods="item" />
          </li>
        </ul>
        <!-- loading -->
        <InfiniteLoading
          :loading="loading"
          :finished="finished"
          @infinite="getData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter.vue'
import SubSort from './components/sub-sort.vue'
import GoodsItem from './components/goods-item.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { findSubCategoryGoods } from '@/api/category.js'
export default {
  name: 'SubCateory',
  components: {
    SubBread,
    SubFilter,
    SubSort,
    GoodsItem
  },
  setup () {
    const route = useRoute()
    const loading = ref(false)
    const finished = ref(false)
    const goodsList = ref([])
    // 查询参数
    let reqParams = { page: 1, pageSize: 20 }
    // 获取参数
    const getData = () => {
      loading.value = true
      reqParams.categoryId = route.params.id
      findSubCategoryGoods(reqParams).then(({ result }) => {
        if (result.items.length) {
          goodsList.value.push(...result.items)
          reqParams.page++
        } else {
          finished.value = true
        }
        loading.value = false
      })
    }
    // 切换二级分类重新加载
    watch(
      () => route.params.id,
      newVal => {
        if (newVal && route.path === '/category/sub/' + newVal) {
          goodsList.value = []
          reqParams = {
            page: 1,
            pageSize: 20
          }
          finished.value = false
        }
      }
    )
    return { loading, finished, goodsList, getData }
  }
}
</script>

<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    li {
      margin-right: 20px;
      margin-bottom: 20px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
