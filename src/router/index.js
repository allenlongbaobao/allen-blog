import Vue from 'vue'
import Router from 'vue-router'
const Head = () => import('@/components/Head')
const Body = () => import('@/components/Body')
const Foot = () => import('@/components/Foot')
const Article = () => import('@/components/Article')
const Lab = () => import('@/components/Lab')
const Download = () => import('@/components/Download')
const Admin = () => import('@/components/Admin')
const Manage = () => import('@/components/Manage')

const ShowCompleteArticle = () => import('@/components/ShowCompleteArticle')
const ArticleManage = () => import('@/pages/manage/ArticleManage')
const ArticleListManage = () => import('@/pages/manage/ArticleListManage')
const DraftManage = () => import('@/pages/manage/DraftManage')
const RangeClear = () => import('@/pages/lab/RangeClear')
const ReaderAssist = () => import('@/pages/lab/ReaderAssist')
const Valentine = () => import('@/pages/lab/Valentine')
const VueShop = () => import('@/pages/lab/VueShop')
const Selection = () => import('@/pages/lab/Selection')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      components: {
        Body: Body
      }
    },
    {
      path: '/blog',
      name: 'blog',
      meta: {keepAlive: true},
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
      path: '/VueShop',
      name: 'VueShop',
      components: {
        Body: VueShop
      }
    },
    {
      path: '/Selection',
      name: 'Selection',
      components: {
        Body: Selection
      }
    },
    {
      path: '/project',
      name: 'project',
      components: {
        Head: Head,
        Body: Lab,
        Foot: Foot
      }
    },
    {
      path: '/download',
      name: 'download',
      components: {
        Head: Head,
        Body: Download,
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
