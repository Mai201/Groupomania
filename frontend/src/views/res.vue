<template>
    <div class="mur">
        <headtop></headtop>
        <res></res>
        <footbottom></footbottom>
    </div>
</template>

<script>


import headtop from '../components/headtop'
import res from '../components/res.vue'
import footbottom from '../components/footbottom.vue'

export default {
    name: 'ress',
  components:{
    'headtop': headtop,
    'res' : res,
    'footbottom' : footbottom
  }
}


</script>

<style lang="scss" scoped>


</style>
