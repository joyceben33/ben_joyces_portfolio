import Vue from 'vue';
import VueTyperPlugin from 'vue-typer';
import router from '@/router';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import './assets/style/app.scss';

Vue.config.productionTip = false;

Vue.use(VueTyperPlugin);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
