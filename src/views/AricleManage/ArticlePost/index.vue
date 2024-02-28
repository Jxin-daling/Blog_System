<template>
  <div class="container_aclpost">
    <el-form
      :model="aclForm"
      :rules="rules"
      ref="formRef"
    >
      <el-form-item prop="title">
        <el-input placeholder="请输入文章标题" v-model="aclForm.title"/>
      </el-form-item>  
    </el-form>
    
    <el-tiptap v-model:content="content" :extensions="extensions" class="text_editor"/>

      <el-select
        placeholder="请选择分类"
        v-model="defaultvalue"
        size="large"
        @change="handlerchange"
      >
        <el-option
          v-for="item in categorystore.categorylist.msg"
          :key="item.cid"
          :label="item.categoryname"
          :value="[item.cid,item.categoryname]"
        />
      </el-select>
      当前类别:<el-button>{{ aclForm.category }}</el-button>
    <el-button type="primary" @click="confirm" style="width: 100%;">提交</el-button>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive,watch } from "vue";
import { postArticleApi } from '@/apis/article'
import { useCategoryStore } from '@/stores/category'
const categorystore = useCategoryStore()
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

const defaultvalue = ref('无')

// 内容编写
const content = ref(`
  <h1>Heading</h1>
  <p>This Editor is awesome!</p>
`);


// 表单数据
const aclForm = ref({
    title:'',
    content:content.value,
    cid:0,
    category:''
})


watch(()=>content.value,()=>{
  aclForm.value.content = content.value
})

// 校验规则 
const rules = reactive({
  acltitle:[
        {required:true, message:'标题名称不能为空', trigger:'blur'}
    ]
})

const formRef = ref()

// 提交文章
const confirm = ()=>{
  formRef.value.validate(async(valid)=>{
      if(valid){
        postArticleApi(aclForm.value)
      }
  })
}

const handlerchange = (val)=>{
  aclForm.value.cid = val[0]
  aclForm.value.category = val[1]
}

onMounted(async()=>{
  await categorystore.getcategory()
})
</script>

<style lang="scss">

</style>