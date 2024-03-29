<template>
  <div class="home-category" @mouseleave="categoryId = null">
    <ul class="menu">
      <li
        v-for="item in menuList"
        :class="{ active: categoryId == item.id }"
        :key="item.id"
        @mouseenter="categoryId = item.id"
      >
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <template v-if="item.children">
          <RouterLink
            v-for="sub in item.children"
            :key="sub.id"
            :to="`/category/sub/${sub.id}`"
          >
            {{ sub.name }}
          </RouterLink>
        </template>
        <span v-else>
           <skeleton width="40px" style="margin-right:5px" bg="rgba(255,255,255,0.2)" />
+          <skeleton width="45px" bg="rgba(255,255,255,0.2)" />
        </span>
      </li>
    </ul>
    <!-- 推荐商品弹层 -->
    <div class="layer">
      <h4 v-if="currCategory">
        {{ currCategory.id === 'brand' ? '品牌' : '分类' }}推荐
        <small>根据您的购买或浏览记录推荐</small>
      </h4>
      <ul
        v-if="currCategory && currCategory.goods && currCategory.goods.length"
      >
        <li v-for="item in currCategory.goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <div class="info">
              <p class="name ellipsis-2">{{ item.name }}</p>
              <p class="desc ellipsis">{{ item.desc }}</p>
              <p class="price"><i>¥</i>{{ item.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <ul
        v-if="currCategory && currCategory.brands && currCategory.brands.length"
      >
        <li class="brand" v-for="item in currCategory.brands" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <div class="info">
              <p class="place">
                <i class="iconfont icon-position"></i>{{ item.place }}
              </p>
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="desc ellipsis-2">{{ item.desc }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { findBrand } from '@/api/home'
import skeleton from '@/components/library/skeleton.vue'

export default {
  components: { skeleton },
  name: 'HomeCategory',
  // 1. 获取vuex的一级分类，并且只需要两个二级分类
  // 2. 需要在组件内部，定义一个品牌数据
  // 3. 根据vuex的分类数据和组件中定义品牌数据，得到左侧分类完整数据(9分类+1品牌)数组
  // 4. 进行渲染即可
  data () {
    return {
      // 品牌数据
      brand: {
        id: 'brand-100',
        name: '品牌',
        children: [{ id: 'brand-100-001', name: '品牌推荐' }],
        // 存储品牌列表
        brands: []
      },
      // 记录当前鼠标进入的顶级分类ID
      categoryId: null
    }
  },
  async created () {
    const { result } = await findBrand(6)
    this.brand.brands = result
  },
  computed: {
    // 当前分类====>可以取出对应推荐商品+推荐品牌
    currCategory () {
      return this.menuList.find(item => item.id === this.categoryId)
      // return this.$store.state.category.list.find(
      //   item => item.id === this.categoryId
      // )
    },
    // 菜单数据
    menuList () {
      const list = this.$store.state.category.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          // 防止初始化没有children的时候调用slice函数报错
          children: item.children && item.children.slice(0, 2),
          // 推荐商品
          goods: item.goods
        }
      })
      list.push(this.brand)
      return list
    }
  }
}
</script>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover,
      &.active {
        background: @comColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
.layer {
  width: 990px;
  height: 500px;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 250px;
  top: 0;
  display: none;
  padding: 0 15px;
  h4 {
    font-size: 20px;
    font-weight: normal;
    line-height: 80px;
    small {
      font-size: 16px;
      color: #666;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 310px;
      height: 120px;
      margin-right: 15px;
      margin-bottom: 15px;
      border: 1px solid #eee;
      border-radius: 4px;
      background: #fff;
      &:nth-child(3n) {
        margin-right: 0;
      }
      a {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        padding: 10px;
        &:hover {
          background: #e3f9f4;
        }
        img {
          width: 95px;
          height: 95px;
        }
        .info {
          padding-left: 10px;
          line-height: 24px;

          .name {
            font-size: 16px;
            color: #666;
          }
          .desc {
            color: #999;
          }
          .price {
            font-size: 22px;
            color: @priceColor;
            i {
              font-size: 16px;
            }
          }
        }
      }
    }
    li.brand {
      height: 180px;
      a {
        align-items: flex-start;
        img {
          width: 120px;
          height: 160px;
        }
        .info {
          p {
            margin-top: 8px;
          }
          .place {
            color: #999;
          }
        }
      }
    }
  }
}
.xtx-skeleton {
  animation: fade 1s linear infinite alternate;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
