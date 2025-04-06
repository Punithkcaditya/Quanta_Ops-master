<template>
    <div class="ecosystem-container">
      <div class="grid"></div>
  
      <!-- Hexagon Grid -->
      <div class="hexagon-grid">
        <div
          v-for="(hex, index) in hexagons"
          :key="index"
          class="hexagon"
          :style="{
            left: hex.left + 'px',
            top: hex.top + 'px',
            animationDuration: hex.animationDuration + 's',
            animationDelay: hex.animationDelay + 's'
          }"
        ></div>
      </div>
  
      <!-- Core Component -->
      <div ref="core" class="core">
        <div class="core-inner">
          <div class="core-pulse"></div>
        </div>
        <div class="core-text">DATA CENTER</div>
        <div class="management-text">Management Ops</div>
      </div>
  
      <!-- Ops Sections -->
      <div
        v-for="(ops) in opsSections"
        :key="ops.id"
        class="ops-section"
        :class="ops.class"
        :data-id="ops.id"
      >
        {{ ops.label }}
      </div>
  
      <!-- Agents -->
      <div
        v-for="(agent, index) in agents"
        :key="agent.id"
        class="agent"
        :class="agent.class"
        :data-id="agent.id"
        :style="{ '--i': index }"
        @mouseenter="() => onAgentHover(agent.id, index)"
        @mouseleave="() => onAgentLeave(agent.id, index)"
      >
        <div class="agent-card">
          <div class="agent-header"></div>
          <div class="agent-icon">
            <div class="agent-face">
              <div class="agent-eye agent-eye-left"></div>
              <div class="agent-eye agent-eye-right"></div>
              <div class="agent-mouth"></div>
            </div>
          </div>
          <div class="agent-label">{{ agent.label }}</div>
          <div class="agent-type">AGENT</div>
        </div>
      </div>
  
      <!-- Lines and Glows -->
      <div
        v-for="(_, index) in agents"
        :key="'line-' + index"
        :id="'line' + (index + 1)"
        class="connection-line"
      ></div>
      <div
        v-for="(_, index) in agents"
        :key="'glow-' + index"
        :id="'glow' + (index + 1)"
        class="glow-point"
      ></div>
  
      <!-- Branding -->
      <div class="branding">quanta ops</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const hexCount = 50;
  const hexagons = ref([]);
  const core = ref(null);
  
  const agents = [
    { id: 'inventory', label: 'INVENTORY', class: 'inventory-agent' },
    { id: 'support', label: 'SUPPORT', class: 'support-agent' },
    { id: 'alignment', label: 'CO-PILOT', class: 'co-pilot' },
    { id: 'finance', label: 'FINANCE', class: 'finance-agent' },
    { id: 'sales', label: 'SALES', class: 'sales-agent' },
    { id: 'marketing', label: 'MARKETING', class: 'marketing-agent' },
    { id: 'booking', label: 'BOOKING', class: 'booking-agent' },
    { id: 'fulfillment', label: 'FULFILLMENT', class: 'fulfillment-agent' }
  ];
  
  const opsSections = [
    { id: 'inventory', label: 'Inventory Ops', class: 'inventory-ops' },
    { id: 'support', label: 'Support Ops', class: 'support-ops' },
    { id: 'alignment', label: 'Alignment Ops', class: 'alignment-ops' },
    { id: 'finance', label: 'Finance Ops', class: 'finance-ops' },
    { id: 'sales', label: 'Sales Ops', class: 'sales-ops' },
    { id: 'marketing', label: 'Marketing Ops', class: 'marketing-ops' },
    { id: 'booking', label: 'Booking Ops', class: 'booking-ops' },
    { id: 'fulfillment', label: 'Fulfillment Ops', class: 'fulfillment-ops' }
  ];
  
  const generateHexGrid = () => {
  const maxLeft = window.innerWidth <= 768 ? 400 : 700; // Set max left to 400px for mobile (<=768px)

  hexagons.value = Array.from({ length: hexCount }, () => ({
    left: Math.random() * maxLeft, // Ensure left doesn't exceed maxLeft
    top: Math.random() * 300,
    animationDuration: 5 + Math.random() * 5,
    animationDelay: Math.random() * 5
  }));
};

  
  const onAgentHover = (id, index) => {
    const line = document.getElementById(`line${index + 1}`);
    const glow = document.getElementById(`glow${index + 1}`);
    const agentEl = document.querySelector(`.agent[data-id='${id}']`);
    const coreEl = core.value;
  
    if (!line || !glow || !agentEl || !coreEl) return;
  
    const agentRect = agentEl.getBoundingClientRect();
    const coreRect = coreEl.getBoundingClientRect();
  
    const agentCenterX = agentRect.left + agentRect.width / 2;
    const agentCenterY = agentRect.top + agentRect.height / 2;
    const coreCenterX = coreRect.left + coreRect.width / 2;
    const coreCenterY = coreRect.top + coreRect.height / 2;
  
    const dx = agentCenterX - coreCenterX;
    const dy = agentCenterY - coreCenterY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  
    line.style.width = `${distance}px`;
    line.style.transform = `rotate(${angle}deg)`;
    line.style.top = `${coreCenterY - document.body.getBoundingClientRect().top}px`;
    line.style.left = `${coreCenterX - document.body.getBoundingClientRect().left}px`;
    line.style.opacity = '1';
  
    glow.style.top = `${agentCenterY - document.body.getBoundingClientRect().top - 2}px`;
    glow.style.left = `${agentCenterX - document.body.getBoundingClientRect().left - 2}px`;
    glow.style.opacity = '1';
  
    const opsEl = document.querySelector(`.ops-section[data-id='${id}']`);
    if (opsEl) opsEl.classList.add('active');
  };
  
  const onAgentLeave = (id, index) => {
    const line = document.getElementById(`line${index + 1}`);
    const glow = document.getElementById(`glow${index + 1}`);
    const opsEl = document.querySelector(`.ops-section[data-id='${id}']`);
  
    if (line) line.style.opacity = '0';
    if (glow) glow.style.opacity = '0';
    if (opsEl) opsEl.classList.remove('active');
  };
  
  onMounted(() => {
    generateHexGrid();
  });
  
  onBeforeUnmount(() => {
    // Add any cleanup if needed later
  });
  </script>

