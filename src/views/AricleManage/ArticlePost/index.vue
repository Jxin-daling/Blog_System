<template>
  <div class="container_aclpost">
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入文章标题"/>
      </el-form-item>  
    </el-form>
    
    <el-tiptap v-model:content="content" :extensions="extensions" class="text_editor"/>

      <el-select
        placeholder="请选择分类"
        v-model="value"
        size="large"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>

    <el-button type="primary" @click="confirm" style="width: 100%;">提交</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  BulletList,
  OrderedList,
  Color
} from "element-tiptap-vue3-fixed";

const extensions = [
  Doc,
  Text,
  Paragraph,
  Heading.configure({ level: 5 }),
  Bold.configure({ bubble: true }), // render command-button in bubble menu.
  Underline.configure({ bubble: true, menubar: false }), // render command-button in bubble menu but not in menubar.
  Italic,
  Strike,
  BulletList,
  OrderedList,
  Color
];

const value = ref('Option1')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
  {
    value: 'Option6',
    label: 'Option6',
  },
  {
    value: 'Option7',
    label: 'Option7',
  },
  {
    value: 'Option8',
    label: 'Option8',
  },
  {
    value: 'Option9',
    label: 'Option9',
  },
]

// editor's content
const content = ref(`
  <h1>Heading</h1>
  <p>This Editor is awesome!</p>
`);

// 提交文章
const confirm = ()=>{
  console.log("提交喽");
}
</script>

<style lang="scss">
.container_aclpost{

  
}
</style>