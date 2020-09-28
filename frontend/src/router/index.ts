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
    path: '/users',
    name: 'Users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/users-details/:action/:id?',
    name: 'UserDetails',
    component: () => import(/* webpackChunkName: "users-details" */ '../views/UserDetails.vue'),
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
