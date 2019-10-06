<template>
    <v-list dense nav>
        <template
                v-for="(item, i) in menu"
        >
            <v-list-group
                    v-if="item.items"
                    :key="i"
            >
                <template v-slot:activator>
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.label }}</v-list-item-title>
                </template>

                <menu-level v-for="(lev, k) in item.items" v-bind="lev" :key="k"/>

            </v-list-group>

            <menu-level v-else v-bind="item" :key="i"/>

        </template>
    </v-list>
</template>

<script>
  import { VListItem, VListItemIcon, VListItemTitle, VIcon } from 'vuetify/lib'

  export default {
    components: {
      menuLevel: {
        components: {
          VListItem,
          VIcon,
          VListItemTitle,
          VListItemIcon
        },
        props: {
          label: String,
          icon: String,
          href: String
        },
        render(h) {
          return h('v-list-item', {
            props: {
              href: this.href
            }
          }, [
            h('v-list-item-icon', [
              h('v-icon', this.icon)
            ]),
            h('v-list-item-title', this.label)
          ])
        }
      }
    },
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
            href: '/builder',
            items: [
              {
                href: '/builder/blocks',
                label: 'Blocks'
              },
              {
                href: '/builder/entity-types',
                label: 'Types'
              }
            ]
          }
        ])
      }
    },

    methods: {}
  }
</script>

<style lang="scss" scoped>
    .el-menu {
        height: 100%;
    }
</style>
