<template>
  <div class="recommend" >
    <Slider v-if="sliders.length" :sliders="sliders"></Slider>
  </div>
</template>

<script>
  import { getRecommend } from '@/service/recommend'
  import Slider from '@/components/base/slider/slider'
  export default {
    name: 'recommend',
    components: {
      Slider
    },
    data() {
      return {
        sliders: []
      }
    }, 
    async created() {
      // 请求是异步的
     const result = await getRecommend()
     this.sliders = result.sliders
     console.log('result', result)
    }
  }
</script>

<style lang="scss" scoped>

</style>
