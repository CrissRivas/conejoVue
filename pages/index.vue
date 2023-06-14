<template>
  <v-row>
    <v-col>
      <v-row justify="center" align="center" class="pa-4 my-4">
        <img src="@/assets/gif/w.gif" height="50px" class="mx-2" />
        <img src="@/assets/png/cris.png" class="mx-2" height="120px" />
        <img src="@/assets/png/c.png" height="50px" class="mx-2"/>

        <h3 class="my-4">Cristopher Rivas</h3>
      </v-row>
      <v-row>
        <v-col>
          <router-link to="/uxui">
            <navigateBtn titleName="UX / UI"/>
          </router-link>
          <router-link to="/frontend">
            <navigateBtn titleName="Frontend"/>
          </router-link>
          <router-link to="/backend">
            <navigateBtn titleName="Backend"/>
          </router-link>
          <router-link to="/devops">
            <navigateBtn titleName="DevOps"/>
          </router-link>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import navigateBtn from "~/components/composite/navigateBtn.vue";

export default {
  components:{
    navigateBtn
  },
  data() {
    return {
      crisImg: require('~/assets/png/cris.png')
    }
  },
  
}
</script>


