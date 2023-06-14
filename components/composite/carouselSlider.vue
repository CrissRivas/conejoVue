<template>
    <v-carousel v-model="model" hide-delimiters height="200px" class="my-4"> 
       <template v-slot:prev="{ on, attrs }">
            <h1 v-bind="attrs" v-on="on" class="pa-2"><</h1>
        </template>
        <template v-slot:next="{ on, attrs }">
            <h1 v-bind="attrs" v-on="on" class="pa-2">></h1>
        </template>
        <v-carousel-item v-for="(info,i) in carouselInfo" :key="i" >
            <pageLink :name="info.name" :link="info.link"/>
             <v-row>
                <v-row justify="center" class="ma-4">
                    {{info.info}}
                </v-row>
            </v-row>
        </v-carousel-item>
    </v-carousel>

</template>

<script>
    import pageLink from "../atomic/pageLink.vue";
    export default {
        components:{
            pageLink
        },
        data() {
            return {
                model:1
            }
        },
        props:{
            carouselInfo: {
                type:Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>