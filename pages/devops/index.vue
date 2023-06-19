<template>
  <div >
    <v-row>
      <titleBar titleName="DevOps"/>
    </v-row>
    <v-row justify="center">
    <a href="https://aws.amazon.com/es/what-is-aws/" target="_blank">
      <img src="@/assets/svg/aws.svg" width="100px">
    </a>
    </v-row>
    <v-row justify="center">
      <p class="pa-4">
      +1 year of experience 
using AWS cloud for
proyects
      </p>
    </v-row>
  </div>
</template>

<script>
import titleBar from "~/components/composite/titleBar.vue";
export default {
  name: 'IndexPage',
  components:{
      titleBar
  }
}
</script>