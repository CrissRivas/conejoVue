<template>
  <v-row >
    <v-col>
      <titleBar titleName="Frontend"/>
      <selectionRow/>
    </v-col>
  </v-row>
</template>

<script>
import titleBar from "~/components/composite/titleBar.vue";
import selectionRow from "~/components/composite/selectionRow.vue";
export default {
  name: 'IndexPage',
  components:{
      titleBar,
      selectionRow
  }
}
</script>