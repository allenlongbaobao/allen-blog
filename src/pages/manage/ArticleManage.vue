<template>
  <div>
    <el-table v-model="tableData" :data="tableData">
      <el-table-column prop="articleName" label="文章名称" width="200">
      </el-table-column>
      <el-table-column prop="publishAt" label="发布时间" width="180">
      </el-table-column>
      <el-table-column prop="articleList.name" label="目录" width="230">
      </el-table-column>
      <el-table-column
        label="操作"
        width="">
        <template slot-scope="scope">
          <router-link :to="{name:'showCompleteArticle', params:{id: scope.row._id}}"><el-button type="text" size="small">查看</el-button></router-link>
          <el-button @click="editArticle(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="removeArticle(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="addNew" type="primary" size="medium" @click="addButton">新增</el-button>
    <editor :articleId="articleId" :articleName="articleName" :selectValue="selectValue" :articleList="articleList" :articleContent="articleContent" v-show="editorShow" @save="save" @publish="publish" @saveAs="saveAs" @exit="exit" @close="editorShow = false">
    </editor>
  </div>
</template>

<script>
import editor from './editor'
import _ from 'lodash'
import env from '../../../config/dev.env.js'
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
      this.$http.get(IP + '/api/getArticleList').then(response => {
        this.articleList = response.data.data
      })
    },
    /*
      获取所有文章信息
    */
    getAllArticle: function () {
      this.$http.get(IP + '/api/getAllArticle').then(response => {
        /*
          注意_.remove的使用方式，这里的tableData 刚好是publish为true的对象
        */
        this.tableData = _.remove(response.data.data, n => {
          return n.publish === true
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
      this.$http.post(IP + '/api/removeArticle', {_id: e._id}).then(response => {
        this.tableData = this.tableData.filter(t => {
          return t._id !== response.data.data._id
        })
      }).catch(err => {
        console.log(err)
      })
    },
    save: function () {
      console.log('it will save')
    },
    publish: function (article) {
      this.$http.post(IP + '/api/addOrModifyArticle', article).then(response => {
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
