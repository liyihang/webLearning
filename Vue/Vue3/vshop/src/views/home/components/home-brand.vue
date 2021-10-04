<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a
        @click="toggle(-1)"
        href="javascript:;"
        :class="{ disabled: index === 0 }"
        class="iconfont icon-angle-left prev"
      ></a>
      <a
        @click="toggle(1)"
        href="javascript:;"
        :class="{ disabled: index === 1 }"
        class="iconfont icon-angle-right next"
      ></a>
    </template>
    <div class="box" ref="target">
      <Transition name="fade">
        <ul
          v-if="goods.length"
          class="list"
          :style="{ transform: `translateX(${-index * 1240}px)` }"
        >
          <li v-for="item in goods" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" :alt="item.alt" />
            </RouterLink>
          </li>
        </ul>
        <div v-else class="skeleton">
          <skeleton
            class="item"
            v-for="i in 5"
            :key="i"
            animated
            bg="#e4e4e4"
            width="240px"
            height="305px"
          ></skeleton>
        </div>
      </Transition>
    </div>
  </HomePanel>
</template>

<script>
import skeleton from '../../../components/library/skeleton.vue'
import HomePanel from './home-panel'
import { findBrand } from '@/api/home'
import { useLazyData } from '@/hook'
import { ref } from 'vue'
export default {
  name: 'HomeBrand',
  components: { HomePanel, skeleton },
  setup () {
    const { target, result } = useLazyData(() => findBrand(10))
    // 左右触发  不是最优解
    const index = ref(0)
    const toggle = step => {
      const newIndex = index.value + step
      if (newIndex < 0 || newIndex > 1) return
      index.value = newIndex
    }
    return { goods: result, target, toggle, index }
  }
}
</script>

<style scoped lang="less">
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @comColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
</style>
