<template>
<a :href="link" target="_blank">
    <v-row justify="center" align="center">
        <v-col cols="8">
         <v-card class="pageLink" tile>
            <div class="pageLink__bar px-1">
                <span class="cube">ooo</span>
            </div>
            <div class="pa-2 pageLink__content">
                <span>{{name}}</span>
            </div>
                
        </v-card>
        </v-col>
    </v-row>  
</a>
</template>

<script>
    export default {
        props:{
            name:{
                type: String,
                required: true
            },
            link:{
                type: String,
                required: true
            }  
        }
    }
</script>

<style lang="scss" scoped>
.pageLink{
    border: 3px solid #1F1F1F;
    box-shadow: 3px 3px #4D533C;
    &__bar{
        height:20px;
        border-bottom: 3px solid #1F1F1F;
        background: #4D533C;
    }
    &__content{
        height:100px;
        display:grid;
        place-items:center;
        font-size: 0.9rem;
    }
    }
</style>