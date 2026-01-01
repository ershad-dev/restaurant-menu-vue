// src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "@/assets/main.css" // CSS اصلی

// ساخت اپ
const app = createApp(App)

// اضافه کردن Pinia و Router
app.use(createPinia())
app.use(router)

// اضافه کردن فونت لاله‌زار به <head>
const link = document.createElement('link')
link.href = 'https://cdn.fontcdn.ir/Font/Persian/Lalezar/Lalezar.css'
link.rel = 'stylesheet'
document.head.appendChild(link)

// استایل reset و پایه (بدون override رنگ پس‌زمینه)
const style = document.createElement('style')
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    direction: rtl;
    text-align: right;
  }
  body {
    font-family: 'Lalezar', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    min-height: 100vh;
    /* رنگ پس‌زمینه اصلی از CSS global main.css گرفته می‌شود */
  }
`
document.head.appendChild(style)

// mount اپلیکیشن
app.mount('#app')
