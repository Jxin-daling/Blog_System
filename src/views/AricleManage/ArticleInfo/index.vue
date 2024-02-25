<template>
    <el-card>
        <el-table :data="aclArr" style="width: 100%;margin:10px 0;" border empty-text="没有数据">
            <el-table-column type="index" label="序号" width="60"></el-table-column>
            <el-table-column prop="name" label="文章标题" width="200"></el-table-column>
            <el-table-column label="文章配图">
                <template #={row}>
                    <img :src="row.imgurl" alt="未有文章" width="100px" height="100px"> 
                </template>
            </el-table-column>
            <el-table-column label="文章内容" prop="msg"></el-table-column>
            <el-table-column prop="address" label="操作" width="130">
                <template #={row}>
                    <el-button type="primary" :icon="Edit" @click="updateAcl(row)"></el-button>
                    <el-popconfirm :title="`确定删除${row.name}?`" @confirm="removeAcl(row.id)" @cancel="cancel">
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
    <el-dialog v-model="dialogFormVisible" :title="textinfo.id?'修改文章':'添加文章'" width="500">
        <el-form style="width: 90%;">
            <el-form-item label="文章名称">
                <el-input placeholder="请输入文章名称" v-model="textinfo.imgname"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
                <el-input placeholder="请输入文章内容" v-model="textinfo.text" type="textarea"></el-input>
            </el-form-item>
            <el-form-item label="文章配图" v-model="textinfo.imgurl">
                <img :src="textinfo.imgurl" alt="" width="100px" height="100px">
            </el-form-item>
        </el-form>

        <template #footer>
            <el-button @click="cancel">取消</el-button>
            <el-button type="primary" @click="confirm">确定</el-button>
        </template>
    </el-dialog>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { Edit,Delete } from '@element-plus/icons-vue';
const dialogFormVisible = ref(false)
// 当前页码
const currentPage = ref(1)
// 一页展示数据数
const pageSize = ref(3)

// 数据存储
const aclArr = ref([])
// 总条数
const total = ref()

// 模拟数据
const aclinfo = {
    data:[
        {id:13,name:"fuzi",imgurl:'../../../public/fuzi.jpg',msg:"sdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdq"},
        {id:32,name:"nep",imgurl:'../../../public/nep.png',msg:"sdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdq"},
        {id:31,name:"nep",imgurl:'../../../public/nep2.png',msg:"sdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdqsdadasddsad1wwdq"},
    ],
    status:200,
    total:200,
    msg:"OK"
}

aclArr.value = aclinfo.data
total.value = aclinfo.total

const handleCurrentChange = (a)=>{
    console.log("分页change",a);
}

const textinfo = reactive({
    id:'',
    imgname:'',
    imgurl:'',
    text:''
})

// 修改文章
const updateAcl = (row)=>{
    textinfo.id = row.id
    textinfo.imgname = row.name
    textinfo.imgurl = row.imgurl
    textinfo.text = row.msg
    dialogFormVisible.value = true
}

const cancel = ()=>{
    dialogFormVisible.value = false
}

const confirm = ()=>{
    dialogFormVisible.value = false
}

// 执行删除文章
const removeAcl = (pid)=>{
    console.log(pid);
}
</script>

<style>

</style>