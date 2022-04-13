<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <p v-if="isShow">{{myGoal}}</p> -->
  <!-- <p v-if="obj.isShow">{{obj.myGoal}}</p> -->
  <!-- <p v-if="reactiveObj.isShow">{{reactiveObj.myGoal}}</p> -->
  <p v-if="isShow">{{myGoal}}</p>
  <h3>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { reactive} from 'vue';
export default {

  data(){
    return{
      myGoal:'This is not my ideal.',
      isShow: true
    }
  },
  methods: {
    toggleGoal(){
      this.isShow = !this.isShow;
    }
  }
  
  // setup(){

  //   // const myGoal = ref('I will complete this course.');
  //   // const isShow = ref(true);
  //   // const obj = ref({
  //   //   myGoal : 'I will complete this course.',
  //   //   isShow: true
  //   // })
  //   const reactiveObj = reactive({
  //     myGoal : 'I will complete this course.',
  //     isShow: true    
  //   });
  //   function toggleGoal(){
  //     // isShow.value = !isShow.value;
  //     // obj.value.isShow = !obj.value.isShow;
  //     reactiveObj.isShow = !reactiveObj.isShow;
  //   }
  //   // return {
  //   //   myGoal, isShow, toggleGoal
  //   // }
  //   // return {obj, toggleGoal}
  //   return {reactiveObj, toggleGoal}
  // }
  
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>