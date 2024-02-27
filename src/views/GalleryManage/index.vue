<template>
    <el-card>
        <el-button type="primary" :icon="Plus" @click="addPic">添加图片</el-button>

        <el-table :data="galleryArr" style="width: 100%;margin:10px 0;" border empty-text="没有数据">
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="imgname" label="名称" width="200"></el-table-column>
            <el-table-column label="图片">
                <template #={row}>
                    <img :src="row.imgurl" alt="未有图片" width="100px" height="100px"> 
                </template>
            </el-table-column>
            <el-table-column prop="address" label="操作" width="200">
                <template #={row}>
                    <el-button type="primary" :icon="Edit" @click="updatePicName(row)"></el-button>
                    <el-button type="primary" :icon="FolderAdd" @click="updatePic(row)"></el-button>
                    <el-popconfirm :title="`确定删除${row.imgname}?`" @confirm="removePic(row)" @cancel="cancel">
                        <template #reference>
                            <el-button type="danger" :icon="Delete"></el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>    
    </el-card>

    <!-- 对话框 -->
    <el-dialog v-model="dialogFormVisibleA" :title="picForm.pid?'修改图片名称':'添加图片'" width="500">
        <el-form
            :model="picForm"
            :rules="rules"
            ref="formRef"
        >
            <el-form-item label="图片名称" prop="imgname">
                <el-input  type="text" v-model="picForm.imgname" placeholder="请输入图片名称"/>
            </el-form-item>
        </el-form>

        <template #footer>
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="confirmA">确定</el-button>
        </template>
    </el-dialog>

    <el-dialog v-model="dialogFormVisibleB" :title="picForm.pid?'修改图片':'添加图片'" width="500">
        <form enctype="multipart/form-data" method="post">
            <input type="file" name="myfile" @change="changehandle($event)" id="myfile" accept="image/*" style="display: none;" >
        </form>
        <label for="myfile">
            <img src="../../assets/camera.png" alt="">
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
import { postGalleryApi,delGalleryApi,postGalleryPicApi } from '@/apis/gallery'
import { useGalleryStore } from '@/stores/gallery'
const gallerystore = useGalleryStore()

const dialogFormVisibleA = ref(false)
const dialogFormVisibleB = ref(false)

// 数据存储
const galleryArr = ref([])
// 总条数
const total = ref()

// 表格数据
galleryArr.value = gallerystore.gallerylist.msg
total.value = gallerystore.gallerylist.total

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

const confirmB = ()=>{
    const {pid} = picForm.value
    dialogFormVisibleB.value = false
    postGalleryPicApi(pid,file.value)
}

// 修改图片名称
const updatePicName = (row)=>{
    dialogFormVisibleA.value = true
    picForm.value.pid = row.pid
    picForm.value.imgname = row.imgname
    picForm.value.imgurl = row.imgurl
}

// 修改图片
const updatePic = (row)=>{
    dialogFormVisibleB.value = true
    picForm.value.pid = row.pid
    picForm.value.imgname = row.imgname
    picForm.value.imgurl = row.imgurl
}

// 取消操作
const cancel = ()=>{
    dialogFormVisibleA.value = false
    dialogFormVisibleB.value = false
}

// 准备表单对象
const picForm = ref({
    pid:'',
    imgname:'',
    imgurl:''
})

// 校验规则 
const rules = reactive({
    imgname:[
        {required:true, message:'图片名称不能为空', trigger:'blur'}
    ]
})

const formRef = ref()

// 添加图片
const addPic = ()=>{
    picForm.value.pid = ''
    console.log("pid是",picForm.pid);
    dialogFormVisibleA.value = true
}

// 提交数据
const confirmA = async()=>{
    dialogFormVisibleA.value = true
    formRef.value.validate(async(valid)=>{
    if(valid){
        postGalleryApi(picForm.value).then(res=>{
        })
        dialogFormVisibleA.value = false
    }
  })
}

// 执行删除操作
const removePic = (row)=>{
    const {pid} = row
    delGalleryApi({pid})
}

onMounted(()=>{
    gallerystore.getgallery()
})
</script>

<style>

</style>