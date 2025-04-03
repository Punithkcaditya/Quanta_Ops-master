<template>
    <div class="quanta-wrapper">
      <div class="quanta-grid">
        <div v-for="(step, index) in steps" :key="index" class="quanta-card">
          <h3>{{ index + 1 }}. {{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name: "QuantaApproach",
    data() {
      return {
        steps: [
          {
            title: "Break Into Quanta",
            description: "Discover hidden patterns and opportunities as your complex challenges decompose into their fundamental elements."
          },
          {
            title: "Optimize",
            description: "Achieve unprecedented efficiency as each component is harmonized and perfected at the most granular quantum level."
          },
          {
            title: "Reconstruct",
            description: "Gain a superior integrated system as your optimized elements coalesce into a cohesive whole that preserves all enhancements."
          },
          {
            title: "Deploy Intelligence",
            description: "Experience autonomous evolution as your system activates with advanced cognitive capabilities that continuously learn and adapt."
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .quanta-wrapper {
    background: url('@/assets/logomark.png') no-repeat center center;
    background-size: contain;
    padding: 60px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .quanta-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(250px, 1fr));
    gap: 30px;
    max-width: 900px;
    width: 100%;
    z-index: 1;
  }
  
  .quanta-card {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 20px;
    color: #D7D7E4;
    backdrop-filter: blur(4px);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .quanta-card h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .quanta-card p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  </style>
  