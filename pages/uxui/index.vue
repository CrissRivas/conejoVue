<template>
  <div>
    <v-row>
      <titleBar titleName="Ux / Ui"/>
    </v-row>
    <v-row class="my-8">
      <v-col cols="4">
      </v-col>
      <v-col>
        <p>
          I use Figma to design pages and components prototypes.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <carouselSlider :carousel-info="carouselInfo"/>
    </v-row>
  </div>
</template>

<script>
import titleBar from "~/components/composite/titleBar.vue";
import carouselSlider from "~/components/composite/carouselSlider.vue";
export default {
  name: 'IndexPage',
  components:{
      titleBar,
      carouselSlider
  },
  data() {
    return {
      model: 0,
      carouselInfo:[
        { 
          name:'conejo-cyberpunk',
          info:'pagina de portafolio',
          link:'https://vue.conejo-cyberpunk.xyz'
        },
        { 
          name:'Ejercicio #1',
          info:'Ejercicio para practica',
          link:'https://www.conejo-cyberpunk.xyz'
        },
        { 
          name:'cyberpunk',
          info:'portafolio',
          link:'https://conejo-cyberpunk.xyz'
        },
      ]
    }
  },
}
</script>

