<template>
    <el-card>
        <el-button type="primary" :icon="Plus" @click="addPic">添加图片</el-button>

        <el-table :data="galleryArr" style="width: 100%;margin:10px 0;" border empty-text="没有数据">
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="name" label="名称" width="200"></el-table-column>
            <el-table-column label="图片">
                <template #={row}>
                    <img :src="row.imgurl" alt="未有图片" width="100px" height="100px"> 
                </template>
            </el-table-column>
            <el-table-column prop="address" label="操作" width="180">
                <template #={row}>
                    <el-button type="primary" :icon="Edit" @click="updatePic(row)"></el-button>
                    <el-popconfirm :title="`确定删除${row.name}?`" @confirm="removePic(row.id)" @cancel="cancel">
                        <template #reference>
                            <el-button type="danger" :icon="Delete"></el-button>
                        </template>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>    

         <!-- 
            current-page:当前页码
            page-sizes：每页展示多少条数据
        -->
        <el-pagination
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"   
            :page-sizes="[3, 5, 7, 9]"
            :disabled="disabled"
            background 
            layout="prev, pager, next, jumper,   sizes, total"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </el-card>

    <!-- 对话框 -->
    <el-dialog v-model="dialogFormVisible" :title="picinfo.id?'修改图片':'添加图片'" width="500">
        <el-form style="width: 90%;">
            <el-form-item label="图片名称">
                <el-input placeholder="请输入图片名称" v-model="picinfo.imgname"></el-input>
            </el-form-item>
            <el-form-item label="图片" v-model="picinfo.imgurl">
                <img :src="picinfo.imgurl" alt="" width="100px" height="100px">
            </el-form-item>
        </el-form>

        <template #footer>
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="confirm">确定</el-button>
        </template>
    </el-dialog>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { Edit,Delete } from '@element-plus/icons-vue';
const dialogFormVisible = ref(false)
// 当前页码
const currentPage = ref(1)
// 一页展示数据数
const pageSize = ref(3)

// 数据存储
const galleryArr = ref([])
// 总条数
const total = ref()

// 模拟数据
const galleryinfo = {
    data:[
        {id:13,name:"fuzi",imgurl:'../../../public/fuzi.jpg'},
        {id:32,name:"nep",imgurl:'../../../public/nep.png'},
        {id:31,name:"nep",imgurl:'../../../public/nep2.png'},
    ],
    status:200,
    total:200,
    msg:"OK"
}

galleryArr.value = galleryinfo.data
total.value = galleryinfo.total

const handleCurrentChange = (a)=>{
    console.log("分页change",a);
}

const picinfo = reactive({
    id:'',
    imgname:'',
    imgurl:''
})

// 添加图片
const addPic = ()=>{
    picinfo.id = ''
    dialogFormVisible.value = true
}

// 修改图片
const updatePic = (row)=>{
    picinfo.id = row.id
    picinfo.imgname = row.name
    picinfo.imgurl = row.imgurl
    dialogFormVisible.value = true
}

const cancel = ()=>{
    dialogFormVisible.value = false
}

const confirm = ()=>{
    dialogFormVisible.value = false
}

// 执行删除图片
const removePic = (pid)=>{
    console.log(pid);
}
</script>

<style>

</style>