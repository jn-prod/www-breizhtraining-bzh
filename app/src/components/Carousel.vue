<template>
  <vue-carousel :data="data"></vue-carousel>
</template>

<script>
import VueCarousel from '@chenfengyuan/vue-carousel';

export default {
  name: 'Carousel',
  components: {
    VueCarousel
  },
  data() {
    return {
      data: [
        '<div class="slide bg-1"></div>',
        '<div class="slide bg-2"></div>',
        '<div class="slide bg-3"></div>',
        '<div class="slide bg-4"></div>',
        '<div class="slide bg-5"></div>',
      ],
    };
  },
}
</script>
