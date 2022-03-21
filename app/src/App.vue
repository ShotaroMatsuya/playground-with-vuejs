<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <active-user
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :age="user.age"
      ></active-user>
    </ul>
    <user-data @insert-user="insertUser"></user-data>
  </section>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    insertUser(data) {
      this.users.push(data);
    },
  },
};
</script>
