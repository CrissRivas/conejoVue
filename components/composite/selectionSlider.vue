<template>
    <v-row >
        <v-col>
            <selectionRow :btns="btns" @keyComponent="handleKeyComponent"/>
                <v-carousel v-model="active" :show-arrows="false" hide-delimiters class="my-4 pa-4" height="150px">
                    <v-carousel-item v-for="(slide, i) in slides" :key="i" >
                        <p>
                            {{slide}}
                        </p>
                    </v-carousel-item>
                </v-carousel>
        </v-col>
    </v-row>
</template>

<script>
import selectionRow from "../composite/selectionRow";
    export default {
        components:{
            selectionRow
        },
        data() {
            return {
                active: 0,
            }
        },
        methods: {
            handleKeyComponent(value) {
                this.active = value;
            }
        },
        props:{
            btns: {
                type: Array,
                required: true
            },
            slides: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>