<template>
<div class="button">
    <div v-if="data.username !== 'Admin' && this.$localStorage !== null"  id="toggle" class="btn-group dropleft">
        <div v-for="usr in user" :key="usr.userId">
        <button type="button" class="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span>{{usr.username}}</span>
        </button>
        <div class="dropdown-menu col-sm">
            <p class="dropdown-item "><span>{{usr.username}}</span></p>
            <div class="dropdown-divider"></div>
            <router-link id="mur" to="/mur">Retour au mur</router-link>
            <div class="dropdown-divider"></div>
            <router-link id="compte" to="/compte">Mon espace</router-link>
            <div class="dropdown-divider"></div>
            <button  @click= "deco" id="deco">Se déconnecter</button>
        </div>
        </div> 
    </div>
</div>
    
</template>

<script>

export default {
    name: 'buttonuser',
    data(){

    return {
        data:JSON.parse(this.$localStorage.get('user')),
        userId:"",
        user:""
        }
    },
    
    methods:{
        getOneUser(){
            //Appel à API pour affichage utilisateur
            let data = JSON.parse(this.$localStorage.get('user'))
            let token= this.data.token;
            this.$axios
            .get(`/getoneuser/${data.userId}`, 
            {
                headers: 
                {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${token}` //Renvoi du token par API en cas d'authentification
                }
            })
            .then(response => {
                console.log(response.data)
                this.user = response.data
            })
            .catch(error => console.log(error)) 
        },

        deco: function(){ // Fonction pour deconnecter la session de l'application
            if(window.confirm('Voulez-vous vraiment vous déconnecter ?'))
            {
                this.$localStorage.remove('user');
                window.location.href = "http://localhost:8080//#/";
                location.reload(true);
            } 
        },

        togglebutton : function(){
            if(this.data !== undefined)
            { // Fonction pour affichage du bouton
                document.getElementById('toggle').style.display = 'none';
            }
        }
    },

    mounted(){
        this.getOneUser(); // récupération de l'utilisateur avant affichage de la page
    },
}

</script>

<style lang="scss" scoped>

span{
    text-transform: uppercase;
}


button{
    margin-bottom: 10px;
    color:black;
}

.btn-group{
  position: absolute;
  left:1160px;
  top: 40px;
  @media screen and  (min-width: 320px) and (max-width:500px) {
      left:40%;
      top: 90%;
      z-index: 10;  
  }
   @media screen and  (min-width: 501px) and (max-width:768px) {
      left:45%;
      top: 90%;
      z-index: 10;
      
  }
   @media screen and  (min-width: 769px) and (max-width:1025px) {
      left:47%;
      top: 90%;
      z-index: 10;
      
  }
}

#mur, #compte, #deco{
  position: relative;
  left: 15px;
}


</style>
