<template>
  <section>
    <h2>新規登録</h2>
    <form @submit.prevent="submitUser">
      <div>
        <label for="name">名前：</label>
        <input id="name" type="name" v-model="name" />
      </div>
      <div>
        <label for="age">年齢：</label>
        <input id="age" type="age" v-model="age" />
      </div>
      <button>登録</button>
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
        age: this.age,
      };
      this.$emit('insert-user', userInfo);
      this.name = '';
      this.age = '';
    },
  },
};
</script>
