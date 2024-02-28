import { defineConfig } from 'vite'
import {join} from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'./',
  resolve:{
    alias:{
      '@':join(__dirname,'src')
    }
  },
  server:{
    host:'0.0.0.0'
  }
})

