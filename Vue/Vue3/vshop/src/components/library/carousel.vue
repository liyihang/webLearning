<template>
  <div class="xtx-carousel">
      <ul>
        <li v-for="item in sliders" :key="item.id">{{item.imgUrl}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: []
}
</script>

<style>

</style>
