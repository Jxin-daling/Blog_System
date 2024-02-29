const express=require('express')
const router=express.Router()

// 获取文章详情信息
router.get('/getarticledetail',async(req,res)=>{
    const { aid } = req.query
    let data = await res.execSql(`SELECT aid, title, content, CONCAT('${res.domain}',bannerimgurl) as bannerimgurl, category, DATE_FORMAT(create_time,'%Y-%m-%d %H:%i:%s') as create_time FROM articlestate where aid = ${aid}`)
    res.json({
        status:200,
        msg:data.rows
    })
})

module.exports=router