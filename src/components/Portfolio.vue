<template>
  <section id="portfolio">
    <v-container>
      <v-row>
        <v-col class="text-center" cols="12" md="12" lg="12" xl="12">
          <h2>Portfolio</h2>
        </v-col>
        <v-col v-for="project in portfolio.projects" :key="project.project_name" cols="12" sm="6" md="6" lg="6" xl="4">
          <v-card class="rounded-xl" :href="project.deploy_link" target="_blank" hover outlined height="100%">
            <v-img :src="require(`../assets/${project.preview_img}`)" height="250px"></v-img>
            <v-container>
              <v-card-title>{{ project.project_name }}</v-card-title>
              <v-card-text>{{ project.project_description }}</v-card-text>
              <v-divider class="mx-4"></v-divider>
              <!-- Technologies Used -->
              <v-card-title>Technologies Used:</v-card-title>
              <v-card-actions>
                <v-btn
                  v-for="tech in project.technologies"
                  :key="tech.name"
                  :href="tech.docs_link"
                  target="_blank"
                  :title="tech.name"
                  x-large
                  icon
                >
                  <v-icon large>{{ tech.icon }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-divider class="mx-4"></v-divider>
              <!-- Code Repository -->
              <v-card-title>Code Repository:</v-card-title>
              <v-card-actions>
                <v-btn x-large icon :href="project.repo_link" target="_blank">
                  <v-icon large>{{ mdiGithub }}</v-icon>
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss">
a {
  text-decoration: none;
  &:hover {
    color: #303030 !important;
  }
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import {
  mdiNuxt,
  mdiNodejs,
  mdiVuetify,
  mdiLanguageTypescript,
  mdiAws,
  mdiLambda,
  mdiGithub,
  mdiLanguageJavascript,
  mdiReact,
  mdiDatabase,
  mdiFlashCircle,
} from '@mdi/js';

@Component({})
export default class Portfolio extends Vue {
  portfolio: portfolio = {
    projects: [
      {
        project_name: 'Pomona Pipe Products',
        project_description:
          "Pomona Pipe Products, Inc. is a civil engineering firm specializing in bridges and environmental construction. The company services a wide range of private businesses, municipalities, and state Departments of Transportation. In my role as a full-stack developer, I have contributed to laying the groundwork for the company’s tech infrastructure. Pomona’s infrastructure consists of a Node API, AWS S3 Buckets, AWS CloudFront CDN, a Headless CMS, Algolia Search Engine, and a server-side rendering web application. In addition I have also helped with the company's SEO on Google and Bing as well as tweaked info on their Google My Business account.",
        preview_img: 'pomona_screenshot.png',
        deploy_link: 'https://www.pomonasupply.com/',
        repo_link: 'https://github.com/pomona-pipe/pomona-site-v2',
        technologies: [
          {
            name: 'Nuxt.js',
            icon: mdiNuxt,
            docs_link: 'https://nuxtjs.org/',
          },
          {
            name: 'Typescript',
            icon: mdiLanguageTypescript,
            docs_link: 'https://www.typescriptlang.org/',
          },
          {
            name: 'Javascript',
            icon: mdiLanguageJavascript,
            docs_link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          },
          {
            name: 'Node.js',
            icon: mdiNodejs,
            docs_link: 'https://nodejs.org/en/',
          },
          {
            name: 'Vuetify.js',
            icon: mdiVuetify,
            docs_link: 'https://vuetifyjs.com/en/',
          },
          {
            name: 'AWS',
            icon: mdiAws,
            docs_link: 'https://aws.amazon.com/',
          },
          {
            name: 'Lambda',
            icon: mdiLambda,
            docs_link: 'https://aws.amazon.com/lambda/',
          },
        ],
      },
      {
        project_name: 'Courtside Gamble',
        project_description:
          'In an Agile setting with one member (myself) and a 7 day sprint cycle. Courtside Gamble is an NBA betting app that streams real-time scores, plays, and payouts as the game plays out. It allows multiple clients to experience the same game at the same time, just as they would in real-life.',
        preview_img: 'courtside_gamble.png',
        deploy_link: 'https://admiring-neumann-0f0f2b.netlify.app/',
        repo_link: 'https://github.com/joyceben33/Sports-Betting-App',
        technologies: [
          {
            name: 'React.js',
            icon: mdiReact,
            docs_link: 'https://reactjs.org/',
          },
          {
            name: 'Javascript',
            icon: mdiLanguageJavascript,
            docs_link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          },
          {
            name: 'MongoDB',
            icon: mdiDatabase,
            docs_link: 'https://www.mongodb.com/',
          },
          {
            name: 'Node.js',
            icon: mdiNodejs,
            docs_link: 'https://nodejs.org/en/',
          },
          {
            name: 'Socket.io',
            icon: mdiFlashCircle,
            docs_link: 'https://socket.io/',
          },
        ],
      },
    ],
  };

  mdiGithub = mdiGithub;
}
</script>
