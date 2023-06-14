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
  data() {
    return {
      active: 0
    };
  },
  methods: {
    handleKeyComponent(value) {
      this.active = value;
      this.$emit('keyComponent', value);
    }
  },
  props:{
    btns:{
        type: Array,
        required: true
    } 
  }
};
</script>


<style lang="scss" scoped>

</style>