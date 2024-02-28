import httpServe from "@/http";

export const getArticleDetailApi = (params)=>{
    return httpServe({
        url:'/api/getarticledetail',
        params:params
    })
}
