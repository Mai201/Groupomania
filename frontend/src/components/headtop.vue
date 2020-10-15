<template>
  <!--Header-->
  <div class="home" id="hom">
    <nav class="navbar navbar-expand-lg" id="navv">
      <router-link id="routhome" to="/home">Réseau social de Groupomania</router-link>
      <buttonuser></buttonuser>
    </nav>
  </div>
</template>

<script>
import buttonuser from "./buttonuser.vue";

export default {
  name: "headtop",
  components: {
    buttonuser: buttonuser
  }
};
</script>

<style lang="scss" scoped>
#routhome {
  text-decoration: none;
  font-size: 1.8em;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-weight: 500;
  color: white;
  @media screen and (max-width: 1024px) {
    font-size: 1.3em;
  }
}

#navv {
  height: 70px;
  background-color: black;
}

#droplink {
  text-align: center;
}

#navbarDropdown {
  @media screen and (min-width: 1024px) {
    color: black;
  }
  position: relative;
}
#navv {
  height: 70px;
}

#ulnav {
  display: flex;
}

#linav {
  margin-left: 950px;
}

#toggleButton {
  background-color: lightblue;
  color: #15304d;
  font-weight: bold;
}

.dropdown-item:hover {
  background-color: #17a2b8;
  color: #fff;
}

@media screen and (min-width: 319px) and (max-width: 1024px) {
  .drop-item {
    background-color:#17a2b8;
  }
  #linav {
    color: #000;
    margin-left: 0px;
  }

  .dropdown-item {
    text-align: center;
  }

  .navbarDropdown {
    color: #000;
  }
}
</style>
