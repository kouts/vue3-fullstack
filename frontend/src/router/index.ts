import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/composition-api',
    name: 'CompositionApi',
    component: () => import(/* webpackChunkName: "composition-api" */ '../views/CompositionApi.vue'),
    meta: {
      layout: 'default'
    }
  }
];

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHashHistory(),
  routes
});

export { router };
