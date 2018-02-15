import Vue from 'vue'
import Router from 'vue-router'
import Lab from '@/components/Lab'
import Head from '@/components/Head'
import Body from '@/components/Body'
import Foot from '@/components/Foot'
import Article from '@/components/Article'
import Admin from '@/components/Admin'
import Manage from '@/components/Manage'
import ShowCompleteArticle from '@/components/ShowCompleteArticle'
import ArticleManage from '@/pages/manage/ArticleManage'
import ArticleListManage from '@/pages/manage/ArticleListManage'
import DraftManage from '@/pages/manage/DraftManage'
import RangeClear from '@/pages/lab/RangeClear'
import ReaderAssist from '@/pages/lab/ReaderAssist'
import Valentine from '@/pages/lab/Valentine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPage',
      components: {
        Body: Body
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
      path: '/RangeClear',
      name: 'RangeClear',
      components: {
        Body: RangeClear
      }
    },
    {
      path: '/ReaderAssist',
      name: 'ReaderAssist',
      components: {
        Body: ReaderAssist
      }
    },
    {
      path: '/Valentine',
      name: 'Valentine',
      components: {
        Body: Valentine
      }
    },
    {
      path: '/lab',
      name: 'lab',
      components: {
        Head: Head,
        Body: Lab,
        Foot: Foot
      }
    },
    {
      path: '/admin',
      name: 'admin',
      components: {
        Body: Admin
      }
    },
    {
      path: '/manage',
      name: 'manage',
      components: {
        Body: Manage,
        Foot: Foot
      },
      children: [{
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
