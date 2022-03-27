<template>
  <section>
    <form @submit.prevent="submitUser">
      <input id="name" type="text" v-model="name" placeholder="Your name" />
      <input id="age" type="text" v-model="age" placeholder="Your age" />
      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['insert-user'],
  data() {
    return {
      name: '',
      age: '',
    };
  },
  methods: {
    submitUser() {
      const userInfo = {
        id: new Date().toISOString(),
        name: this.name,
        age: +this.age,
      };
      this.$emit('insert-user', userInfo);
      this.name = '';
      this.age = '';
    },
  },
};
</script>
