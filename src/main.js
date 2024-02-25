import { createApp } from 'vue'
import App from './App.vue'
import './styles/common.scss'
const app = createApp(App)

// elementplus组件引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

// pinia的引入
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

// 路由引入
import router from '@/router/index'
app.use(router)

// 文本编辑器插件
import ElementTiptapPlugin from 'element-tiptap-vue3-fixed';
import 'element-tiptap-vue3-fixed/lib/style.css';
app.use(ElementTiptapPlugin);

app.mount('#app')