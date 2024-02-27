import httpServe from "@/http";

export const postGalleryApi = (params)=>{
    return httpServe({
        url:'/api/postgallery',
        method:"POST",
        params:params
    })
}

export const getGalleryApi = (params)=>{
    return httpServe({
        url:'/api/getgallery',
        params:params
    })
}

export const delGalleryApi = (params)=>{
    return httpServe({
        url:'/api/delgallery',
        method:"POST",
        params:params
    })
}

export const postGalleryPicApi = (pid,data)=>{
    return httpServe({
        url:`/api/postgallerypic/${pid}`,
        method:"POST",
        data:data
    })
}