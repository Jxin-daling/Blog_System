import httpServe from "@/http";

export const getMessageApi = ()=>{
    return httpServe({
        url:'/api/getmessage'
    })
}

export const postMessageReplyApi = (params)=>{
    return httpServe({
        url:'/api/postmessagereply',
        method:"POST",
        params:params
    })
}

export const postMessageVisitorApi = (params)=>{
    return httpServe({
        url:'/api/postmessagevisitor',
        method:"POST",
        params:params
    })
}

export const delMessageApi = (params)=>{
    return httpServe({
        url:'/api/delmessage',
        method:"POST",
        params:params
    })
}

export const delReplyApi = (params)=>{
    return httpServe({
        url:'/api/delreply',
        method:"POST",
        params:params
    })
}