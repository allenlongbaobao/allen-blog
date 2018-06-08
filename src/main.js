// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Select, Container, Header, Main, Aside, Menu, MenuItem, MenuItemGroup, Form, FormItem, Input, Table, TableColumn, Dialog, Option } from 'element-ui'
//  import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Main.name, Main)
Vue.component(Aside.name, Aside)
Vue.component(Menu.name, Menu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Dialog.name, Dialog)
Vue.component(Option.name, Option)
//  Vue.use(VueResource)

Vue.config.productionTip = true
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { App }
})
