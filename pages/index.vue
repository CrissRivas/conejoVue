<template>
  <v-row>
    <v-col>
      <v-row justify="center" align="center" class="pa-4 my-4">
      <a href="https://wa.me/+3337786911" target="_blank">
        <img src="@/assets/svg/wsp.svg" height="50px" class="mx-2" />
      </a>
        <img src="@/assets/png/cris.png" class="mx-2" height="120px" />
        <v-tooltip bottom color="transparent">
          <template v-slot:activator="{ on, attrs }">
            <img src="@/assets/svg/mail.svg" height="50px" class="mx-2" @click="copiarCorreo" data-correo="cristopher.rivas.aguilar@gmail.com" v-bind="attrs" v-on="on"/>
          </template> 
          <p class="tooltip pa-2">cristopher.rivas.aguilar@gmail.com <br> (click to copy)</p>
        </v-tooltip>
        

        
      </v-row>
      <v-row justify="center">
        <span class="my-4 myName">Cristopher <br> Rivas</span>
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
  methods: {
    copiarCorreo(event) {
      const correo = event.target.dataset.correo;
      const input = document.createElement('input');
      input.value = correo;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
    }
  }
  
}
</script>
<style lang="scss" scoped>
.myName{
  font-size: 20px;
  text-align: center;
}
.tooltip{
  text-align:center;
  border: 3px solid #1F1F1F;
}
</style>

