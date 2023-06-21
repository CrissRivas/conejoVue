<template>
  <div>
    <v-row>
      <titleBar titleName="Ux / Ui"/>
    </v-row>
    <v-row class="my-8">
      <v-col cols="4" align="center">
        <v-row justify="center" >
          <a href="https://www.figma.com/file/F138FfPVBCRrmAkhumzxR9/Conejo-Cyberpunk?type=design&node-id=0%3A1&t=TBWH1uSJdfgEmSkd-1" target="_blank">
            <img src="@/assets/svg/fgma.svg" alt="">
          </a>
        </v-row>
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
          info:'Mi portafolio hecho con Nuxt.js',
          link:'https://vue.conejo-cyberpunk.xyz'
        },
        { 
          name:'Prueba API',
          info:'Ejercicio para practica',
          link:'https://reto.conejo-cyberpunk.xyz'
        },
        { 
          name:'Blockchain',
          info:'Pagina enfocada al blockchain',
          link:'https://fjr.vercel.app/'
        },
        { 
          name:'Old Cyberpunk',
          info:'Pagina anterior de portafolio, hecha con Angular',
          link:'https://www.conejo-cyberpunk.xyz'
        },
        { 
          name:'Atomchek',
          info:'Plataforma para crear y registrar checklist comerciales',
          link:'https://atom.conejo-cyberpunk.xyz'
        },
        { 
          name:'Socket.io prueba',
          info:'Ejercicio para probar funcionamiento de Socket.io',
          link:'https://socket.conejo-cyberpunk.xyz'
        },
      ]
    }
  },
}
</script>

