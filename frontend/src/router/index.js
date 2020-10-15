import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/connexion',
    name: 'connexion',
    component: () => import('../views/connexion.vue')
  
  },
  {
    path: '/inscription',
    name: 'inscription',
    // route pour inscription
    component: () => import('../views/inscription.vue')
  },
  {
    path: '/', 
    name: 'WelcomePage',
    // route pour welcome page
    component: () => import('../views/welcomepage.vue')

  },
  {
    path: '/home', 
    name: 'Home',
    // deuxieme route pour home
    component: () => import('../views/home.vue')

  }
  ,
  {
    path: '/mur',
    name: 'mur',
    // route pour accès au mur
    component: () => import('../views/mur.vue'),
    // ajouter require auth ?
   

  },
  {
    path: '/compte',
    name: 'compte',
    // route pour accès au compte
    component: () => import('../views/compte.vue')
    // ajouter require auth ? 

  },
  {
    path: '/reponses',
    name: 'reponses',
    // route pour accès aux réponses
    component: () => import('../views/reponses.vue')
    // ajouter require auth ?
  },
  {
    path: '/res',
    name: 'res',
    // route pour accès aux modifs de réponses 
    component: () => import('../views/res.vue')
    // ajouter require auth ?
    
  },
  {
    path: '/dashadmin',
    name: 'dashadmin',
    // route pour tableau de bord admin
    component: () => import('../views/dashadmin.vue')
    // seulement accès admin ici /!\ 
    // suivre infos https://serversideup.net/vuejs-route-permissions-security-and-admin-section/
    // beforeEnter: requireAuthAdmin,
    // meta: {
    //   permission: 'admin'
    // }
  },
  {
    path: '/viewresp',
    name: 'viewresp',
    // route pour afficher fil de messages
    component: () => import('../views/viewresp.vue')
    // ajouter require auth ?

  },
  {
    path: '/updateuser',
    name: 'updateuser',
    // route pour modif infos utilisateur
    component: () => import('../views/updateuser.vue')
    // ajouter require auth ?
  }
]




const router = new VueRouter({
  routes
})

export default router
