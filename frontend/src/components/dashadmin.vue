<template>
    <div id="moncompte">
    <!--Tableau de bord administrateur-->
        <h2>Tableau de bord</h2>
        <div class="users">
           <h3>Utilisateurs inscrits</h3><!--Affichage de tous les utilisateurs inscrits-->
            <table class="table table-bordered  table-sm" id='table'>
                <thead id="thead">
                    <tr class="color">
                        <th scope="col"></th>
                        <th scope="col">user</th>
                        <th scope="col">email</th>
                        <th scope="col">id</th>
                        <th scope="col">Supprimer</th>
                    </tr>
                </thead>
                <tbody id="tbody" v-for="users in usr" :key="users.id">
                    <tr class="color">
                        <td class="vide"></td>
                        <td class="user">{{users.username}}</td>
                        <td class="mail">{{users.email}}</td>
                        <td  class="num">{{users.id}}</td>
                        <td class="sup"><button @click= "deleteusr(users.id)" class="btn btn-danger"><font-awesome-icon icon="trash"/></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="messages">
            <h3>Messages postés</h3><!--Affichage de tous les messages postés-->
            <table class="table table-bordered  table-sm" id='table2'>
                <thead id="thead">
                    <tr class="color">
                        <th scope="col"></th>
                        <th scope="col">user</th>
                        <th scope="col">message n°</th>
                        <th scope="col">contenu</th>
                        <th scope="col">Supprimer</th>
                    </tr>
                </thead>
                <tbody id="tbody2" v-for="messages in msg" :key="messages.id">
                    <tr class="color">
                        <td class="vide2"></td>
                        <td class="name">{{messages.username}}</td>
                        <td class="id">{{messages.idMESSAGES}}</td>
                        <td class="mess">{{messages.message}}</td>
                        <td class="sup"><button @click= "deletemsg(messages.idMESSAGES)" class="btn btn-danger"><font-awesome-icon icon="trash"/></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class=messages>
        <h3>Réponses postées</h3><!--Affichage de toutes les réponses postées-->
         <table class="table table-bordered  table-sm" id='table3'>
                <thead id="thead">
                    <tr class="color">
                        <th scope="col"></th>
                        <th scope="col">user</th>
                        <th scope="col">message n°</th>
                        <th scope="col">contenu</th>
                        <th scope="col">Supprimer</th>
                    </tr>
                </thead>
                <tbody id="tbody3" v-for="responses in res" :key="responses.id">
                    <tr class="color">
                        <td class="vide2"></td>
                        <td class="name">{{responses.username}}</td>
                        <td class="id">{{responses.idRESPONSE}}</td>
                        <td class="mess">{{responses.response}}</td>
                        <td class="sup"><button @click= "deleteresp(responses.idRESPONSE)" class="btn btn-danger"><font-awesome-icon icon="trash"/></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>  
</template>

<script>

export default {
    name: 'moncompte',
    data(){

    return {
        data:JSON.parse(this.$localStorage.get('user')),// Information utilisateurs dans localStorage
        userId:"",
        usr:"",
        msg:"",
        test:"",
        deletid:"",
        res:""
       
    }
},
  mounted (){ 
        //Appel à API pour affichage de tous les messages
        let token = this.data.token;
        this.$axios.get('/getmessages',
        {
            headers: 
            {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}` //Renvoi du token par API en cas d'authentification
            }
        })
        .then(response => {
          console.log(response.data)
          this.msg = response.data
        
         
        })
        .catch(error => console.log(error))

        //Appel à API pour affichage de tous les utilisateurs
        this.$axios.get('/getusers', 
        {
            headers: 
            {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}` //Renvoi du token par API en cas d'authentification
            }
        })
        .then(res=> {
          console.log(res.data)
          this.usr = res.data
        
         
        })
        .catch(error => console.log(error))

        //Appel à API pour affichage de toutes les réponses
        this.$axios.get('/getallresponses', 
        {
            headers: 
            {
                "Content-type": "application/json",
                Authorization: `Bearer ${token}` //Renvoi du token par API en cas d'authentification
            }
        })
        .then(response => {
          console.log(response.data)
          this.res = response.data
        
         
        })
        .catch(error => console.log(error))

    },
methods:{

   deco: function(){ // Fonction pour déconnecter la session de l'application
      if(window.confirm('Voulez-vous vraiment vous déconnecter ?')){
        this.$localStorage.remove('user');
        window.location.href = "http://localhost:8080//#/";
      } 
    },

    deleteusr: function(param) {// Fonction pour suppression comptes utilisateurs
        let token = this.data.token
        let test = param

    if(confirm('Voulez-vous vraiment supprimer le compte ?'),confirm('Attention, cette opération est irreversible !')){

             this.$axios.post(`/deleteUser`, {

                userId:test
        },
        {
            headers: 
            {
                'Content-type': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
       .then (() => { 
                    
                    alert('le compte a bien été supprimé !') 
                    location.reload(true)      
       })
       .catch(() =>{
         console.log('le compte n\'a pas pu être supprimé !')
       }) 
        }
    },
    deletemsg: function(del) {//Fonction de suppression des messages 
        let token = this.data.token
        let deletid = del

        if(confirm('Voulez-vous vraiment supprimer le message ?'),confirm('Attention, cette opération est irreversible !')){

             console.log(deletid)
             this.$axios.post(`/deletemessage`, {

                id:deletid
        },
        {
          headers: {
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
              }
        })
       .then (() => { 
                    
                    alert('le message a bien été supprimé !') 
                    location.reload(true)      
       })
       .catch(() =>{
         console.log('le message n\'a pas pu être supprimé !')
       }) 
        }
    },
      deleteresp: function(resp) {//Fonction de suppression des réponses
        let token = this.data.token
        let deletid = resp

        if(confirm('Voulez-vous vraiment supprimer le message ?'),confirm('Attention, cette opération est irreversible !')){

             console.log(deletid)
             this.$axios.post(`/deleteresponse`, {

                id:deletid
        },
        {
          headers: {
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
              }
        })
       .then (() => { 
                    
                    alert('le message a bien été supprimé !') 
                    location.reload(true)      
       })
       .catch(() =>{
         console.log('le message n\'a pas pu être supprimé !')
       }) 
        }
    }
}

}
</script>

<style lang="scss" scoped>

h2{
    position: relative;
    top: 5px;
    margin-bottom: 30px;
    @media screen and (max-width: 1024px) {
        font-size: 1.8em;
        bottom:30px;
    }
}

h3{
    margin-bottom: 20px;
}

span{
    text-transform: uppercase;
}

// .color{
//    color: black;
// }

.btn {
    color:black;
}

.users{
    width: 100%;
    margin-right: auto;
    margin-left: auto;
}

.messages{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}


.mess{
    word-wrap: break-word;
    width: 30%;
}

.id{
    width: 5%;
}

.sup{
    width: 5%;
}

.vide{
    width: 10%;
}

.vide2{
    width: 8%;
}

.name{
    width: 15%;
    margin-left: 10%;
}

table{
    margin-bottom: 100px;
}

.user{
width: 30%;
margin-left: 10%;
}

.mail{
 width:40%;
}

.num{
width: 5%;
}

#table{
    background-color:rgb(82, 81, 81);
    color:white;
}

#table2{
    background-color:#392546; 
    color: white;
}

#table3{
    background-color: #21971d;
    color:black;
}

</style>
