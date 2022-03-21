<template>
  <div>
    <active-user
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :age="user.age"
    ></active-user>

    <user-data @insert-user="insertUser"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: 'asd;lfkj',
          name: 'Shtaro Matsuy',
          age: 34958,
        },
      ],
    };
  },
  methods: {
    insertUser(data) {
      this.users.push(data);
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
