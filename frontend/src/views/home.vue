<template>
  <div class="home">
    <Accueil></Accueil>>
    <buttonadmin></buttonadmin>
    <footbottom></footbottom>
  </div>
</template>

<script>


import accueil from '../components/accueil'
import buttonadmin from '../components/buttonadmin.vue'
import footbottom from '../components/footbottom.vue'

export default{
  name: 'Home',

  components:{
    'Accueil' : accueil,
    'buttonadmin': buttonadmin,
    'footbottom' : footbottom
    
  }
}
</script>

<style lang="scss" scoped>

</style>

