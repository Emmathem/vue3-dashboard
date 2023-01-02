import { createApp } from 'vue'
import './assets/styles/index.css'
import './style.css'
import App from './App.vue'
import router from './routes';
import store from './store/store';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');

if (window.Cypress) {
    window.__app__ = app;
}