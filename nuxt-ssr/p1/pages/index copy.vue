<template>
  <div class="container">
<!--     
    <img src="~assets/1.jpeg" alt="">
    <div>
      <img src="/2.jpeg" alt="">
    </div> -->
    <ul>
      <li v-for="(v, k) in topics" :key="k">
          {{v.title}}
      </li>
  </ul>
    {{name}}
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // middleware: ['index'],
  data(){
    return {
      name:"jim"
    }
  },
  async asyncData() {
    console.log('asyncData');
    let data = await axios.get('https://cnodejs.org/api/v1/topics?limit=50')
    return {
      topics: data.data.data
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