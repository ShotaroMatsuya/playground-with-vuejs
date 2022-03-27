<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button @click="activate('poor')" type="button">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button @click="activate('average')" type="button">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button @click="activate('great')" type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'], //v-model on custom components
  emits: ['update:modelValue'], // v-model on custom components
  // this approach does not affect new props
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  computed: {
    activeOption() {
      return this.modelValue;
    },
  },
  methods: {
    activate(option) {
      this.activeOption = option;
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}
.active button {
  color: #a00078;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
