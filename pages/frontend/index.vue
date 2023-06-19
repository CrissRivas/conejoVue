<template>
  <v-row >
    <v-col>
      <titleBar titleName="Frontend"/>
      <selectionSlider :btns="btns" :slides="slides"/>
      <v-row justify="center" >
        <h3>
          Documentation
        </h3>
      </v-row>
      <v-row justify="center" class="ma-4" >  
      <a href="https://storybook.js.org" target="_blank">
        <img src="@/assets/svg/stry.svg" height="75px" class="mx-4" alt=""> 
      </a>
      <a href="https://github.com/CrissRivas" target="_blank">
        <img src="@/assets/svg/github.svg" height="75px" class="mx-4" alt="">
      </a>
      </v-row>
      <v-row justify="center" >
        <h3>
          Analytics
        </h3>
      </v-row>
      <v-row justify="center" class="ma-4">  
      <a href="https://marketingplatform.google.com/intl/es/about/analytics/" target="_blank">
        <img src="@/assets/svg/analytics.svg" height="75px" class="mx-4" alt="Analytics">
      </a>
      </v-row>  
    </v-col>
  </v-row>
</template>

<script>
import titleBar from "~/components/composite/titleBar.vue";
import selectionSlider from "~/components/composite/selectionSlider.vue";
export default {
  name: 'IndexPage',
  components:{
      titleBar,
      selectionSlider
  },
  data() {
    return {
      slides:[
        '+3 years of experience using Angular, with expertise in consuming APIs and CMS',
        '+1 year of experience using Vue,along with Vuetify and axios.',
        '+1 year of experience using React, along with Bootstrap.'],
      btns: ['ang', 'vue', 'rea'],
    }
  },
}
</script>