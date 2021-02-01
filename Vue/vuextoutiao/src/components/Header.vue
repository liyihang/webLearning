<template>
  <ul class="catagtory">
    <li @click="$store.commit('header/updateCurrentCategory', item.id)" :class="{ select: currentCategory === item.id }" v-for="item in category"  :key="item.id">{{ item.name }}</li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['category', 'currentCategory'])
  },
  created () {
    this.$store.dispatch('header/getCategory');
  }
};
</script>

<style></style>
