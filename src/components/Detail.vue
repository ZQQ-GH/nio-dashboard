<template>
    <div class="body">
    <iframe :src="model.url"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object, 
    },
  },
}
</script>

<style  lang="scss" scoped>
.body{
      height: 100%;
    width:100%;
  iframe {
    height: 100%;
    width:100%;
  }
}

</style>