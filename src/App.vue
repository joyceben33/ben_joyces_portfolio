<template>
  <v-app class="no-scroll">
    <Header />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<style lang="css" scoped>
.no-scroll {
  overflow-x: hidden;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>
