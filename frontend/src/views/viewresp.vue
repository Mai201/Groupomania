<template>
    <div class="resp">
     <headtop></headtop>
     <viewresponse></viewresponse>
    </div>
</template>

<script>


import headtop from '../components/headtop'
import viewresponse from '../components/viewresponse.vue'

export default {

  name: 'viewresp',

  components:{
      'headtop' : headtop,
      'viewresponse' : viewresponse
  }
}


</script>

<style lang="scss" scoped>


</style>
