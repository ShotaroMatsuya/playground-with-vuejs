<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
import {reactive, toRefs,isReactive, isRef} from 'vue';

export default {

  setup(){

    const user = reactive({
      name: 'Showtarow',
      age: 18
    });

    setTimeout(()=>{
      user.name = 'Show!!!';
      user.age = 20;
    },2000);


    // reactive obj to refs one 
    const userRefs = toRefs(user);
    console.log(isReactive(user));
    console.log(isRef(userRefs.name));

    return { user: user, userName: userRefs.name, age: userRefs.age };
  }

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