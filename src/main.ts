import Vue from 'vue';
import VueTyperPlugin from 'vue-typer';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueTyperPlugin);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
