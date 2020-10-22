<template>
    <div class="update">
        <headtop></headtop>
        <updateuse></updateuse>
    </div>
</template>

<script>

import headtop from '../components/headtop'
import updateuse from '../components/updateuse.vue'

export default {
    name: 'updateuser',

  components:{
    'headtop' : headtop,
    'updateuse' : updateuse
  }
}


</script>

<style lang="scss" scoped>


</style>