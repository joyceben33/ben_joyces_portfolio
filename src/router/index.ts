import Vue from 'vue';
import VueRouter from 'vue-router';
// Import Pages
import Home from '../pages/home.vue';

// TODO: Add tracking to page location https://stackoverflow.com/questions/68345229/how-to-change-the-hash-in-the-url-dynamically-when-i-scroll-over-components-in-v

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
        offset: { x: 0, y: -20 },
      };
    }

    return { x: 0, y: 0 };
  },
});

export default router;
