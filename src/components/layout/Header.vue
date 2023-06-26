<template>
  <v-app-bar class="pt-0" absolute flat color="transparent" height="85" dark>
    <div>
      <v-app-bar-nav-icon default="mdiMenu" @click.stop="toggleMobileDrawer()"></v-app-bar-nav-icon>
      <v-overlay @click.native="toggleMobileDrawer()" :value="mobileDrawer"></v-overlay>
      <v-navigation-drawer light v-model="mobileDrawer" width="300" app fixed hide-overlay temporary>
        <v-list>
          <v-list-item @click="scrollTo('about-me')">
            <v-list-item-icon>
              <v-icon>{{ 'mdi-account' }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>About Me</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- TODO: https://v2.vuetifyjs.com/en/components/lists/#sub-group -->
          <v-list-group prepend-icon="mdi-folder" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Projects</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="projectLink in projectLinks"
              :key="projectLink.name"
              @click="scrollTo(projectLink.scrollHash)"
            >
              <v-list-item-content>
                <v-list-item-title>{{ projectLink.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item @click="scrollTo('social-media')">
            <v-list-item-icon>
              <v-icon>{{ 'mdi-account-group' }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Social</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <v-spacer></v-spacer>

    <div>
      <h1 id="profile-name" class="mb-0">Ben Joyce</h1>
    </div>

    <v-spacer></v-spacer>
    <div>
      <v-img
        class="rounded-circle"
        contain
        :src="require('../../assets/profile_pic_square.jpeg')"
        transition="scale-transition"
        width="50px"
      />
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { mdiMenu } from '@mdi/js';

type ProjectLink = {
  name: string;
  scrollHash: string;
};

@Component({
  components: {},
})
export default class Header extends Vue {
  mdiMenu = mdiMenu;

  mobileDrawer: boolean | null = null;

  projectLinks: ProjectLink[] = [
    { name: 'LASSO', scrollHash: 'lasso' },
    { name: 'Pacific Arc', scrollHash: 'pacific-arc' },
    { name: 'Pomona Pipe Products', scrollHash: 'pomona-pipe-products' },
    { name: 'Courtside Gamble', scrollHash: 'courtside-gamble' },
  ];

  // Check if element is in the visible viewport
  isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  handleScroll = () => {
    const componentIds = [
      'hero',
      'about-me',
      'lasso',
      'pacific-arc',
      'pomona-pipe-products',
      'courtside-gamble',
      'social-media',
    ];

    componentIds.forEach((componentId) => {
      const element = document.getElementById(componentId);
      const currentRouteHash = this.$route.hash;

      if (element && this.isInViewport(element) && currentRouteHash !== `#${componentId}`) {
        const route = { hash: componentId === 'hero' ? '' : componentId };
        this.$router.replace(route);
      }
    });
  };

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }

  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  scrollTo(id: string) {
    window.removeEventListener('scroll', this.handleScroll);
    this.toggleMobileDrawer();
    this.$router.push({ hash: id }).catch(() => {});
    setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll);
    }, 2000);
  }

  toggleMobileDrawer() {
    this.mobileDrawer = !this.mobileDrawer;
    const bodyTag = document.getElementsByTagName('body')[0];
    if (this.mobileDrawer) {
      bodyTag.style.overflow = 'hidden';
      bodyTag.style.height = '100vh';
    } else {
      bodyTag.style.removeProperty('overflow');
      bodyTag.style.removeProperty('height');
    }
  }
}
</script>

<style lang="scss">
//MY Name
#profile-name {
  font-family: 'Mr De Haviland', 'Poppins', sans-serif;
  font-size: 3rem;
  line-height: 1.25;
}

.v-app-bar {
  padding-top: 0.5rem;
  a,
  button {
    opacity: 0.7;
    will-change: opacity;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 1;
      color: #ffffff !important;
    }
  }
}

.v-overlay {
  height: 100vh;
}

.nav-menu-item {
  font-size: 20px;
  margin: 0px 4px 0px 0px;
}
</style>
