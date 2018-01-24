<template>
  <div>
    <el-table :data="tableData" @click="showButton">
      <el-table-column prop="name" label="文章名称" width="300">
      </el-table-column>
      <el-table-column prop="date" label="发布时间" width="200">
      </el-table-column>
      <el-table-column prop="menu" label="目录" width="150">
      </el-table-column>
      <el-table-column
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
    <editor v-show="editorShow" @save="save" @publish="publish" @saveAs="saveAs" @exit="exit" @close="editorShow = false">
    </editor>
  </div>
</template>

<script>
import editor from './editor'

export default {
  data () {
    return {
      editorShow: false,
      tableData: []
    }
  },
  methods: {
    showButton: function (e) {

    },
    save: function () {
      console.log('it will save')
    },
    publish: function (article) {
      console.log('addArticle:' + article)
      this.$http.post('/api/addArticle', article).then(response => {
        console.log(response)
      }, response => {
        console.log(response)
      })
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
</style>
