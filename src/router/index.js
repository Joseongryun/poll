import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Join from '@/views/Join'
import PollList from '@/views/PollList'
import Poll from '@/views/Poll'
import PollInput from '@/views/PollInput'
import PollResult from "@/view/PollResult"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    }, 
    {
      path: '/polls/:menu',
      name: 'PollList',
      component: PollList,
      meta : {
        requiresAuth: true
      }
    },
    {
      path: '/polls/detail/:pid',
      name: 'Poll',
      component: Poll,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/polls/post',
      name: 'PollInput',
      component: PollInput,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/polls/result/:pid',
      name: 'PollResult',
      component: PollResult,
      meta: {
        requiresAuth: true
      }
    }
  ]
})