<template>
    <div>
        <selectionRow :btns="btns" @keyComponent="handleKeyComponent"/>
    </div>
</template>

<script>
import selectionRow from "../composite/selectionRow";
    export default {
        data() {
            return {
                btns: ['ang', 'rea', 'vue'],
                active: 0
            }
        },
        methods: {
            handleKeyComponent(value) {
                this.active = value;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>