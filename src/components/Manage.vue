<template>
  <div>
    <el-container>
      <el-aside>
        <el-menu>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-table :data="tableData" @click="showButton">
          <el-table-column prop="name" label="文章名称" width="300">
          </el-table-column>
          <el-table-column prop="date" label="发布时间" width="200">
          </el-table-column>
          <el-table-column prop="menu" label="目录" width="150">
          </el-table-column>
          <el-table-column
            v-show="mouseOn"
            label="操作"
            width="250">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button class="addNew" type="primary" size="medium" @click="editorShow = !editorShow">新增</el-button>
      </el-main>
      <editor v-show="editorShow" @save="save" @publish="publish" @saveAs="saveAs" @exit="exit" @close="editorShow = false">
      </editor>
    </el-container>
  </div>
</template>

<script>
import editor from './editor'

export default {
  data () {
    return {
      mouseOn: false,
      editorShow: false,
      tableData: null
    }
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
    editor
  }
}
</script>

<style>
.addNew {
  width: 100%;
}
</style>
