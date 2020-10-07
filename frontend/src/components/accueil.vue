<template>
  <div class="accueil">
    <div class="img">
      <img src="../assets/icon.png" alt="Photo de la page d'accueil" />
    </div>
    <div class="logo">
      <img
        id="iconb"
        alt="logo de l'entreprise"
        src="../assets/icon-left-font-monochrome-black.svg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "accueil",
  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
.accueil {
  display: inline;
}

img {
  width: 400px;
  @media screen and (max-width: 1024px) {
    width: 300px;
  }
}

#iconb {
  width: 20%;
  position: relative;
  bottom: 45px;
  @media screen and (max-width: 1024px) {
    bottom: 20px;
    margin-bottom: 80px;
  }
}
</style>
