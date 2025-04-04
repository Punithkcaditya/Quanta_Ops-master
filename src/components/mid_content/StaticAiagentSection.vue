<template>
    <section class="ai-network">
      <h2 class="title" data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1000">Transforming Enterprises</h2>
      <h1 class="subtitle" data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1000">AI Agent For Operations</h1>
  
      <div class="network-container mt-5 d-flex-center">
        <!-- Central Management Agent -->
        <OpsAgentSection />
      </div>
  
      <!-- <p class="footer-text">AI agents for operations by Quanta Ops</p> -->
    </section>
  </template>
  
  <script>
  // import AiagentOperations from "./AiagentOperations.vue";
  import OpsAgentSection from "./OpsAgentDiagram.vue"

  export default {
  name: "StaticAiagentSection",
  components:{
    OpsAgentSection
  }
  };
  </script>
  
  <style scoped>
  .ai-network{
    padding: 7em;
  }

  .agent.center img{
width: 51%;
  }


  .ai-network h1, .ai-network h2{
    color: #D7D7E4;
  }
  </style>
  