<template>
  <div>
    <el-table :data="tableData" @click="">
      <el-table-column prop="name" label="文章集名称" width="300">
      </el-table-column>
      <el-table-column prop="articleNum" label="文章数量" width="200">
      </el-table-column>
      <el-table-column
        label="操作"
        width="250">
        <template slot-scope="scope">
          <el-button @click="renameArticleList(scope.row)" type="primary" size="small">重命名</el-button>
          <el-button @click="removeArticleList(scope.row)"  type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="addNew" type="primary" size="medium" @click="dialogFormVisible=true">新增</el-button>
    <el-dialog title="新增文章集" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="文章集名称">
        <el-input v-model.trim="form.name" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addNewArticleList">确 定</el-button>
    </div>
  </el-dialog>

  </div>
</template>

<script>
import _ from 'lodash'
import env from '../../../config/dev.env.js'
import axios from 'axios'
let IP = env.SERVER_IP

export default {
  data () {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: '测试'
      }
    }
  },
  created () {
    axios.get(IP + '/api/getArticleList').then(response => {
      this.tableData = response.data.data
      console.log('tableData', this.tableData)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    renameArticleList: function (e) {
    },
    removeArticleList: function (e) {
      if (e.articleNum > 0) {
        alert('该文章集内还有文章')
      } else {
        axios.post(IP + '/api/removeArticleList', {_id: e._id}).then(response => {
          this.tableData = this.tableData.filter(t => {
            return t._id !== response.body.data._id
          })
        }, err => {
          console.log(err)
        })
      }
    },
    addNewArticleList: function () {
      let ifExitedName = _.find(this.tableData, (n) => {
        return n.name === this.form.name
      })

      if (!ifExitedName && this.form.name !== '') {
        this.dialogFormVisible = false
        axios.post(IP + '/api/addArticleList', {name: this.form.name, articleNum: 0}).then(response => {
          this.tableData.push(response.data.data)
        }, response => {
        })
      } else {
        alert('该文章集已经存在, 或者不符合要求')
      }
    }
  }
}
</script>

<style>
.addNew {
  width: 100%;
}
</style>
