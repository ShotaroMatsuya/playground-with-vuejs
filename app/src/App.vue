<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
  </section>
</template>

<script>
import {ref, reactive} from 'vue';

export default {

  setup(){
    // const uName = ref('Showtarow');
    // const uAge = ref(18);
    // const user = ref({
    //   name: 'Showtarow',
    //   age: 18
    // });
    const user = reactive({
      name: 'Showtarow',
      age: 18
    });

    setTimeout(()=>{
      // uName.value = 'Show!!';
      // uAge.value = 20  ;
      // user.value.name = 'Show!!';
      // user.value.age = 20;
      user.name = 'Show!!!';
      user.age = 20;
    },2000);

    return { user }
  }
  // data() {
  //   return {
  //     userName: 'Showtarow',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>