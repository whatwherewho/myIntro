import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../components/home'
import about from '../components/about'
import myIntro from '../components/myIntro'
import more from '../components/more'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path:'/more',
      name:'more',
      component:more
    },
    {
      path:'/home',
      name:'Home',
      component:home
    },
    {
      path:'/about',
      name:'About',
      component:about
    },
    {
      path:"/myIntro/",
      redirect:'myIntro/1'
    },
    {
      path:"/myIntro/:page",
      name:"myIntro",
      component:myIntro
    }
  ]
})
