import Vue from 'vue'
import Router from 'vue-router'
import Mask from '@/components/Mask'
import Head from '@/components/Head'
import Body from '@/components/Body'
import Foot from '@/components/Foot'
import Article from '@/components/Article'
import Manage from '@/components/Manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pages',
      components: {
        Head: Head,
        Body: Body,
        Foot: Foot
      }
    },
    {
      path: '/article',
      name: 'article',
      components: {
        Head: Head,
        Body: Article,
        Foot: Foot
      }
    },
    {
      path: '/lab',
      name: 'lab',
      components: {
        Head: Head,
        Body: Mask,
        Foot: Foot
      }
    },
    {
      path: '/manage',
      name: 'manage',
      components: {
        Head: Head,
        Body: Manage,
        Foot: Foot
      }
    }
  ]
})
