<template>
    <button @click="addOne">Add 2</button>
</template>

<script>
export default {
    methods: {
        addOne(){
        // this.$store.commit('increment');
            this.$store.dispatch('increment');
        }
    }
}
</script>