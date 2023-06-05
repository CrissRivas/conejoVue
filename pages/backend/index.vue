<template>
  <v-row >
    <titleBar titleName="Backend"/>
  </v-row>
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