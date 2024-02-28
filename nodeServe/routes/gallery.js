const express=require('express')
const {formidable} = require('formidable');
const router=express.Router()
const path = require('path');

// 获取图片信息
router.get('/getgallery',async(req,res)=>{
    // const {size} = req.query
    // console.log(size);
    let data = await res.execSql(`SELECT pid, imgname, CONCAT('${res.domain}',imgurl) as imgurl, DATE_FORMAT(create_time,'%Y-%m-%d %H:%i:%s') as create_time FROM gallerystate`)
    // let sql = "SET @skip=1; SET @numrows=5; PREPARE STMT FROM 'SELECT pid, imgname, imgurl, create_time FROM ggg limit ?,?';EXECUTE STMT USING @skip, @numrows;"
    // let data = await res.execSql(sql)
    let total = await res.execSql(`SELECT COUNT(*)as total FROM gallerystate`)
    res.json({
        status:200,
        msg:data.rows,
        total:total.rows[0].total
    })
})

// 添加一条记录
router.post('/postgallery',async(req,res)=>{
    const { imgname, pid } = req.query
    if(pid){
        await res.execSql(`INSERT INTO gallerystate (pid, imgname) values ('${pid}', '${imgname}') ON DUPLICATE KEY UPDATE imgname='${imgname}';`)
    }else{
        await res.execSql(`INSERT INTO gallerystate (imgname) values ('${imgname}')`)
    }
    res.json({
        status:200,
        msg:'post ok'
    })
})

// 删除一条记录
router.post('/delgallery',async(req,res)=>{
    const { pid } = req.query
    await res.execSql(`DELETE FROM gallerystate WHERE pid = '${pid}'`)
    res.send('ok 200')
})


// formidable上传文件
router.post('/postgallerypic/:pid',(req,res)=>{
    const {pid} = req.params
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
                data =await res.execSql(`UPDATE gallerystate SET imgurl = '${url}' where pid = '${pid}';`)
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