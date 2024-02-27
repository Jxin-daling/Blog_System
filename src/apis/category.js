import httpServe from "@/http";

export const postCategoryApi = (params)=>{
    return httpServe({
        url:'/api/postcategory',
        method:"POST",
        params:params
    })
}

export const getCategoryApi = (params)=>{
    return httpServe({
        url:'/api/getcategory',
        params:params
    })
}

export const delCategoryApi = (params)=>{
    return httpServe({
        url:'/api/delcategory',
        method:"POST",
        params:params
    })
}

export const postCategoryPicApi = (pid,data)=>{
    return httpServe({
        url:`/api/postcategorypic/${pid}`,
        method:"POST",
        data:data
    })
}