<style scoped>
.ecosystem-container {
      position: relative;
      width: 800px;
      height: 600px;
      overflow: hidden;
    }
    
    .grid {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(rgba(123, 97, 255, 0.1) 1px, transparent 1px),
        radial-gradient(rgba(123, 97, 255, 0.1) 1px, transparent 1px);
      background-size: 30px 30px;
      background-position: 0 0, 15px 15px;
      opacity: 0.3;
    }
    
    .hexagon-grid {
      position: absolute;
      width: 700px;
      height: 400px;
      top: 100px;
      left: 50px;
    }
    
    .hexagon {
      position: absolute;
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transform: rotate(30deg);
      transition: all 0.3s ease;
      animation: hexPulse 3s infinite; /* Add this line */

    }
    
    .hexagon:before,
    .hexagon:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .hexagon:before {
      transform: rotate(60deg);
    }
    
    .hexagon:after {
      transform: rotate(-60deg);
    }
    
    .hexagon:hover {
      background-color: rgba(123, 97, 255, 0.1);
      border-color: rgba(123, 97, 255, 0.4);
      box-shadow: 0 0 20px rgba(123, 97, 255, 0.3);
      z-index: 10;
    }
    
    .hexagon:hover:before,
    .hexagon:hover:after {
      background-color: rgba(123, 97, 255, 0.1);
      border-color: rgba(123, 97, 255, 0.4);
    }
    
    .core {
      position: absolute;
      width: 100px;
      height: 100px;
      top: 250px;
      left: 350px;
      border-radius: 50%;
      background: rgba(20, 20, 40, 0.7);
      border: 2px solid rgba(123, 97, 255, 0.6);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 5;
      box-shadow: 0 0 30px rgba(123, 97, 255, 0.3);
    }
    
    .core-inner {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(123, 97, 255, 0.2) 0%, rgba(30, 144, 255, 0.2) 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }
    
    .core-pulse {
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(123, 97, 255, 0.8) 0%, rgba(30, 144, 255, 0) 70%);
      border-radius: 50%;
      animation: pulse 3s infinite;
    }
    
    .core-text {
      text-align: center;
      margin-top: 5px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.8);
    }
    
    .management-text {
      font-size: 10px;
      font-weight: 400;
      opacity: 0.6;
      margin-top: 2px;
    }
    
    .agent {
      position: absolute;
      cursor: pointer;
      z-index: 10;
      transition: all 0.3s ease;
    }
    
    .agent:hover {
      transform: scale(1.1);
    }
    
    .agent-card {
      width: 90px;
      height: 110px;
      background: linear-gradient(135deg, rgba(30, 30, 50, 0.7) 0%, rgba(15, 15, 25, 0.7) 100%);
      border: 1px solid rgba(123, 97, 255, 0.3);
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 0.3s ease;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
    
    .agent:hover .agent-card {
      border-color: rgba(123, 97, 255, 0.8);
      box-shadow: 0 10px 25px rgba(123, 97, 255, 0.3);
    }
    
    .agent-header {
      width: 100%;
      height: 6px;
      background: linear-gradient(90deg, #7b61ff 0%, #1e90ff 100%);
    }
    
    .agent-icon {
      margin-top: 12px;
      width: 40px;
      height: 40px;
      background: rgba(123, 97, 255, 0.1);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
    
    .agent-face {
      width: 24px;
      height: 24px;
      position: relative;
    }
    
    .agent-eye {
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: rgba(123, 97, 255, 0.9);
      top: 6px;
      transition: all 0.3s ease;
    }
    
    .agent-eye-left {
      left: 4px;
    }
    
    .agent-eye-right {
      right: 4px;
    }
    
    .agent:hover .agent-eye {
      background-color: #1e90ff;
      box-shadow: 0 0 5px rgba(30, 144, 255, 0.8);
    }
    
    .agent-mouth {
      position: absolute;
      width: 12px;
      height: 2px;
      background-color: rgba(123, 97, 255, 0.9);
      bottom: 6px;
      left: 6px;
      transition: all 0.3s ease;
    }
    
    .agent:hover .agent-mouth {
      background-color: #1e90ff;
    }
    
    .agent-label {
      margin-top: 10px;
      text-align: center;
      font-size: 11px;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.2;
      letter-spacing: 0.5px;
      padding: 0 5px;
    }
    
    .agent-type {
      font-size: 9px;
      color: rgba(255, 255, 255, 0.5);
      margin-top: 3px;
    }
    
    .ops-section {
      position: absolute;
      width: 120px;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
      font-size: 12px;
      font-weight: 500;
      transition: all 0.3s ease;
    }
    
    .ops-section.active,
    .ops-section:hover {
      color: rgba(255, 255, 255, 0.9);
      text-shadow: 0 0 10px rgba(123, 97, 255, 0.5);
    }
    
    .connection-line {
      position: absolute;
      height: 1px;
      background: linear-gradient(90deg, rgba(123, 97, 255, 0.5) 0%, rgba(30, 144, 255, 0.5) 100%);
      transform-origin: 0 0;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 2;
      box-shadow: 0 0 5px rgba(123, 97, 255, 0.3);
    }
    
    .glow-point {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #1e90ff;
      box-shadow: 0 0 10px rgba(30, 144, 255, 0.8);
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 3;
    }
    
    .branding {
      position: absolute;
      bottom: 20px;
      right: 30px;
      color: rgba(255, 255, 255, 0.3);
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 1px;
      transition: all 0.3s ease;
    }
    
    .branding:hover {
      color: rgba(123, 97, 255, 0.7);
    }
    
    /* Agent positions */
    .inventory-agent {
      top: 80px;
      left: 400px;
      transform: translateX(-50%);
    }
    
    .support-agent {
      top: 160px;
      left: 600px;
    }
    
    .co-pilot {
      top: 320px;
      left: 650px;
    }
    
    .finance-agent {
      top: 470px;
      left: 550px;
    }
    
    .sales-agent {
      top: 490px;
      left: 400px;
      transform: translateX(-50%);
    }
    
    .marketing-agent {
      top: 470px;
      left: 250px;
    }
    
    .booking-agent {
      top: 320px;
      left: 150px;
    }
    
    .fulfillment-agent {
      top: 10em;
      left: 12em;
    }
    
    /* Ops section positions */
    .inventory-ops {
      top: 10em;
      left: 24em;
      transform: translateX(-50%);
    }
    
    .support-ops {
      top: 12em;
      left: 31em;
    }
    
    .alignment-ops {
      top: 18em;
      left: 34em;
    }
    
    .finance-ops {
      top: 25em;
      left: 31em;
    }
    
    .sales-ops {
      top: 27em;
      left: 25em;
      transform: translateX(-50%);
    }
    
    .marketing-ops {
      top: 25em;
      left: 18em;
    }
    
    .booking-ops {
      top: 18em;
      left: 15em;
    }
    
    .fulfillment-ops {
      top: 33em;
      left: 18em;
    }
    
    /* Animations */
    @keyframes pulse {
      0% { opacity: 0; transform: scale(0.1); }
      50% { opacity: 0.5; }
      100% { opacity: 0; transform: scale(1.5); }
    }
    
    @keyframes float {
      0% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0); }
    }
    
    @keyframes hexPulse {
      0% { opacity: 0.3; }
      50% { opacity: 0.6; }
      100% { opacity: 0.3; }
    }
    
    .agent {
      animation: float 8s infinite ease-in-out;
      animation-delay: calc(var(--i) * 0.7s);
    }
    
    /* Responsive adjustments */
    @media (max-width: 850px) {
      .ecosystem-container {
        transform: scale(0.9);
      }
    }
    
    @media (max-width: 768px) {
      .ecosystem-container {
        transform: scale(0.8);
      }
    }
    
    @media (max-width: 600px) {
      .ecosystem-container {
        transform: scale(0.6);
      }
    }

    @media (max-width: 768px) {
      .agent-card{
        width: 70px;
        height: 95px;
      }
      .agent-label{
        font-size: 8px;
      }
      .ecosystem-container{
        overflow: visible;
      }
      .hexagon-grid{
        left: -6em;
      }

    /* Agent positions */
    .inventory-agent {
      top: 5em;
      left: 11em;
      transform: translateX(-50%);
    }
    
    .support-agent {
      top: 10em;
      left: 23em;
    }
    
    .co-pilot {
      top: 20em;
      left: 23em;
    }
    
    .finance-agent {
      top: 29em;
      left: 20em;
    }
    
    .sales-agent {
      top: 30em;
      left: 11em;
      transform: translateX(-50%);
    }
    
    .marketing-agent {
      top: 29em;
      left: 30px;
    }
    
    .booking-agent {
      top: 20em;
      left: -6em;
    }
    
    .fulfillment-agent {
      top: 10em;
      left: 0px;
    }
    
    /* Ops section positions */
    .inventory-ops {
      top: 10em;
      left: 11.2em;
      transform: translateX(-50%);
    }
    
    .support-ops {
      top: 12.5em;
      left: 17em;
    }
    
    .alignment-ops {
      top: 18em;
      left: 20em;
    }
    
    .finance-ops {
      top: 25em;
      left: 17em;
    }
    
    .sales-ops {
      top: 27em;
      left: 11em;
      transform: translateX(-50%);
    }
    
    .marketing-ops {
      top: 25em;
      left: 5em;
    }
    
    .booking-ops {
      top: 18em;
      left: 1.8em;
    }
    
    .fulfillment-ops {
      top: 12.5em;
      left: 5em;
    }
    .core{
    top: 16em;
    left: 8em;
    }
    }
</style>