<template>
    <el-card>
        <el-table :data="aclArr" style="width: 100%;margin:10px 0;" border empty-text="没有数据">
            <el-table-column type="index" label="序号" width="60"></el-table-column>
            <el-table-column prop="title" label="文章标题" width="100"></el-table-column>
            <el-table-column label="文章标图" width="150">
                <template #={row}>
                    <img :src="row.bannerimgurl" alt="未有图片" width="100px" height="100px"> 
                </template>
            </el-table-column>
            <el-table-column label="文章内容" prop="content" width="200"></el-table-column>
            <el-table-column label="文章分类" prop="category" width="100"></el-table-column>
            <el-table-column prop="address" label="操作" width="200">
                <template #={row}>
                    <el-button type="primary" :icon="Edit" @click="updateAcl(row)"></el-button>
                    <el-button type="primary" :icon="FolderAdd" @click="updatePic(row)"></el-button>
                    <el-popconfirm :title="`确定删除${row.title}?`" @confirm="removeAcl(row)" @cancel="cancel">
                        <template #reference>
                            <el-button type="danger" :icon="Delete"></el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>    
    </el-card>

    <!-- 对话框 -->
    <el-dialog v-model="dialogFormVisibleA" :title="articleForm.aid?'修改文章':'添加文章'" width="500">
        <el-form style="width: 90%;"
            :model="articleForm"
            :rules="rules"
            ref="formRef"
        >
            <el-form-item label="文章名称">
                <el-input placeholder="请输入文章名称" v-model="articleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
                <el-input placeholder="请输入文章内容" v-model="articleForm.content" type="textarea"></el-input>
            </el-form-item>
        </el-form>

        <template #footer>
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="confirmA">确定</el-button>
        </template>
    </el-dialog>


    <el-dialog v-model="dialogFormVisibleB" :title="articleForm.bannerimgurl?'修改文章图片':'添加文章图片'" width="500">
        <form enctype="multipart/form-data" method="post">
            <input type="file" name="myfile" @change="changehandle($event)" id="myfile" accept="image/*" style="display: none;">
        </form>
        <label for="myfile">
            <img src="../../../assets/camera.png" alt="">
        </label>
        <li v-for="(item,index) in urllist" :key="index">
            <img :src="item" alt="" width="100px" height="100px">
        </li>

        <template #footer>
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="confirmB(row)">确定</el-button>
        </template>
    </el-dialog>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { postArticlePicApi,delArticleApi,postArticleApi } from '@/apis/article'
import { Edit,Delete,FolderAdd } from '@element-plus/icons-vue';
import { useArticleStore } from '@/stores/article'
const articlestore = useArticleStore()

const dialogFormVisibleA = ref(false)
const dialogFormVisibleB = ref(false)

// 数据存储
const aclArr = ref([])

// 表格数据
aclArr.value = articlestore.articlelist
const formRef = ref()

const articleForm = ref({
    aid:0,
    title:'',
    content:'',
    bannerimgurl:'',
    category:'',
    createtime:''
})

// 校验规则
const rules = reactive({
    title:[
        {required:true, message:'文章标题不能为空', trigger:'blur'}
    ],
    content:[
        {required:true, message:'文章内容不能为空', trigger:'blur'}
    ]
    
})

// 修改文章
const updateAcl = (row)=>{
    articleForm.value.aid = row.aid
    articleForm.value.title = row.title
    articleForm.value.content = row.content
    articleForm.value.bannerimgurl = row.bannerimgurl
    articleForm.value.category = row.category
    articleForm.value.createtime = row.createtime
    dialogFormVisibleA.value = true
}

// 提交修改文章数据
const confirmA = async()=>{
    dialogFormVisibleA.value = true
    formRef.value.validate(async(valid)=>{
        if(valid){
            postArticleApi(articleForm.value)
            dialogFormVisibleA.value = false
        }
    })
}

const cancel = ()=>{
    dialogFormVisibleA.value = false
}

// 添加/更新文章配图的对话框
const updatePic = (row)=>{
    dialogFormVisibleB.value = true
    articleForm.value.aid = row.aid
    articleForm.value.bannerimgurl = row.bannerimgurl
}

// 图片上传
let file = ref()
let urllist = ref([])
let n = ref(0)
let limit = ref(1)

const changehandle =function(e){
  file.value = e.target.files
  urllist.value = []
  n.value = 0
  if(n.value <= limit.value){
    for(let i = 0; i < file.value.length; i++){
        let picurl = window.URL.createObjectURL(file.value[i])
        urllist.value.push(picurl)
        urllist.value.splice(limit.value)  //限制展示数量
    }
  }
}

// 确认添加/更新文章配图
const confirmB = ()=>{
    const {aid} = articleForm.value
    dialogFormVisibleB.value = false
    postArticlePicApi(aid,file.value).then(res=>{
    })
}


// 执行删除文章
const removeAcl = (row)=>{
    const {aid,cid} = row
    delArticleApi({aid,cid})
}

onMounted(()=>{
    articlestore.getarticle()
})
</script>

<style>

</style>