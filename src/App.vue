<template>
  <div class="index">
    
      <Header></Header>
      <!-- body -->
      <router-view></router-view>

  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
    name:"App",
    components:{
    Header,
  }
}
</script>

<style scoped>
.index {
  height: 100%;
  width: 85rem;
  max-width: 100%;
  margin: 0 auto;
}
</style>