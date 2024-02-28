const express = require('express')
const mysql=require('mysql2')
const app=express()
var cors = require('cors')

//设置允许跨域访问该服务.
app.all('*',function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

//静态资源管理
app.use(express.static(__dirname+'/public'))

app.use(cors())

const pool=mysql.createPool({host:'127.0.0.1',user:'root',password:'root',database:'blogsystem_database'})
// 处理各种content-type类型的请求体数据（先处理urlencoded和json）
app.use(express.urlencoded())
app.use(express.json())

async function execSql(sql){
    // 获取连接池的对象
    const promisePool=pool.promise();
    const [rows,fields]=await promisePool.query(sql)
    return {rows,fields} 
}

app.use((req,res,next)=>{
    res.execSql=execSql
    res.domain="http://127.0.0.1:3000"
    next()
})

app.get('/getpic',async(req,res)=>{
    console.log(req.params);
    let data =await res.execSql(`select pid,concat('${res.domain}',imgurl) as imgurl from picinfo`)
    return res.send({
        status:0,
        message:data.rows
    })
})

const gallery = require('./routes/gallery')
const category = require('./routes/category')
const article = require('./routes/article')
const message = require('./routes/message')
const detail = require('./routes/detail')


app.use('/api',gallery)
app.use('/api',category)
app.use('/api',article)
app.use('/api',message)
app.use('/api',detail)

// 导入接口文件
app.listen(3000,()=>{
    console.log('服务器已开启，请访问 http://127.0.0.1:3000')
})

