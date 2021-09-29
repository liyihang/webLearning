<template>
  <div class="home-banner">
    <Carousel autoPlay :sliders="sliders" />
  </div>
</template>
<script>
import Carousel from '@/components/library/carousel.vue'
import { findBanner } from '@/api/home'
export default {
  name: 'HomeBanner',
  components: {
    Carousel
  },
  data () {
    return {
      sliders: []
    }
  },
  async created () {
    const { result } = await findBanner()
    console.log(result)
    this.sliders = result
    // console.log(this.sliders)
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
/* .xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
} */
</style>
