<template>
  <section class="quanta_section">
    <div class="container">
      <h2 class="quanta_h2" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="2500">AI Driven Systems Approach</h2>
      <h3 class="quanta_h3" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="2500">Organize the Quanta Way</h3>
    <div class="quanta-wrapper">
      <div class="row g-4">
       <div class="col-md-7 m-h">
       <div class="quanta-card d-flex-end">
        <div class="break_into_quanta" style="width: 48%;text-align: end"  data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="2500">
          <h3>1. Break Into Quanta</h3>
          <p>Discover hidden patterns and opportunities as your complex challenges decomposed into their fundamental elements.</p>
        </div>
        </div>
       </div>
       <div class="col-md-5 m-h">
       <div class="quanta-card d-flex-end" style="align-items: flex-end;">
        <div class="optimize" style="width: 70%;text-align: end"  data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="2500">
        <h3>2. Optimize</h3>
        <p>Achieve unprecedented efficiency as each component is harmonized and perfected at the most granular quantum level.</p>
       </div>
       </div>
       </div>
       </div>
      <div class="row mt-3">
       <div class="col-md-5 m-h">
        <div class="quanta-card d-flex-end"> 
        <div class="break_into_quanta" style="width: 50%;text-align: end"  data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="2500">
        <h3 class="mt-3">3.Reconstruct</h3>
        <p>Gain a superior integrated system as your optimized elements coalesce into a cohesive whole that preserves all enhancements.</p>
       </div>
       </div>
       </div>
       <div class="col-md-7 m-h">
       <div class="quanta-card d-flex-end deploy_intelligence" style="align-items: flex-end;">
        <div class="optimize" style="width: 70%;text-align: end"  data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="2500">
        <h3>4. Deploy Intelligence</h3>
        <p>Experience autonomous evolution as your system activates with advanced cognitive capabilities that continuously learn and adapt.</p>
       </div>
       </div>
       </div>
      </div>
      </div>
    </div>
  </section>
  </template>
  
  <script>
  export default {
  name: "QuantaApproach",
    data() {

    }
  };
  </script>
  
  <style scoped>
  @keyframes moveBackground {
    0% {
      background-size: 50%;
  }
  50% {
      background-size: 60%;
  }
  100% {
      background-size: 50%;
  }
}
  .quanta-wrapper {
    background: url('@/assets/logomark.png') no-repeat center center;
    background-size: contain;
    padding: 60px 0px;
    animation: moveBackground 5s ease-in-out infinite;
   /* display: flex;
    justify-content: center;
    align-items: center;
    */
  }
  
  /*.quanta-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    gap: 30px;
    max-width: 900px;
    width: 100%;
    z-index: 1;
  }
  */

  .quanta-card {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 20px;
    color: #D7D7E4;
    backdrop-filter: blur(4px);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    min-height: 230px;
  }
  
  .quanta-card h3 {
    /* font-size: 1.25rem; */
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .quanta-card p {
     font-size: 0.95rem; 
    line-height: 1.5;
  }

 .quanta_h2{
  text-align: justify;
  font-size: 48px;
  line-height: 32px;
  color: #D7D7E4;
 }

 .quanta_h3{
  text-align: justify;
  font-size: 24px;
  line-height: 24px;
  color: #D7D7E4;
 }
 .quanta-card{
  overflow: hidden;
 }
  </style>
  