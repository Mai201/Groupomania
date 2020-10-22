<template>
  <div class="home">
    <headtop></headtop>
    <Accueil></Accueil>
    <buttonadmin></buttonadmin>
    <footbottom></footbottom>
  </div>
</template>

<script>


import headtop from '../components/headtop'
import accueil from '../components/accueil'
import buttonadmin from '../components/buttonadmin.vue'
import footbottom from '../components/footbottom.vue'

export default{
  name: 'Home',

  components:{
    'headtop' : headtop,
    'Accueil' : accueil,
    'buttonadmin': buttonadmin,
    'footbottom' : footbottom
    
  }
}
</script>

<style lang="scss" scoped>

</style>

