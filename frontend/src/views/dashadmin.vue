<template>
  <div class="dashadmin">
    <headtop></headtop>
    <dashadmin></dashadmin>
    <buttonadmin></buttonadmin>
    <footbottom></footbottom>
  </div>
</template>

<script>

import headtop from '../components/headtop'
import dashadmin from '../components/dashadmin.vue'
import buttonadmin from '../components/buttonadmin.vue'
import footbottom from '../components/footbottom.vue'


export default{
  name: 'dashadmins',
  components:{
    'headtop' : headtop,
    'dashadmin' : dashadmin,
    'buttonadmin': buttonadmin,
    'footbottom' : footbottom
   
  }
}
</script>

<style lang="scss" scoped>

</style>
