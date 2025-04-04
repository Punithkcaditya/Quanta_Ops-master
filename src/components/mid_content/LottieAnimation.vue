<template>
    <LottieAnimation 
      :animationData="animationData" 
      :loop="true" 
      :autoplay="true"
    />
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import LottieAnimation from "vue3-lottie";
  import animationData from "@/assets/lottie.json"; // Import your Lottie file
  
  export default defineComponent({
    components: { LottieAnimation },
    data() {
      return {
        animationData
      };
    }
  });
  </script>
  