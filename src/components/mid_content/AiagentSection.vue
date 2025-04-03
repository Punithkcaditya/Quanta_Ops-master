<template>
    <section class="ai-network">
      <h2 class="title" data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1000">Transforming Enterprises</h2>
      <h1 class="subtitle">AI Agent For Operations</h1>
  
      <div class="network-container">
        <!-- Central Management Agent -->
        <div class="agent center">
          <p class="agent-title">Management Agent</p>
          <p class="agent-subtitle">Management Ops</p>
        </div>
  
        <!-- Outer Agents -->
        <div class="agent" v-for="(agent, index) in agents" :key="index" :class="agent.position">
          <p class="agent-title">{{ agent.name }}</p>
          <p class="agent-subtitle">{{ agent.role }}</p>
        </div>
      </div>
  
      <p class="footer-text">AI agents for operations by Quanta Ops</p>
    </section>
  </template>
  
  <script>
  export default {
  name: "AiagentSection",
    data() {
      return {
        agents: [
          { name: "INVENTORY", role: "AGENT", position: "top-center" },
          { name: "SUPPORT", role: "AGENT", position: "right-top" },
          { name: "CO-PILOT", role: "AGENT", position: "right-center" },
          { name: "FINANCE", role: "AGENT", position: "right-bottom" },
          { name: "SALES", role: "AGENT", position: "bottom-center" },
          { name: "MARKETING", role: "AGENT", position: "left-bottom" },
          { name: "BOOKING", role: "AGENT", position: "left-center" },
          { name: "FULFILLMENT", role: "AGENT", position: "left-top" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .ai-network {
    position: relative;
    text-align: center;
    padding: 4rem 2rem;
    background: url('@/assets/hexagon.png') repeat;
    background-size: 150px 150px; /* Adjust to control repetition size */
    color: #D7D7E4;
  }
  
  .title {
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
  }
  
  .subtitle {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  
  .network-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .agent {
    position: absolute;
    width: 120px;
    height: 140px;
    background: rgba(20, 20, 30, 0.9);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    color: #ccc;
    padding: 10px;
    border-top: 3px solid #5548FF;
  }
  
  .center {
    width: 140px;
    height: 140px;
    background: rgba(50, 50, 80, 0.9);
    border-radius: 50%;
    font-size: 16px;
  }
  
  .agent-title {
    font-weight: bold;
    color: #D7D7E4;
  }
  
  .agent-subtitle {
    font-size: 12px;
  }
  
  /* Positioning of the outer agents */
  .top-center { top: 0; left: 50%; transform: translateX(-50%); }
  .right-top { top: 20%; right: 10%; }
  .right-center { right: 0; top: 50%; transform: translateY(-50%); }
  .right-bottom { bottom: 20%; right: 10%; }
  .bottom-center { bottom: 0; left: 50%; transform: translateX(-50%); }
  .left-bottom { bottom: 20%; left: 10%; }
  .left-center { left: 0; top: 50%; transform: translateY(-50%); }
  .left-top { top: 20%; left: 10%; }
  
  .footer-text {
    margin-top: 30px;
    font-size: 14px;
    color: #888;
  }

  .ai-network-container {
    position: relative;
    width: 100%;
    max-width: 800px; /* Adjust as needed */
    margin: auto;
}

.center-agent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.agent-node {
    position: absolute;
    width: 120px; /* Adjust size */
    height: 140px;
    text-align: center;
}

.agent-node:nth-child(1) { top: 10%; left: 50%; transform: translateX(-50%); }
.agent-node:nth-child(2) { top: 25%; left: 80%; }
.agent-node:nth-child(3) { top: 50%; left: 90%; }
.agent-node:nth-child(4) { bottom: 10%; left: 80%; }
.agent-node:nth-child(5) { bottom: 0; left: 50%; transform: translateX(-50%); }
.agent-node:nth-child(6) { bottom: 10%; left: 20%; }
.agent-node:nth-child(7) { top: 50%; left: 5%; }
.agent-node:nth-child(8) { top: 25%; left: 20%; }

  </style>
  