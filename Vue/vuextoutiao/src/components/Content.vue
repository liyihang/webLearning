<template>
  <div class="list">
    <div v-for="item in currentList" :key="item.art_id" class="article_item">
      <h3 class="van-ellipsis">{{ item.title }}</h3>
      <div v-if="item.cover.type === 1" class="img_box">
        <img :src="item.cover.images[0]" class="w100">
      </div>
      <div v-else-if="item.cover.type === 3" class="img_box">
        <img :src="item.cover.images[0]" class="w33">
        <img :src="item.cover.images[1]" class="w33">
        <img :src="item.cover.images[2]" class="w33">
      </div>
      <!---->
      <div class="info_box">
        <span>{{ item.aut_name }}</span>
        <span>{{ item.comm_count }}评论</span>
        <span>{{ item.pubdate }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['currentCategory', 'currentList'])
  },
  watch: {
    currentCategory(newValue) {
      this.$store.dispatch('news/getNewList', newValue)
    }
  }
}
</script>

<style></style>
