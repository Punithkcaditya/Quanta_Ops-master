<template>
    <div class="container">
      <img src="@/assets/hexa.png" class="hexa-layer" />
      
      <svg class="lines-svg">
        <line v-for="(agent, index) in agents" :key="'line-' + index" 
              :x1="centerX" :y1="centerY" 
              :x2="getEndpoint(agent).x" :y2="getEndpoint(agent).y" 
              stroke="#7B61FF" stroke-width="2"
              class="connection-line" />
      </svg>
      
      <div class="center-node">
        <img src="@/assets/circle.png" class="circle" />
        <img src="@/assets/insidecircle.png" class="inside-circle" />
        <span class="center-text">Management <br>Agent</span>
        <span class="center-subtext">Management Ops</span>
      </div>
      
      <div v-for="(agent, index) in agents" :key="index" 
           class="agent-box" 
           :style="getAgentStyle(agent)"
           @mousedown="startDrag($event, agent)">
        <img src="@/assets/agent-card.png" class="agent-img" />
        <span class="agent-text">{{ agent.name }}</span>
        <span class="agent-subtext">AGENT</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name: "AiagentOperations",
    data() {
      return {
        agents: [
          { name: "INVENTORY", top: 24.5, left: 450, originalTop: 24.5, originalLeft: 450 },
          { name: "SUPPORT", top: 145.5, left: 761, originalTop: 145.5, originalLeft: 761 },
          { name: "CO-PILOT", top: 342.5, left: 824, originalTop: 342.5, originalLeft: 824 },
          { name: "FINANCE", top: 537.5, left: 697, originalTop: 537.5, originalLeft: 697 },
          { name: "SALES", top: 596.5, left: 450, originalTop: 596.5, originalLeft: 450 },
          { name: "MARKETING", top: 545.5, left: 203, originalTop: 545.5, originalLeft: 203 },
          { name: "BOOKING", top: 342.5, left: 76, originalTop: 342.5, originalLeft: 76 },
          { name: "FULFILLMENT", top: 132.5, left: 139, originalTop: 132.5, originalLeft: 139 }
        ],
        dragging: null,
        centerX: 443.63 + 63.375,
        centerY: 317.08 + 63.416,
      };
    },
    methods: {
      getAgentStyle(agent) {
        return {
          top: agent.top + 'px',
          left: agent.left + 'px',
          width: '114px',
          height: '139px',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        };
      },
      getEndpoint(agent) {
        let offsetX = 57;
        let offsetY = 80;
        return {
          x: agent.left + offsetX,
          y: agent.top + offsetY
        };
      },

      startDrag(event, agent) {
        this.dragging = { agent, startX: event.clientX, startY: event.clientY };
        document.addEventListener("mousemove", this.onDrag);
        document.addEventListener("mouseup", this.stopDrag);
      },
      onDrag(event) {
        if (!this.dragging) return;
        let { agent, startX, startY } = this.dragging;
        let dx = event.clientX - startX;
        let dy = event.clientY - startY;
        agent.left += dx;
        agent.top += dy;
        this.dragging.startX = event.clientX;
        this.dragging.startY = event.clientY;
      },
      stopDrag() {
        if (this.dragging) {
          this.dragging.agent.left = this.dragging.agent.originalLeft;
          this.dragging.agent.top = this.dragging.agent.originalTop;
          this.dragging = null;
        }
        document.removeEventListener("mousemove", this.onDrag);
        document.removeEventListener("mouseup", this.stopDrag);
      }
    }
  };
  </script>
  
  <style scoped>
  .agent-subtext {
    font-family: Inter,sans-serif;
    font-weight: 400;
    font-size: 9px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: white;
    opacity: 0.5;
    position: absolute;
    top: 70%;
    transform: translateY(-50%);
  }

  .center-subtext {
    font-family: Inter,sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: white;
    opacity: 0.5;
    position: absolute;
    top: 63%;
    transform: translateY(-50%);
  }
  </style>

  <style scoped>
  .container {
    position: relative;
    width: 100%;
    max-width: 1014px;
    height: 761px;
    margin: auto;
  }
  .hexa-layer {
    position: absolute;
    width: 771.907px;
    height: 393.183px;
    opacity: 1;
    top: 152.2px;
    left: 126.75px;
    border-width: 1px;
  }
  .center-node {
    position: absolute;
    width: 126.75px;
    height: 126.833px;
    /* Move to the center of the parent */
    top: 50%;
    left: 50%;
    /* Shift it back by half of its width and height */
    transform: translate(-50%, -50%);
    border-width: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

  .circle {
    width: 126.75px;
    height: 126.833px;
    position: absolute;
  }
  .inside-circle {
    width: 76.05px;
    height: 76.1px;
    position: absolute;
    top: 25px;
    left: 25px;
  }
  .center-text {
    font-family: Inter,sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    color: white;
    position: absolute;
    width: 100%;
    opacity: .9;
    top: 35%;
  }
  .agent-box {
    position: absolute;
    cursor: grab;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .agent-img {
    background-color: black;
    width: 100%;
    height: auto;
  }
  .agent-text {
    font-family: Inter,sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 11px;
    line-height: 100%;
    letter-spacing: 0%;
    color: white;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 55%;
    opacity: .9;
    transform: translateY(-50%);
  }
  .lines-svg {
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  .connection-line {
    z-index: -1;
  }
  </style>