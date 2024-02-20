import axios from "axios"

const httpServe = axios.create({
    baseURL:"http://127.0.0.1:3000",
    timeout:500
})

// axios请求拦截器
httpServe.interceptors.request.use(config => {
    return config
  }, e => Promise.reject(e))
  
// axios响应式拦截器
httpServe.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default httpServe