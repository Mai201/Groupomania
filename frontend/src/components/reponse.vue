<template>
<!--Réponse au message-->
    <div id="mur">
        <h3>Répondre</h3>
        <div  id="mur">
            <div  class="getMessag">
                <div id="messdiv" class="msg"  v-for="mess in msg" :key="mess.idMESSAGES">
                <p class="nameus">{{mess.username}}</p>  
                <p class="text">{{mess.message}}</p>
                <img :src="mess.image" alt="image">
                <p class="datt">{{moment(mess.created_at).fromNow()}}</p>
                </div>
            </div>
            <h5>Répondre au message</h5>
            <form id="form" method="POST" class="from-group" @submit.prevent= "reponsemess" >
                <div class="form-group">
                    <label for="message">
                        <textarea  class="form-control" name="message" id="message" cols="50" rows="5" v-model= "message"></textarea>
                    </label>
                </div>
                <div class="button">
                  <button type="submit" id="envoi" class="btn btn-dark">Envoyer la réponse</button>
                </div>
            </form> 
        </div> 
    </div>
</template>

<script>

let url = document.location.href;
let idme = url.substring(37, 40);


let moment = require('moment')
moment.locale('fr');


export default {
  name:'reponse',
  data() {
    return {
      data:JSON.parse(this.$localStorage.get('user')),
      message:"",
      msg:"",
      date:"",
      moment: moment,
      idme: idme
    }
  },
  mounted (){ 
  //Appel à API pour afficher le message auquel l'utilisateur souhaite répondre
    let token= this.data.token;
    this.$axios.get(`/getonemessage/${idme}`,
    {
      headers: 
      {
        'Content-type': 'application/json',
        'Authorization' : `Bearer ${token}`
      }        
    })
    .then(response => {
      // console.log(response.data)
      this.msg = response.data})
      .catch(error => console.log(error))
  },
  methods: {
    deco: function(){ //Déconnexion
      if(window.confirm('Voulez-vous vraiment vous déconnecter ?'))
      {
        this.$session.remove('user');
        window.location.href = "http://localhost:8080//#/";
      } 
    },
    reponsemess: function () { //Fonction envoyant réponse utilisateur au serveur   
      let token = this.data.token
      let idUSERS = this.data.userId
      let userName = this.data.username
      if (this.message === "")
      {
        alert('Vous n\'avez rien écrit; vous ne pouvez pas envoyer une réponse vide !')
      } else 
      {
        this.$axios.post('/responsemessage',
        {
          response: this.message,
          token: this.data.token,
          idUSERS : idUSERS,
          username: userName,
          idMESSAGES:idme
        },
        {
          headers: 
          {
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
          }
        })
        .then (() => { 
          console.log('réponse envoyé')
          this.message ==="";
          alert('votre reponse a bien été envoyée !')
          window.location.href = `http://localhost:8080//#/viewresp?id=${idme}`            
        })
        .catch(() =>{
          console.log('la réponse n\'a pas été envoyée')
        }) 
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 300px) and (max-width: 992px){
    .btn-group{
      position: relative;
      margin-left: auto;
      margin-right: auto;
    }
    h3 {
      margin-top:30px;
    }
  }

span{
  text-transform: uppercase;
}

img {
  height: 80px;
}

.text, .datt{
  color: #FFF;
}

.msg{
  border: 1px solid lightgray;
  width: 50%;
  line-height: 15px;
  height:180px;
  position: relative;
  top: 20px;
  margin-right: auto;
  background-color:#6902ad;
  border-radius: 5px;
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 80px;
  @media screen and (min-width: 320px) and (max-width: 830px){
    width: 75%;
  }
}

#mess{
  position: relative;
  top: 20px;
}

.nameus{
  font-size: .8em;
  text-transform: uppercase;
  font-weight: bolder;
  margin-top: 10px;
  color:  rgb(240, 210, 136);
}

.datt{
  font-size: 0.7em;
  position: relative;
   text-transform: lowercase;
}

.text{
  position: relative;
  font-size: .9em;
  font-weight: 700;
}



h4{
  position: relative;
  top: 30px;
}

h5{
  margin-top: 40px;
  position: relative;
  bottom: 70px;
  margin-bottom: 50px;
}

#message{
  position: relative;
  bottom: 100px;
}

#envoi{
  position: relative;
  top: 30px;
}

.form-group{
  position: relative;
  top: 150px;
}

#deco{
  text-decoration: none;
}

.btn-circle {
    font-weight: bold;
    font-size: 12px;
    border-radius:10px;
    height:30%;
    margin-right: 10px;
    position: relative;
    margin-bottom: 20px;
    top: 20px;

}
.btn-circle span { padding-right: 0px; }
.embed-responsive { margin-bottom: 10px; }


h5{
  margin-top: 100px;
}

.sup{
  position: absolute;
  left: 570px;
  bottom: 10px;
}

#form{
  position: relative;
  bottom: 150px;
}

.button {
  display: flex;
  justify-content: center;
}

#image {
  margin-top: 90px;
  margin-left: 10px;
}

</style>
