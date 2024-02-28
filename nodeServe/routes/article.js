const express=require('express')
const {formidable} = require('formidable');
const router=express.Router()
const path = require('path');

// 获取文章信息
router.get('/getarticle',async(req,res)=>{
    let data = await res.execSql(`SELECT aid, title, content, CONCAT('${res.domain}',bannerimgurl) as bannerimgurl, cid, category, DATE_FORMAT(create_time,'%Y-%m-%d %H:%i:%s') as create_time FROM articlestate order by create_time DESC`)
    let total = await res.execSql(`SELECT COUNT(*)as total FROM articlestate`)
    res.json({
        status:200,
        msg:data.rows,
        total:total.rows[0].total
    })
})

// 添加一条记录
router.post('/postarticle',async(req,res)=>{
    const { aid, title, content, cid, category } = req.query
    // console.log(req.query);
    if(aid){
        await res.execSql(`UPDATE articlestate SET title = '${title}', content = '${content}' WHERE aid = ${aid};`)
    }else{
        await res.execSql(`INSERT INTO articlestate (title, content, cid, category) values ('${title}','${content}','${cid}','${category}')`)
        await res.execSql(`UPDATE categorystate set aclcount = aclcount + 1 WHERE cid = ${cid}`)
    }
    res.json({
        status:200,
        msg:'post ok'
    })
})

// 删除一条记录
router.post('/delarticle',async(req,res)=>{
    const { aid,cid } = req.query
    await res.execSql(`DELETE FROM articlestate WHERE aid = '${aid}'`)
    await res.execSql(`UPDATE categorystate set aclcount = aclcount - 1 WHERE cid = ${cid}`)
    res.send('ok 200')
})


// formidable上传文件
router.post('/postarticlepic/:aid',(req,res)=>{
    const {aid} = req.params
    // console.log(aid);
    const form = formidable({
        multiples:true,
        uploadDir:path.resolve(__dirname, '..')+'/public/images',  //文件上传路径
        keepExtensions:true   //是否保留文件后缀名
    });

    // console.log(path.resolve(__dirname, '..')+'/public/images');
    form.parse(req, async(err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
        // console.log(files['files[]']);
        let n = 0  //实际存入数据库的记录数
        for(let i = 0; i < files['files[]'].length; i++){
            n++
            if(n<6){
                url = '/images/'+files['files[]'][i].newFilename
                data =await res.execSql(`UPDATE articlestate SET bannerimgurl = '${url}' where aid = '${aid}';`)
            }else{
                return
            }
        }
        // let url = '/images/'+files['files[]'][0].newFilename
        return res.send({
            status:200,
            message:"post ok"
        })
    });
})

module.exports=router