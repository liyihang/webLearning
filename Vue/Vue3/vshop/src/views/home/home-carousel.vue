<template>
  <div class="home-baner">
    <Carousel :sliders="sliders"/>
  </div>
</template>

<script>
import Carousel from '../../components/library/carousel.vue'
import {findBaner} from '@api/home'
export default {
  name: 'HomeCarousel',
  components: {
    Carousel
  },
  data () {
    return {
      sliders:[]
    }
  },
  async created () {
    const data = await findBaner()
    this.sliders = data.results
  }
}
</script>

<style>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
}
</style>
