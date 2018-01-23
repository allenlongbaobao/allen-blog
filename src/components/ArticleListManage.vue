<template>
  <div>
    <el-table :data="tableData" @click="">
      <el-table-column prop="name" label="文章集名称" width="300">
      </el-table-column>
      <el-table-column prop="num" label="文章数量" width="200">
      </el-table-column>
    </el-table>
    <el-button class="addNew" type="primary" size="medium" @click="dialogFormVisible=true">新增</el-button>
    <el-dialog title="新增文章集" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="文章集名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addNewArticle">确 定</el-button>
    </div>
  </el-dialog>

  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'this is articlelistmanage page',
      tableData: [{
        name: 'aa'
      }],
      dialogFormVisible: false,
      form: {
        name: '测试'
      }
    }
  },
  created () {
    this.$http.get('/api/getArticleList').then(response => {
      console.log(response.data)
      this.tableData = response.data.data
      console.log(this.tableData)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    addNewArticle: function () {
      this.dialogFormVisible = false
      this.$http.post('/api/addArticleList', {name: this.form.name}).then(response => {
        console.log('增加成功：' + response.data)
        this.tableData.push(response.data.data)
        console.log(this.tableData)
      }, response => {
      })
    }
  }
}
</script>

<style>
.addNew {
  width: 100%;
}
</style>
