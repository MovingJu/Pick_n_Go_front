import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mypage: resolve(__dirname, 'pages/mypage.html'),
        signin: resolve(__dirname, 'pages/signin.html'),
        signup: resolve(__dirname, 'pages/signup.html')
      }
    }
  }
})
