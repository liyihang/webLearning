<template>
  <nav class="nav">
    <div class="container">
      <ul>
        <template v-if="profile.token">
          <li>
            <a href="#"
              ><i class="iconfont icon-user">{{ profile.nickname }}</i></a
            >
          </li>
          <li>
            <a href="#">退出登录</a>
          </li>
        </template>
        <template v-else>
          <li>
            <a href="#">请先登录</a>
          </li>
          <li>
            <a href="#">免费注册</a>
          </li>
        </template>
        <li>
          <a href="#">我的订单</a>
        </li>
        <li>
          <a href="#">会员中心</a>
        </li>
        <li>
          <a href="#">帮助中心</a>
        </li>
        <li>
          <a href="#">关于我们</a>
        </li>
        <li>
          <a href="#"><i class="iconfont icon-phone"></i>下载App</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { mapState } from 'vuex'
export default {
  name: 'TopNav',
  setup () {
    const store = useStore()
    const profile = computed(() => {
      return store.state.user.profile
    })

    return { profile }
  }
  // computed: {
  //   ...mapState('user', ['profile'])
  // },
  // methods: {}
}
</script>

<style scoped lang="less">
.nav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        &:hover {
          color: @comColor;
        }
        i {
          font-size: 12px;
          margin-right: 2px;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #797575;
        }
      }
    }
  }
}
</style>
