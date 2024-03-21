<template>
    <el-card>
        <el-button type="primary" :icon="Plus" @click="addPic">添加分类</el-button>

        <el-table :data="categoryArr" style="width: 100%;margin:10px 0;" border empty-text="没有数据">
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="categoryname" label="名称" width="200"></el-table-column>
            <el-table-column label="图片">
                <template #={row}>
                    <img :src="row.imgurl" alt="未有图片" width="100px" height="100px"> 
                </template>
            </el-table-column>
            <el-table-column label="文章总数" prop="aclcount"></el-table-column>
            <el-table-column prop="address" label="操作" width="200">
                <template #={row}>
                    <el-button type="primary" :icon="Edit" @click="updatePicName(row)"></el-button>
                    <el-button type="primary" :icon="FolderAdd" @click="updatePic(row)"></el-button>
                    <el-popconfirm :title="`确定删除${row.categoryname}?`" @confirm="removePic(row)" @cancel="cancel">
                        <template #reference>
                            <el-button type="danger" :icon="Delete"></el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>    
    </el-card>

    <!-- 对话框 -->
    <el-dialog v-model="dialogFormVisibleA" :title="categoryForm.cid?'修改分类名称':'添加分类'" width="500">
        <el-form
            :model="categoryForm"
            :rules="rules"
            ref="formRef"
        >
            <el-form-item label="分类名称" prop="categoryname">
                <el-input  type="text" v-model="categoryForm.categoryname" placeholder="请输入分类名称"/>
            </el-form-item>
        </el-form>

        <template #footer>
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="confirmA">确定</el-button>
        </template>
    </el-dialog>

    <el-dialog v-model="dialogFormVisibleB" :title="categoryForm.imgurl?'修改分类图片':'添加分类图片'" width="500">
        <form enctype="multipart/form-data" method="post">
            <input type="file" name="myfile" @change="changehandle($event)" id="myfile" accept="image/*" style="display: none;" >
        </form>
        <label for="myfile">
            <img src="../../../public/camera.png" alt="">
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
import { Plus } from '@element-plus/icons-vue';
import { onMounted, reactive, ref } from 'vue';
import { Edit,Delete,FolderAdd } from '@element-plus/icons-vue';
import { postCategoryApi,delCategoryApi,postCategoryPicApi } from '@/apis/category'
import { useCategoryStore } from '@/stores/category'
const categorystore = useCategoryStore()

const dialogFormVisibleA = ref(false)
const dialogFormVisibleB = ref(false)

// 数据存储
const categoryArr = ref([])

// 表格数据

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

// 修改图片名称
const updatePicName = (row)=>{
    dialogFormVisibleA.value = true
    categoryForm.value.cid = row.cid
    categoryForm.value.categoryname = row.categoryname
    categoryForm.value.imgurl = row.imgurl
}

// 修改图片
const updatePic = (row)=>{
    dialogFormVisibleB.value = true
    categoryForm.value.cid = row.cid
    categoryForm.value.categoryname = row.categoryname
    categoryForm.value.imgurl = row.imgurl
}

// 取消操作
const cancel = ()=>{
    dialogFormVisibleA.value = false
    dialogFormVisibleB.value = false
}

// 准备表单对象
const categoryForm = ref({
    cid:'',
    categoryname:'',
    aclcount:0,
    imgurl:''
})

// 校验规则 
const rules = reactive({
    categoryname:[
        {required:true, message:'图片名称不能为空', trigger:'blur'}
    ]
})

const formRef = ref()

// 添加图片
const addPic = ()=>{
    categoryForm.value.cid = ''
    dialogFormVisibleA.value = true
}

// 提交图片名称数据
const confirmA = async()=>{
    dialogFormVisibleA.value = true
    formRef.value.validate(async(valid)=>{
        if(valid){
            postCategoryApi(categoryForm.value)
            dialogFormVisibleA.value = false
        }
    })
}

// 提交图片数据
const confirmB = ()=>{
    const {cid} = categoryForm.value
    dialogFormVisibleB.value = false
    postCategoryPicApi(cid,file.value)
}

// 执行删除操作
const removePic = (row)=>{
    const {cid} = row
    delCategoryApi({cid})
}
import { getCategoryApi,getCategoryListApi } from '@/apis/category'

onMounted(async()=>{
    await categorystore.getcategory()
    categoryArr.value = categorystore.categorylist.msg

})
</script>

<style>

</style>