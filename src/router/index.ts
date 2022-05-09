import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TodoView from '../views/TodoView.vue';
import ObjectiveView from '../views/ObjectiveView.vue';
import BudgetView from '../views/BudgetView.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: to => {
        return { path: '/home', query: { q: to.params.searchText } }
      },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'Todo',
      component: TodoView
    },
    {
      path: '/objectives',
      name: 'Objectives',
      component: ObjectiveView
    },
    {
      path: '/budget',
      name: 'Budget',
      component: BudgetView
    }
    // {
    //   path: '/todo',
    //   name: 'Todo',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/TodoView.vue')
    // }
  ],
  linkActiveClass: 'ob-bg-dark-secondary ob-bg-dark-text'
})

export default router
