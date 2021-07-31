import { createApp } from 'vue'

import router from './router'

import { createHead } from '@egoist/vue-head'

import App from './App.vue'

const app = createApp(App);

app.use(router);
app.use(createHead());

app.mount('#app');
