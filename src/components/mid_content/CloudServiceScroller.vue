<template>
    <section class="cloud-service d-flex-center">
    <div class="scroller-wrapper container">
        <h3 class="mb-5 mt-2">Cloud Service Providers</h3>
      <div class="scroller-track">
        <div class="cloud-item" v-for="(provider, index) in duplicatedProviders" :key="index">
          <img :src="provider.logo" :alt="provider.name" />
          <span>{{ provider.name }}</span>
        </div>
      </div>
    </div>
</section>
  </template>
  
  <script>
  export default {
  name: "CloudServiceScroller",
    data() {
      return {
        providers: [
          { name: "Google Cloud", logo: new URL('@/assets/weaviate-logo.png', import.meta.url).href,  },
          { name: "Azure", logo: new URL('@/assets/azure.png', import.meta.url).href,  },
          { name: "AWS", logo: new URL('@/assets/aws.png', import.meta.url).href,  },
          { name: "IBM Cloud", logo: new URL('@/assets/ibm.png', import.meta.url).href,  },
        //   { name: "Azure", logo: "/assets/azure.png" },
        //   { name: "AWS", logo: "/assets/aws.png" },
        //   { name: "IBM Cloud", logo: "/assets/ibm.png" },
        ]
      };
    },
    computed: {
      // Duplicate the list to create an infinite loop effect
      duplicatedProviders() {
        return [...this.providers, ...this.providers];
      }
    }
  };
  </script>
  
  <style scoped>
  .scroller-wrapper {
    overflow: hidden;
    background: #1f1f1f;
    border-radius: 12px;
    padding: 20px;
    position: relative;
    width: 100%;
  }
  
  .scroller-track {
    display: flex;
    width: max-content;
    animation: scroll-left 20s linear infinite;
  }
  
  .cloud-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 180px;
    margin: 0 20px;
    color: #D7D7E4;
  }
  
  .cloud-item img {
    height: 40px;
    margin-bottom: 8px;
  }
  
  @keyframes scroll-left {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  </style>
  