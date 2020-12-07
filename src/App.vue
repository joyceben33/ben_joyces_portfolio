<template>
  <v-app>
    <Header />
    <v-main>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="css" scoped>
.no-scroll {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  overflow-x: hidden;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';

@Component({
  components: {
    Header,
    Footer,
    Hero,
    About,
    Portfolio,
    Contact,
  },
})
export default class App extends Vue {}
</script>
