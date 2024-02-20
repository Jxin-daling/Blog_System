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

// pinia持久化插件引入
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
pinia.use(piniaPluginPersistedstate)

app.mount('#app')