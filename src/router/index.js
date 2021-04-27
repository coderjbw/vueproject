import Vue from 'vue'
import vueRouter from 'vue-router'
const home = () => import('views/home/Home');
const cart = () => import('views/cart/Cart');
const category = () => import('views/category/Category');
const profile = () => import('views/profile/Profile');
const detail = ()=> import('views/detail/detail')

Vue.use(vueRouter)

const router =  new vueRouter({
  routes:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path:'/category',
      component:category
    },
    {
      path:'/profile',
      component:profile
    },
    {
      path:'/detail/:id',
      component:detail
    },
  ],
  mode:'history',
});

export default router
