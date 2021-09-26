<template>
  <div class="container">
<!--     
    <img src="~assets/1.jpeg" alt="">
    <div>
      <img src="/2.jpeg" alt="">
    </div> -->
    <!-- <ul>
      <li v-for="(v, k) in topics" :key="k">
          {{v.title}}
      </li>
  </ul> -->
  <i class="el-icon-delete"></i>
  <hr>
    <!-- <li>{{headers}}</li> -->
    <el-button type="primary">Press Here</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  head:{
    title:'传智播客-前端学科',
    meta: [
      {name:'keyword',content:'网上购物,网上商城,家电,手机,电脑,服装,居家,母婴,美妆,个护,食品,生鲜,京东'},
      {name:"description",content:'专业的综合网上购物商城，为您提供正品低价的购物选择、优质便捷的服务体验。商品来自全球数十万品牌商家，囊括家电、手机、电脑、服装、居家、母婴、美妆、个护、食品、生鲜等丰富品类，满足各种购物需求。'}
    ]
  },
  // middleware: ['index'],
  data(){
    return {
      name:"jim"
    }
  },
  async asyncData(context) {
    // const limit  = Number(context.query.limit)
    // if(isNaN(limit)){
    //   context.error({
    //     statusCode:443,
    //     message:'参数类型错误'
    //   })
    //   return
    // }
    console.log('asyncData');
    let data = await axios.get('https://cnodejs.org/api/v1/topics?limit='+50)
    return {
      topics: data.data.data,
      // headers:context.req.headers
    }
  },
  created(){
    // console.log('created');
    // 如果当前是服务器环境就执行
    if(process.server) {
      console.log('created in hello')
    }
  },
  mounted(){
    console.log('mounted');
  }
  // layout:'shop'
}
</script>
<style lang="scss">
@import '~assets/color.scss';
.container{
  background-color: $bg;
}
</style>