<template>
    <div class="mian-left">

      <el-button type="primary"  @click="vuextest">{{$store.getters.getCnt}}</el-button>
      <el-button type="success" @click="increment(1000)">{{getCnt}}</el-button>
      <el-button type="success" @click="ADD(2000)">{{count}}</el-button>
      <el-button type="success" @click="increment1(20)">{{getCnt}}</el-button>
    </div>
  </template>
  
  <script>
  import {mapGetters,mapState,mapActions,mapMutations} from "vuex";
  export default {


    data() {
      return {

      };
    },
    computed:{
        ...mapGetters(["getCnt"]),
        ...mapState(["count"])
    
    },
    methods: {
        ...mapActions(["increment"]),
        ...mapActions({
            increment1:"increment"
        }),
        ...mapMutations(["ADD"]),
      vuextest(){
        this.$store.dispatch("increment",100)
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>