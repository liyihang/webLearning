<template>
  <ul class="catagtory">
    <li class="{ select:currentCategory == item.id }" v-for="item in category" :key="item.id">开发者资讯</li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['category', 'currentCategory'])
  },
  created () {
    this.$store.dispatch('header/category')
  }
}
</script>

<style></style>
