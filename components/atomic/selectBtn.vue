<template>
  <div :class="active ? 'enabled' : 'disabled'" @click="emitKeyComponent">
    <img :src="require(`@/assets/svg/${img}-On.svg`)" v-if="active" >
    <img :src="require(`@/assets/svg/${img}-Off.svg`)"  v-else>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      keyComponent: 0
    }
  },
  props:{
    img:{
      type: String,
      required: true
    },
    ky:{
      type: Number,
      required: true
    },
    rd:{
      type: Number,
      required: true
    }
  },
  methods: {
    compareRead() {
      this.active = (this.ky === this.rd);
    },
    emitKeyComponent() {
      this.$emit('keyComponent', this.keyComponent);
    }
  },
  created() {
    this.keyComponent = this.ky;
    this.compareRead();
  },
  watch: {
    rd() {
      this.compareRead();
    }
  }
}
</script>

<style lang="scss" scoped>
.enabled {
  height: 50px;
  width: 50px;
  border: 3px solid #1F1F1F;
  background-color: #4D533C;
}

.disabled {
  height: 50px;
  width: 50px;
  border: 3px solid #4D533C;
}
</style>
