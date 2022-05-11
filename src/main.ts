import { createApp } from 'vue';
// 保证normalize.css 在最前面
import './assets/css/normalize.css';
import './assets/scss/global.css';

import App from './App.vue';

import { setupRouter } from '/@/router';
import { setupStore } from '/@/store';

async function bootstrap() {
  const app = createApp(App);

  // config store
  setupStore(app);
  // Configure routing
  setupRouter(app);

  app.mount('#app');
}

bootstrap();
