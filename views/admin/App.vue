<template>
  <v-app id="inspire">
  <v-navigation-drawer
  v-model="drawer"
  app
  >
  <TheMenu/>    
  </v-navigation-drawer>

  <v-app-bar
  app
  color="indigo"
  dark
  >
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>

  <v-content>
  <v-container
  fluid
  fill-height
  >
  <v-layout>
  <router-view/>
  </v-layout>
  </v-container>
  </v-content>
  <v-footer
  color="indigo"
  app
  >
  <span class="white&#45;&#45;text">&copy; 2019</span>
  </v-footer>
  </v-app>
</template>

<script>
  import TheMenu from './components/layout/TheMenu.vue'

  export default {
    components: { TheMenu },
    props: {
      source: String
    },

    data: () => ({
      drawer: null
    })
  }
</script>
