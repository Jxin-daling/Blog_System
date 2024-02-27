import httpServe from "@/http";

export const postArticleApi = (params)=>{
    return httpServe({
        url:'/api/postarticle',
        method:"POST",
        params:params
    })
}

export const getArticleApi = ()=>{
    return httpServe({
        url:'/api/getarticle',
    })
}

export const delArticleApi = (params)=>{
    return httpServe({
        url:'/api/delarticle',
        method:"POST",
        params:params
    })
}

export const postArticlePicApi = (aid,data)=>{
    return httpServe({
        url:`/api/postarticlepic/${aid}`,
        method:"POST",
        data:data
    })
}