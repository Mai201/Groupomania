<template>
  <div class="message">
    <headtop></headtop>
    <reponse></reponse>
  </div>
</template>

<script>

import headtop from '../components/headtop'
import reponse from '../components/reponse.vue'

export default{
  name: 'reponses',
  components:{
    'headtop' : headtop,
    'reponse' : reponse
  }
}
</script>

<style lang="scss" scoped>
  
</style>
