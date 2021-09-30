<template>
  <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <template v-slot:right><More /></template>
    <div ref="target" style="position: relative;height: 406px;">
      <Transition name="fade">
        <ul v-if="goods.length" ref="pannel" class="goods-list">
          <li v-for="item in goods" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="" />
              <p class="name">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
        </ul>
        <HomeSkeleton bg="#f0f9f4" v-else />
      </Transition>
    </div>
  </HomePanel>
</template>

<script>
// import { ref } from 'vue'
import HomePanel from './home-panel.vue'
import More from '../../../components/library/more.vue'
import { findNew } from '@/api/home'
import HomeSkeleton from './home-skeleton.vue'
import { useLazyData } from '@/hook'
export default {
  name: 'HomeNew',
  components: { HomePanel, More, HomeSkeleton },
  setup () {
    //   const goods = ref([])
    //   findNew().then(data => {
    //     goods.value = data.result
    //   })
    //   return { goods }
    // }
    const { target, result } = useLazyData(findNew)
    return { goods: result, target }
  }
}
</script>

<style lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
