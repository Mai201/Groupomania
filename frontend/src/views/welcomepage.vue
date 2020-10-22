<template>
  <div class="home"><h1>Bienvenue sur le réseau social de</h1>
    <Accueil></Accueil>
    <footbottom></footbottom>
  </div>
</template>

<script>


import accueil from '../components/accueil'
import footbottom from '../components/footbottom.vue'

export default{
  name: 'WelcomePage',

  components:{
    'Accueil' : accueil,
    'footbottom' : footbottom
  }
}
</script>

<style lang="scss" scoped>

</style>

