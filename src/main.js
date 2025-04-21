import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue'
import './styles/main.scss'
import 'animate.css'
import '../src/static/fontawesome-free-6.7.2-web/css/all.min.css'

const app = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')
