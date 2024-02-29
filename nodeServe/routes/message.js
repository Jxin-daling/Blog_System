const express=require('express')
const router=express.Router()

// 获取游客评论信息
router.get('/getmessage',async(req,res)=>{
    let data1 = await res.execSql(`SELECT mvid, visitorname, content, DATE_FORMAT(create_time,'%Y-%m-%d %H:%i:%s') as create_time FROM msvisitorstate order by create_time DESC`)
    let data2 = await res.execSql(`SELECT mpid, admin, content, DATE_FORMAT(create_time,'%Y-%m-%d %H:%i:%s') as create_time, mvid FROM msreplystate`)
    let total = await res.execSql(`SELECT COUNT(*)as total FROM msvisitorstate`)
    res.json({
        status:200,
        msg1:data1.rows,
        msg2:data2.rows,
        total:total.rows[0].total
    })
})

// 添加一条访客留言记录
router.post('/postmessagevisitor',async(req,res)=>{
    const { visitorname, content } = req.query
    await res.execSql(`insert into msvisitorstate (visitorname, content) values ('${visitorname}','${content}')`)
    res.json({
        status:200,
        msg:'post ok'
    })
})

// 添加一条回复留言记录
router.post('/postmessagereply',async(req,res)=>{
    const { mvid, content } = req.query
    await res.execSql(`insert into msreplystate (mvid, content) values ('${mvid}','${content}')`)
    res.json({
        status:200,
        msg:'post ok'
    })
})

// 删除一条访客回复记录
router.post('/delmessage',async(req,res)=>{
    const { mvid } = req.query
    console.log(mvid);
    await res.execSql(`DELETE FROM msvisitorstate WHERE mvid = '${mvid}'`)
    res.send('ok 200')
})


// 删除一条回复记录
router.post('/delreply',async(req,res)=>{
    const { mpid } = req.query
    await res.execSql(`DELETE FROM msreplystate WHERE mpid = '${mpid}'`)
    res.send('ok 200')
})

module.exports=router