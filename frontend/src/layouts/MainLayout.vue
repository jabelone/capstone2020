<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar
      class="bg-secondary">
        <q-btn
          flat
          dense
          round
          icon="fas fa-bars"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Digital Jukebox
        </q-toolbar-title>

        <div>v0.1b</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="text-grey-8">
          Main Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink';

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Login',
          caption: 'Login to Digital Jukebox',
          icon: 'fas fa-sign-in-alt',
          link: '/login'
        },
        {
          title: 'Logout',
          caption: 'Logout of the site',
          icon: 'fas fa-sign-out-alt',
          link: '/logout'
        },
        {
          title: 'Venue',
          caption: 'See a single venue',
          icon: 'fas fa-glass-martini',
          link: '/venue/example'
        },
        {
          title: 'Register',
          caption: 'Register a Digital Jukebox account',
          icon: 'fas fa-user-plus',
          link: '/register'
        },
        {
          title: 'Venues',
          caption: 'View venues',
          icon: 'fas fa-list',
          link: '/venues'
        }
      ]
    };
  }
};
</script>
