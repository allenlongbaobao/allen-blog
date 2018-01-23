<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu default-active="1-1" :router=true>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>列表</template>
            <el-menu-item-group>
              <el-menu-item index="1-1" route="/manage/articleManage">文章</el-menu-item>
              <el-menu-item index="1-2" route="/manage/articleListManage">文章集</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view ></router-view>
      </el-main>

    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editorShow: false,
      tableData: null
    }
  },
  created () {
    this.$http.get('/api/getNoteList').then(response => {
      Window.localstorage.setItem('noteList', response.body.data)
    }, response => {
    })
  },
  methods: {
    showButton: function (e) {

    },
    save: function () {
      console.log('it will save')
    },
    publish: function (data) {
      let article = {
        noteName: data.noteName,
        noteLink: 'link',
        noteContent: data.noteContent,
        publish: data.publish,
        noteList: {
          name: '数据结构'
        }
      }
      this.$http.post('/api/addArticle', article).then(response => {
        console.log(response)
      }, response => {
        console.log(response)
      })
      console.log('it will publish')
    },
    saveAs: function () {
      console.log('it will saveas')
    },
    exit: function () {
      this.editorShow = false
    }
  },
  components: {
  }
}
</script>

<style>
.addNew {
  width: 100%;
}
</style>
