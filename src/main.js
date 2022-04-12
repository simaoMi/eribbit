/*
 * @Author: DM
 * @Email: simaoMi_DM@163.com
 * @Description: xxx
 * @Date: 2022-04-12 15:59:24
 * @LastEditTime: 2022-04-12 16:36:56
 * @Reference: xxx
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
