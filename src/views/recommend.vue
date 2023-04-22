<template>
  <div class="recommend" >
    recommend
  </div>
</template>

<script>
  import { getRecommend } from '@/service/recommend'
  export default {
    name: 'recommend',
    async created() {
      // 请求是异步的
     const result = await getRecommend()
     console.log('result', result)
    }
  }
</script>

<style lang="scss" scoped>

</style>
