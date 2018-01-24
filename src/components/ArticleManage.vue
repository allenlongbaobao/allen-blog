<template>
  <div>
    <el-table v-model="tableData" :data="tableData">
      <el-table-column prop="articleName" label="文章名称" width="300">
      </el-table-column>
      <el-table-column prop="date" label="发布时间" width="200">
      </el-table-column>
      <el-table-column prop="articleList.name" label="目录" width="150">
      </el-table-column>
      <el-table-column
        label="操作"
        width="250">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="editArticle" type="text" size="small">编辑</el-button>
          <el-button @click="removeArticle(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="addNew" type="primary" size="medium" @click="addButton">新增</el-button>
    <editor v-show="editorShow" @save="save" @publish="publish" @saveAs="saveAs" @exit="exit" @close="editorShow = false">
    </editor>
  </div>
</template>

<script>
import editor from './editor'
//  import _ from 'lodash'

export default {
  data () {
    return {
      editorShow: false,
      tableData: []
    }
  },
  created () {
    this.getAllArticle()
  },
  methods: {
    addButton: function () {
      this.editorShow = true
      this.getAllArticle()
    },
    getAllArticle: function () {
      this.$http.get('/api/getAllArticle').then(response => {
        this.tableData = response.data.data
        console.log(this.tableData)
      }).catch(err => {
        console.log(err)
      })
    },
    editArticle: function () {

    },
    removeArticle: function (e) {
      this.$http.post('/api/removeArticle', {_id: e._id}).then(response => {
      }).catch(err => {
        console.log(err)
      }).then(this.getAllArticle)
    },
    save: function () {
      console.log('it will save')
    },
    publish: function (article) {
      this.$http.post('/api/addArticle', article).then(response => {
        console.log(response)
        this.editorShow = false
      }, response => {
        console.log(response)
      }).then(this.getAllArticle)
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
