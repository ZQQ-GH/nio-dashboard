<template>
  <div class="main">
    <MainLeft></MainLeft>
    <MainRight></MainRight>
  </div>
</template>

<script>

import MainLeft from '@/components/MainLeft.vue';
import MainRight from '@/components/MainRight.vue';
export default {
  data() {
    return {
   
    };
  },
  components:{
    MainLeft,
    MainRight
  }

};
</script>

<style lang="scss" scoped>


.main {
    display: flex;
    margin: 0 auto;
    width: 95rem;;
    // justify-content: space-between;
  }
</style>