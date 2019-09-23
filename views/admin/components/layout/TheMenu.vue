<template>
  <el-menu router>
    <el-menu-item
      v-for="(item, i) in menu"
      :key="i"
      :index="item.href"
      link
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span>{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    props: {
      menu: {
        type: Array,
        default: () => ([
          {
            label: 'Home',
            icon: 's-home',
            href: '/'
          },
          {
            label: 'Blog',
            icon: 's-opportunity',
            href: '/blog'
          },
          {
            label: 'Pages',
            icon: 'document',
            href: '/pages'
          },
          {
            label: 'Builder',
            icon: 's-tools',
            href: '/builder'
          }
        ])
      }
    }
  }
</script>
