const express=require('express')
const {formidable} = require('formidable');
const router=express.Router()
const path = require('path');

// 获取图片信息
router.get('/getcategory',async(req,res)=>{
    // const {size} = req.query
    // console.log(size);
    let data = await res.execSql(`SELECT cid, categoryname, CONCAT('${res.domain}',imgurl) as imgurl, aclcount, DATE_FORMAT(create_time,'%Y-%m-%d %H:%i:%s') as create_time FROM categorystate`)
    let total = await res.execSql(`SELECT COUNT(*)as total FROM categorystate`)
    res.json({
        status:200,
        msg:data.rows,
        total:total.rows[0].total
    })
})

router.get('/getcategorylist',async(req,res)=>{
    const {index} = req.query
    // console.log(req.query);
    let data = await res.execSql(`SELECT aid, title, content, CONCAT('${res.domain}',bannerimgurl) as bannerimgurl, cid, category, DATE_FORMAT(create_time,'%Y-%m-%d %H:%i:%s') as create_time FROM articlestate where category = '${index}' order by create_time DESC`)
    let total = await res.execSql(`SELECT COUNT(*)as total FROM articlestate WHERE category = '${index}'`)
    res.json({
        status:200,
        msg:data.rows,
        total:total.rows[0].total
    })
})

// 添加一条记录
router.post('/postcategory',async(req,res)=>{
    const { categoryname, cid } = req.query
    if(cid){
        await res.execSql(`INSERT INTO categorystate (cid, categoryname) values ('${cid}', '${categoryname}') ON DUPLICATE KEY UPDATE categoryname='${categoryname}';`)
    }else{
        await res.execSql(`INSERT INTO categorystate (categoryname) values ('${categoryname}')`)
    }
    res.json({
        status:200,
        msg:'post ok'
    })
})

// 删除一条记录
router.post('/delcategory',async(req,res)=>{
    const { cid } = req.query
    await res.execSql(`DELETE FROM categorystate WHERE cid = '${cid}'`)
    res.send('ok 200')
})


// formidable上传文件
router.post('/postcategorypic/:cid',(req,res)=>{
    const {cid} = req.params
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
                data =await res.execSql(`UPDATE categorystate SET imgurl = '${url}' where cid = '${cid}';`)
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