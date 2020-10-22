<template>
  <div class="compte">
    <headtop></headtop>
    <moncompte></moncompte>
    <footbottom></footbottom>
  </div>
</template>

<script>

import headtop from '../components/headtop'
import moncompte from '../components/moncompte.vue'
import footbottom from '../components/footbottom.vue'


export default{
  name: 'comptes',
  components:{
    'headtop' : headtop,
    'moncompte' : moncompte,
    'footbottom' : footbottom
   
  }
}
</script>

<style lang="scss" scoped>

</style>
