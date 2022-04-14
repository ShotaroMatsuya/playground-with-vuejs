<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import {ref,computed, watch} from 'vue';

export default {

  setup(){
    // const uName = ref('showtarwo');
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null); // ref prop
    const uAge = ref(18);

    const uName = computed(function(){
      return firstName.value + ' ' + lastName.value;
    });

    watch([uAge, uName],function(newValues, oldValues){
      console.log('Old age: '+ oldValues[0]);
      console.log('New age: '+ newValues[0]);
      console.log('Old name: '+ oldValues[1]);
      console.log('New name: '+ newValues[1]);
    })
    function setNewData(){
      uAge.value = 20;
    }
    function setLastName(){
      lastName.value = lastNameInput.value.value;
    }

    return {userName: uName, age: uAge, setAge: setNewData, firstName, lastName , lastNameInput,setLastName };
  },


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