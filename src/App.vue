<template>
  <v-app>
    <Header />
    <v-main>
      <Hero />
      <About />
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

@Component({
  components: {
    Header,
    Footer,
    Hero,
    About,
  },
})
export default class App extends Vue {}
</script>
