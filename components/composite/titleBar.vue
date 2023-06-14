<template>
   <v-row justify="center" align="center" class="my-1 pa-2 mx-1 titleBar">
        <v-col cols="2">
            <returnBtn/>
        </v-col>    
        <v-col align="center" class="cube">
            <h2 class="cube">{{titleName}}</h2>
        </v-col>
   </v-row>
</template>

<script>
import returnBtn from "../atomic/returnBtn";
    export default {
        components: {
            returnBtn
        },
        props:  {
            titleName:  {
                type: String,
			    required: true
            }
        }
        
    }
</script>

<style>
.titleBar{
    border: 3px solid #1F1F1F;
    color: #8B956D;
    background: #4D533C;
    box-shadow: 3px 3px #4D533C;
}
.cube{
        color: #8B956D;
        background: #4D533C;
        text-shadow: 2px 2px #1F1F1F;
    }
</style>