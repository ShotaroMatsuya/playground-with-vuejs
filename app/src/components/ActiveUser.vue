<template>
  <li>
    <h2>username: {{ this.name }}</h2>
    <h3>age: {{ this.age }}</h3>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
