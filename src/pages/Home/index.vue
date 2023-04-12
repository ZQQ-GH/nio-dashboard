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
    width: 100%;
    display: flex;
    // justify-content: space-between;
  }
</style>