import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', component: () => import('pages/Register.vue') },
      { path: 'venues', component: () => import('pages/Venues.vue') },
      { path: 'venue/:id', component: () => import('pages/Venue.vue') },
      { path: 'music', component: () => import('pages/SelectMusic.vue') },
      {
        path: 'manage',
        component: () => import('pages/VenueManagerPages/Dashboard.vue')
      },
      {
        path: '/edit',
        component: () => import('pages/VenueManagerPages/Edit.vue')
      },
      {
        path: '/patrons',
        component: () => import('pages/VenueManagerPages/Patrons.vue')
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
