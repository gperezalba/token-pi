import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Members from './views/Members.vue'
import Login from './views/Login.vue'
import Callback from './views/Callback.vue'
import auth from './auth/authService.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/members',
      name: 'members',
      component: Members,
      meta: { requiresAuth: true }
    },
    {
      path: '/callback',
      name: 'callback',
      component: Callback,
    },
  ]
});

router.beforeEach( (to,from,next) => {

  let routerAuthCheck = auth.isAuthenticated();

  if( to.matched.some(record => record.meta.requiresAuth)){
    if (routerAuthCheck){
      //store.commit('setuserIsAuthenticated', true);  //TOTO: finish later
      next();
    }
    else{
      router.replace('/login');
    }
  }
  else{
    next();
  }

});

export default router;
