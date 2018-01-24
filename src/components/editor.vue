<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <span>标题：</span>
            <el-input class="titleInput" v-model.trim="title" type="text" name="title" placeholder="请输入标题"></el-input>
            <el-select size="large" v-model="selectValue" placeholder="请选择">
              <el-option v-for="item in articleList" :key="item._id" :label="item.name" :value="item._id">
              </el-option>
            </el-select>
            <el-button class="modal-default-button" @click="$emit('save')">保存至草稿箱</el-button>
            <el-button name="button" @click="publish">发布</el-button>
            <el-button name="button" @click="$emit('saveAs')">另存为</el-button>
            <el-button type="button" name="button" @click="exitWithoutSave">退出</el-button>
          </div>
          <div class="modal-body editor">
            <textarea :value="input" @input="update"></textarea>
            <div class="output" v-html="compiledMarkdown"></div>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'

export default {
  data () {
    return {
      input: '# test',
      title: '测试标题',
      selectValue: '',
      options: []
    }
  },
  props: {
    articleList: Array
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  created () {
    this.options = JSON.parse(window.localStorage.getItem('articleList'))
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300),
    publish: function () {
      console.log(this.articleList)
      let selectedOption = _.find(this.articleList, (item) => {
        return item._id === this.selectValue
      })
      let data = {
        articleContent: this.input,
        publish: true,
        articleName: this.title,
        articleList: {
          Lid: selectedOption._id,
          name: selectedOption.name
        }
      }
      this.$emit('publish', data)
    },
    exitWithoutSave: function () {
      var exitornot = confirm('您确定退出编辑，不保存当前编辑内容吗？')
      if (exitornot) {
        this.input = ''
        this.$emit('exit')
      }
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  margin: 0px auto;
  margin-left: 0px;
  margin-right: 0px;
}

.modal-container {
  width: 90%;
  height: 80%;
  vertical-align: middle;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  width: 100%;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
  width: 100%;
  height: 90%;
  float: left;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

#editor {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

div.titleInput {
  width: 30%;
}

div.el-select {
  width: 20%;
}

div.el-option {
  width: 100%;
  padding: 0px;
}

.output {
  float: right;
  height: 100%;
  width: 49%;
  overflow: scroll;
}
textarea, #editor div{
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: scroll;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
