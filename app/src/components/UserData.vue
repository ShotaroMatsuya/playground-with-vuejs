<template>
  <h2>{{ userName}}</h2>
  <h3>{{ age }}</h3>
</template>

<script>
import {computed, inject} from 'vue';

export default {
  props:['userName','firstName','lastName'],
  setup(props,context){
    const uName = computed(function(){
      return props.firstName + ' ' +  props.lastName;
    });

    const age = inject('userAge');

    console.log(context);

    // context.emit('save-data', 1); // this.$emit('save-data', 1);

    return { userName : uName, age};
  }
  // computed: {
  //   userName(){
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
}
</script>
