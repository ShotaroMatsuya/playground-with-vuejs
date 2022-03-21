<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>
      <friend-contact
        name="Manuel Lorenz"
        phone-number="012345 67890"
        email-address="manuel@localhost.com"
        is-favorite="1"
      ></friend-contact>
      <friend-contact
        name="Julie Jones"
        phone-number="0987 654321"
        email-address="julie@localhost.com"
        is-favorite="0"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue';
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '0123 45678 90',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0987 654432 21',
          email: 'julie@localhost.com',
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>
