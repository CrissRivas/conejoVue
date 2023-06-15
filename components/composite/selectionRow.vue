<template>
  <v-row justify="center">
    <div v-for="(btn, i) in btns" :key="i">
      <selectBtn class="mx-2" :img="btn" :ky="i" :rd="active" @keyComponent="handleKeyComponent" />
    </div>
  </v-row>
</template>

<script>
import selectBtn from "../atomic/selectBtn";

export default {
    components: {
        selectBtn
    },
    props:{
        btns:{
            type: Array,
            required: false 
        }
    },
    data() {
        return {
        active: 0
        }
    },
    methods: {
        handleKeyComponent(value) {
        this.active = value;
        this.$emit('keyComponent', value);
        }
    }
};
</script>


<style lang="scss" scoped>

</style>