<template>
    <el-card>
        <el-button type="primary" :icon="Plus" @click="addCategory">添加分类</el-button>

        <el-table :data="CategoryArr" style="width: 100%;margin:10px 0;" border empty-text="没有数据">
            <el-table-column type="index" label="序号" width="80"></el-table-column>
            <el-table-column prop="name" label="分类名称" width="200"></el-table-column>
            <el-table-column label="分类缩略图">
                <template #={row}>
                    <img :src="row.imgurl" alt="未有分类" width="100px" height="100px"> 
                </template>
            </el-table-column>
            <el-table-column prop="ariclesize" label="分类文章数" width="200"></el-table-column>
            <el-table-column prop="address" label="操作" width="180">
                <template #={row}>
                    <el-button type="primary" :icon="Edit" @click="updateCategory(row)"></el-button>
                    <el-popconfirm :title="`确定删除${row.name}?`" @confirm="removeCategory(row.id)" @cancel="cancel">
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
    <el-dialog v-model="dialogFormVisible" :title="Categoryinfo.id?'修改分类':'添加分类'" width="500">
        <el-form style="width: 90%;">
            <el-form-item label="分类名称">
                <el-input placeholder="请输入分类名称" v-model="Categoryinfo.imgname"></el-input>
            </el-form-item>
            <el-form-item label="分类" v-model="Categoryinfo.imgurl">
                <img :src="Categoryinfo.imgurl" alt="" width="100px" height="100px">
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
const CategoryArr = ref([])
// 总条数
const total = ref()

// 模拟数据
const categoryinfo = {
    data:[
        {id:13,name:"fuzi",imgurl:'../../../public/fuzi.jpg',ariclesize:22},
        {id:32,name:"nep",imgurl:'../../../public/nep.png',ariclesize:44},
        {id:31,name:"nep",imgurl:'../../../public/nep2.png',ariclesize:42},
    ],
    status:200,
    total:200,
    msg:"OK"
}

CategoryArr.value = categoryinfo.data
total.value = categoryinfo.total

const handleCurrentChange = (a)=>{
    console.log("分页change",a);
}

const Categoryinfo = reactive({
    id:'',
    imgname:'',
    imgurl:''
})

// 添加分类
const addCategory = ()=>{
    Categoryinfo.id = ''
    dialogFormVisible.value = true
}

// 修改分类
const updateCategory = (row)=>{
    Categoryinfo.id = row.id
    Categoryinfo.imgname = row.name
    Categoryinfo.imgurl = row.imgurl
    console.log(categoryinfo.imgurl);
    dialogFormVisible.value = true
}

const cancel = ()=>{
    dialogFormVisible.value = false
}

const confirm = ()=>{
    dialogFormVisible.value = false
}

// 执行删除分类
const removeCategory = (cid)=>{
    console.log(cid);
}
</script>

<style>

</style>