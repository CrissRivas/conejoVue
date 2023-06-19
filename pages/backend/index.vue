<template>
  <v-row >
    <titleBar titleName="Backend"/>
    <selectionSlider :btns="btns" :slides="slides"/>
    <v-col>
      <v-row justify="center" >
        <h3>
          APIs for payments
        </h3>
      </v-row>
      <v-row justify="center" class="ma-4">  
      <a href="https://www.paypal.com/mx/home" target="_blank">
        <img src="@/assets/svg/pp.svg" height="50px" class="mx-4" alt="PayPal">
      </a>
      <a href="https://www.mercadopago.com.mx" target="_blank">
        <img src="@/assets/png/mp.png" height="50px" class="mx-4" alt="Mercado Pago">
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
        '+3 years of experience developing with Node.js, creating REST APIs, and integrating platforms.',
        '+3 years of experience developing with Express.js, using the bcrypt library to secure passwords.',
        '+3 years of experience using MongoDB, using different database structures.'],
      btns: ['nod', 'exp', 'mon'],
    }
  },
}
</script>