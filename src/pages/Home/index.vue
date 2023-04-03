<template>
  <div class="index">

    <Header></Header>

    <main>
      <MainLeft></MainLeft>
      <MainRight></MainRight>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import MainLeft from '@/components/MainLeft.vue';
import MainRight from '@/components/MainRight.vue';
export default {
  data() {
    return {
   
    };
  },
  components:{
    Header,
    MainLeft,
    MainRight
  }

};
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  width: 70%;
  margin: 0 auto;

  main {
    width: 100%;
    display: flex;
    // justify-content: space-between;
  }
}
</style>