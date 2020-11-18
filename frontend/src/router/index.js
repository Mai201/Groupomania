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

  },
  {
    path: '/mur',
    name: 'mur',
    // route pour accès au mur
    component: () => import('../views/mur.vue')
  },
  {
    path: '/compte',
    name: 'compte',
    // route pour accès au compte
    component: () => import('../views/compte.vue')
  },
  {
    path: '/reponses',
    name: 'reponses',
    // route pour accès aux réponses
    component: () => import('../views/reponses.vue')
  },
  {
    path: '/res',
    name: 'res',
    // route pour accès aux modifs de réponses 
    component: () => import('../views/res.vue')
  },
  {
    path: '/dashadmin',
    name: 'dashadmin',
    // route pour tableau de bord admin
    component: () => import('../views/dashadmin.vue'),
    
    // seulement accès admin ici /!\ 
    beforeEnter: (to, from, next) => {
      let user = JSON.parse(localStorage.getItem("user"));
      let status = user.status;
      // console.log(status);
      if(status !== "admin")
      {
        alert('accès refusé: réservé aux admins')
        return next({ name: 'mur'})
      }
      next()
    }
  },
  {
    path: '/viewresp',
    name: 'viewresp',
    // route pour afficher fil de messages
    component: () => import('../views/viewresp.vue')
  },
  {
    path: '/updateuser',
    name: 'updateuser',
    // route pour modif infos utilisateur
    component: () => import('../views/updateuser.vue')
  }
]


const router = new VueRouter({
  routes
})

// naviguation guard pour toutes les routes
router.beforeEach((to, from, next) => {
  if (to.name != 'inscription' && to.name != 'WelcomePage' && to.name != 'connexion') 
  {
    let user = JSON.parse(localStorage.getItem("user"));
    let userId = user.userId;
    let token = user.token;
    if (!userId && !token) 
    {
      return next({ name: 'WelcomePage'})
    }
  }
  next()
})

export default router
