<template>
  <v-app>
    <Header />
    <v-main>
      <Hero />
      <About />
      <Portfolio />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Portfolio from './components/Portfolio.vue';

@Component({
  components: {
    Header,
    Footer,
    Hero,
    About,
    Portfolio,
  },
})
export default class App extends Vue {}
</script>
