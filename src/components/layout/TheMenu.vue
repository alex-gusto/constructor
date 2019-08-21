<template>
  <v-list dense nav>
    <v-list-item v-for="(item, i) in menu" :key="i" link :to="item.href">
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>
        {{ item.label }}
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    props: {
      menu: {
        type: Array,
        default: () => ([
          {
            label: 'Home',
            icon: 'mdi-home',
            href: '/'
          },
          {
            label: 'Blog',
            icon: 'mdi-cake',
            href: '/blog'
          },
          {
            label: 'Pages',
            icon: 'mdi-list',
            href: '/pages'
          },
          {
            label: 'Builder',
            icon: 'mdi-spa',
            href: '/builder'
          }
        ])
      }
    }
  }
</script>
