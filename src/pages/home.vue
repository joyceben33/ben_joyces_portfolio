<template>
  <div>
    <Hero />
    <About />
    <Portfolio />
    <!-- <Contact /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Hero from '@/components/Hero.vue';
import About from '@/components/About.vue';
import Portfolio from '@/components/Portfolio.vue';
// import Contact from './components/Contact.vue';

@Component({
  components: {
    Hero,
    About,
    Portfolio,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
