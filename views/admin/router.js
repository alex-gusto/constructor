import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/dashboard/index.vue'

const glob = require('glob')

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }, {
      path: '/blog',
      component: () => import('./views/blog/index.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/blog/childs/articlesList.vue')
        },
        {
          path: 'new-article',
          name: 'new-article',
          component: () => import('./views/blog/childs/newArticle.vue')
        }
      ]
    }, {
      path: '/builder',
      component: () => import('./views/builder/index.vue'),
      children: [
        {
          path: 'entity-types',
          component: () => import('./views/builder/types/index.vue'),
          children: [
            {
              path: '',
              name: 'types-list',
              component: () => import('./views/builder/types/TypesList.vue')
            },
            {
              path: ':id',
              name: 'edit-type',
              component: () => import('./views/builder/types/EditType.vue')
            }
          ]
        },
        {
          path: 'blocks',
          component: () => import('./views/builder/blocks/index.vue'),
          children: [
            {
              path: '',
              name: 'blocks-list',
              component: () => import('./views/builder/blocks/BlocksList.vue')
            },
            {
              path: ':id',
              name: 'edit-block',
              component: () => import('./views/builder/blocks/EditBlock.vue')
            }
          ]
        }
      ]
    }, {
      path: '/pages',
      component: () => import('./views/pages/index.vue'),
      children: [
        {
          path: '',
          component: () => import('./views/pages/childs/PagesList.vue')
        },
        {
          path: 'new-page',
          name: 'new-page',
          component: () => import('./views/pages/childs/NewPage.vue')
        },
        {
          path: ':id',
          name: 'edit-page',
          component: () => import('./views/pages/childs/EditPage.vue')
        }
      ]
    }
  ]
})
