import Vue from 'vue'
import Router from 'vue-router'
import Mask from '@/components/Mask'
import Head from '@/components/Head'
import Body from '@/components/Body'
import Foot from '@/components/Foot'
import Article from '@/components/Article'
import Manage from '@/components/Manage'
import ArticleManage from '@/components/ArticleManage'
import ArticleListManage from '@/components/ArticleListManage'
import DraftManage from '@/components/DraftManage'
import ShowCompleteArticle from '@/components/ShowCompleteArticle'

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
      path: '/showCompleteArticle/:id',
      name: 'showCompleteArticle',
      components: {
        Head: Head,
        Body: ShowCompleteArticle,
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
      },
      children: [{
        path: '/',
        component: ArticleManage
      }, {
        path: 'articleManage',
        component: ArticleManage
      }, {
        path: 'articleListManage',
        component: ArticleListManage
      }, {
        path: 'draftManage',
        component: DraftManage
      }]
    }
  ]
})
