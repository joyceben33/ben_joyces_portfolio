<template>
  <section id="portfolio">
    <v-container fluid>
      <v-row>
        <v-col class="text-center" cols="12" md="12" lg="12" xl="12">
          <h2>Portfolio</h2>
        </v-col>
        <v-col v-for="project in projects" :key="project.name" cols="12" sm="12" md="6" lg="6" xl="4">
          <v-card class="rounded-xl" :href="project.deployLink" target="_blank" hover outlined height="100%">
            <v-img :src="project.image ? require(`../assets/${project.image}`) : ''" height="250px"></v-img>
            <v-container>
              <v-card-title>{{ project.name }}</v-card-title>
              <v-card-text>{{ project.description }}</v-card-text>
              <v-divider class="mx-4"></v-divider>
              <!-- Technologies Used -->
              <v-card-title>Technologies Used:</v-card-title>
              <v-card-actions class="flex-wrap">
                <v-btn
                  v-for="tech in project.technologies"
                  :key="tech.name"
                  :href="tech.docsLink"
                  target="_blank"
                  :title="tech.name"
                  large
                  icon
                >
                  <v-icon>{{ tech.icon }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-divider class="mx-4"></v-divider>
              <!-- Code Repository -->
              <v-card-title>Code Repository:</v-card-title>
              <v-card-actions>
                <v-btn icon :href="project.repoLink" target="_blank">
                  <v-icon>{{ siGithub.path }}</v-icon>
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
  siNuxtdotjs,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siVuetify,
  siAmazons3,
  siAwslambda,
  siServerless,
  siJest,
  siReact,
  siGithub,
  siMongodb,
  siSocketdotio,
  siPostgresql,
  siAmazonec2,
  siDocker,
  siVuedotjs,
  siQuasar,
  siRedux,
} from 'simple-icons';
/* @ts-ignore no-unused-vars */
import type { IProject } from '@/types/project';
/* Docs for Simple-icons https://simpleicons.org/ */
@Component({})
export default class Portfolio extends Vue {
  projects: IProject[] = [
    {
      name: 'Pacific Arc',
      description:
        'Pacific Arc, Inc. is an architectual design tool wholesaler. In my role here I helped build an internal web application that provided tools to help with different workflows within the business. Some of the workflows / features I developed were order fulfillment, order analytics, order logistics, & inventory management. In addition to being an engineer on the product team, I also held responsibilities in their dev-ops department. Some of the dev-ops contributions include AWS Cognito & IAM User Management, setting up a CI/CD pipeline, & migrating Docker Image from Linux to Linux 2.',
      image: 'pacific_arc_screenshot.png',
      deployLink: 'https://www.pacificarc.us/',
      repoLink: 'https://github.com/Pacific-Arc',
      technologies: [
        {
          name: 'Typescript',
          icon: siTypescript.path,
          docsLink: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Javascript',
          icon: siJavascript.path,
          docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'Vue.js',
          icon: siVuedotjs.path,
          docsLink: 'https://vuejs.org/',
        },
        {
          name: 'Quasar',
          icon: siQuasar.path,
          docsLink: 'https://quasar.dev/',
        },
        {
          name: 'Node.js',
          icon: siNodedotjs.path,
          docsLink: 'https://nodejs.org/en/',
        },
        {
          name: 'PostgreSQL',
          icon: siPostgresql.path,
          docsLink: 'https://www.postgresql.org/',
        },
        {
          name: 'AWS Lambda',
          icon: siAwslambda.path,
          docsLink: 'https://aws.amazon.com/lambda/',
        },
        {
          name: 'AWS S3',
          icon: siAmazons3.path,
          docsLink: 'https://aws.amazon.com/s3/',
        },
        {
          name: 'AWS EC2',
          icon: siAmazonec2.path,
          docsLink: 'https://aws.amazon.com/ec2/',
        },
        {
          name: 'Docker',
          icon: siDocker.path,
          docsLink: 'https://www.docker.com/',
        },
      ],
    },
    {
      name: 'Pomona Pipe Products',
      description: `Pomona Pipe Products, Inc. is a civil engineering firm specializing in bridges and environmental construction. The company services a wide range of private businesses, municipalities, and state Departments of Transportation. In my role as a full-stack developer, I helped engineer the company's public-facing web application for marketing their products and services. The stack consists of a Serverless Node API, AWS S3 Buckets, AWS CloudFront CDN, a Headless CMS (Prismic.io), Algolia Search Engine, and a server-side rendering web application. In addition I have also worked to improve the company's search engine rankings by optimizing meta data and forming a link-building strategy through social media.`,
      image: 'pomona_screenshot.png',
      deployLink: 'https://pomonapipeproducts.com/',
      repoLink: 'https://github.com/pomona-pipe/',
      technologies: [
        {
          name: 'Typescript',
          icon: siTypescript.path,
          docsLink: 'https://www.typescriptlang.org/',
        },
        {
          name: 'Javascript',
          icon: siJavascript.path,
          docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'Nuxt.js',
          icon: siNuxtdotjs.path,
          docsLink: 'https://nuxtjs.org/',
        },
        {
          name: 'Vuetify.js',
          icon: siVuetify.path,
          docsLink: 'https://vuetifyjs.com/en/',
        },
        {
          name: 'Jest',
          icon: siJest.path,
          docsLink: 'https://jestjs.io/',
        },
        {
          name: 'Node.js',
          icon: siNodedotjs.path,
          docsLink: 'https://nodejs.org/en/',
        },
        {
          name: 'Serverless',
          icon: siServerless.path,
          docsLink: 'https://www.serverless.com/cloud/docs',
        },
        {
          name: 'AWS Lambda',
          icon: siAwslambda.path,
          docsLink: 'https://aws.amazon.com/lambda/',
        },
        {
          name: 'AWS S3',
          icon: siAmazons3.path,
          docsLink: 'https://aws.amazon.com/s3/',
        },
        {
          name: 'AWS EC2',
          icon: siAmazonec2.path,
          docsLink: 'https://aws.amazon.com/ec2/',
        },
        {
          name: 'Docker',
          icon: siDocker.path,
          docsLink: 'https://www.docker.com/',
        },
      ],
    },
    {
      name: 'Courtside Gamble',
      description:
        'In an Agile setting with one member (myself) and a 7 day sprint cycle. Courtside Gamble is an NBA betting app that streams real-time scores, plays, and payouts as the game plays out. It allows multiple clients to experience the same game at the same time, just as they would in real-life.',
      image: 'courtside_gamble.png',
      deployLink: 'https://admiring-neumann-0f0f2b.netlify.app/',
      repoLink: 'https://github.com/joyceben33/Sports-Betting-App',
      technologies: [
        {
          name: 'Javascript',
          icon: siJavascript.path,
          docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'React.js',
          icon: siReact.path,
          docsLink: 'https://reactjs.org/',
        },
        {
          name: 'Redux.js',
          icon: siRedux.path,
          docsLink: 'https://redux.js.org/',
        },
        {
          name: 'Node.js',
          icon: siNodedotjs.path,
          docsLink: 'https://nodejs.org/en/',
        },
        {
          name: 'Socket.io',
          icon: siSocketdotio.path,
          docsLink: 'https://socket.io/',
        },
        {
          name: 'MongoDB',
          icon: siMongodb.path,
          docsLink: 'https://www.mongodb.com/',
        },
      ],
    },
    {
      name: 'Homebase',
      description:
        'An Agile team setting with a group of 9 members and a 4 ½ day sprint cycle, our team was able to provide an MVP version of the application to the client. This MERN Full Stack application provided a fully functional project management software.',
      image: 'Homebase_group_project.png',
      deployLink: 'https://youtube.com/watch?v=2Zg79auMMbo&feature=share',
      repoLink: 'https://github.com/rachel-fischoff/cohort-8-project',
      technologies: [
        {
          name: 'Javascript',
          icon: siJavascript.path,
          docsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'React.js',
          icon: siReact.path,
          docsLink: 'https://reactjs.org/',
        },
        {
          name: 'Redux.js',
          icon: siRedux.path,
          docsLink: 'https://redux.js.org/',
        },
        {
          name: 'Node.js',
          icon: siNodedotjs.path,
          docsLink: 'https://nodejs.org/en/',
        },
        {
          name: 'MongoDB',
          icon: siMongodb.path,
          docsLink: 'https://www.mongodb.com/',
        },
      ],
    },
  ];

  siGithub = siGithub;
}
</script>
