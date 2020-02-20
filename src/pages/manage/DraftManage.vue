<template>
  <div>
    <el-table v-model="tableData" :data="tableData">
      <el-table-column prop="articleName" label="文章名称" width="200">
      </el-table-column>
      <el-table-column prop="articleList.name" label="目录" width="230">
      </el-table-column>
      <el-table-column
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button @click="editArticle(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="removeArticle(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <editor :articleId="articleId" :articleName="articleName" :selectValue="selectValue" :articleList="articleList" :articleContent="articleContent" v-show="editorShow" @save="save" @publish="publish" @saveAs="saveAs" @exit="exit" @close="editorShow = false">
    </editor>
  </div>
</template>

<script>
import editor from './editor'
import _ from 'lodash'
import env from '../../../config/dev.env.js'
import axios from 'axios'
let IP = env.SERVER_IP

export default {
  data () {
    return {
      editorShow: false,
      tableData: [],
      articleList: [],
      articleContent: '',
      articleName: '',
      selectValue: '',
      articleId: ''
    }
  },
  created () {
    this.getAllArticle()
    this.getArticleList()
  },
  methods: {
    /*
      清除props中的数据
    */
    clearProps: function () {
      this.articleContent = ''
      this.articleName = ''
      this.selectValue = ''
      this.articleId = ''
    },

    /*
      增加文章
      */
    addButton: function () {
      this.clearProps()
      this.articleContent = '# new article'
      this.editorShow = true
      this.getArticleList()
    },
    /*
      从服务器获取文章集列表
    */
    getArticleList: function () {
      axios.get(IP + '/api/getArticleList').then(response => {
        this.articleList = response.data.data
      })
    },
    /*
      获取所有文章信息
    */
    getAllArticle: function () {
      axios.get(IP + '/api/getAllArticle').then(response => {
        this.tableData = _.remove(response.data.data, n => {
          return n.publish === false
        })
        console.log(this.tableData)
      }).catch(err => {
        console.log(err)
      })
    },
    /*
      编辑文章,
      将该文章的articleName,articleList,articleContent传入子组件 <editor>中
    */
    editArticle: function (e) {
      this.articleContent = e.articleContent
      this.articleName = e.articleName
      this.selectValue = e.articleList.Lid
      this.articleId = e._id
      this.editorShow = true
    },
    removeArticle: function (e) {
      axios.post(IP + '/api/removeArticle', {_id: e._id}).then(response => {
      }).catch(err => {
        console.log(err)
      }).then(this.getAllArticle)
    },
    save: function () {
      console.log('it will save')
    },
    publish: function (article) {
      axios.post(IP + '/api/addOrModifyArticle', article).then(response => {
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
