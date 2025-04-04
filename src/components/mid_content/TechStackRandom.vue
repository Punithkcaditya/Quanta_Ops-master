<template>
    <section class="tech-stack">
      <div class="container">
        <h2>Works Seamlessly With Your Tech Stack</h2>
        <p class="subtitle">The most efficient Polyglot</p>
  
        <div class="row">
          <div class="col-4">
            <div class="stack-categories">
              <button @click="filterByCategory('All')">All</button>
              <button @click="filterByCategory('Relational Database')">Relational Database</button>
              <button @click="filterByCategory('Document Database')">Document Database</button>
              <button @click="filterByCategory('Graph Database')">Graph Database</button>
              <button @click="filterByCategory('Vector Database')">Vector Database</button>
              <button @click="filterByCategory('Key-Value Database')">Key-Value Database</button>
              <button @click="filterByCategory('Time-Series Database')">Time-Series Database</button>
            </div>
          </div>
          <div class="col-8">
            <div class="stack-logos-1">
              <transition-group name="fade" tag="div">
                <img
                  v-for="(logo) in logos"
                  :key="logo.src"
                  :src="logo.src"
                  :alt="logo.alt"
                  :style="{ top: logo.top + 'px', left: logo.left + 'px' }"
                />
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "TechStackRandom",
    data() {
      return {
        allLogos: [],
        logos: [],
        selectedCategory: "All",
      };
    },
    created() {
      const assets = [
        { alt: "Weaviate", src: new URL("@/assets/weaviate_white_text_converted.png", import.meta.url).href, category: "Vector Database", top: 20, left: 30 },
        { alt: "Prometheus", src: new URL("@/assets/prometheus.png", import.meta.url).href, category: "Time-Series Database", top: 80, left: 90 },
        { alt: "Oracle", src: new URL("@/assets/oracle.png", import.meta.url).href, category: "Relational Database", top: 170, left: 50 },
        { alt: "MongoDB", src: new URL("@/assets/mongo.png", import.meta.url).href, category: "Document Database", top: 90, left: 300 },
        { alt: "Redis", src: new URL("@/assets/redis.png", import.meta.url).href, category: "Key-Value Database", top: 350, left: 50 },
        { alt: "MySQL", src: new URL("@/assets/mysql.png", import.meta.url).href, category: "Relational Database", top: 130, left: 450 },
        { alt: "Timescale", src: new URL("@/assets/timescale_white.png", import.meta.url).href, category: "Time-Series Database", top: 250, left: 80 },
        { alt: "InfluxDB", src: new URL("@/assets/influxdb.png", import.meta.url).href, category: "Time-Series Database", top: 60, left: 500 },
        { alt: "Cassandra", src: new URL("@/assets/cassandratry.png", import.meta.url).href, category: "Document Database", top: 170, left: 300 },
        { alt: "Milvus", src: new URL("@/assets/milvus.png", import.meta.url).href, category: "Vector Database", top: 290, left: 550 },
        { alt: "Couchbase", src: new URL("@/assets/couchbase.png", import.meta.url).href, category: "Document Database", top: 270, left: 500 },
        { alt: "DynamoDB", src: new URL("@/assets/d1_white_text.png", import.meta.url).href, category: "Key-Value Database", top: 330, left: 320 },
        { alt: "SQL Server", src: new URL("@/assets/sql_server_white.png", import.meta.url).href, category: "Relational Database", top: 100, left: 600 },
        { alt: "Graph Database", src: new URL("@/assets/Neo_logo.png", import.meta.url).href, category: "Graph Database", top: 5, left: 300 },
      ];

      const assets_mob = [
        { alt: "Weaviate", src: new URL("@/assets/weaviate_white_text_converted.png", import.meta.url).href, category: "Vector Database", top: 0, left: 16 },
        { alt: "Prometheus", src: new URL("@/assets/prometheus.png", import.meta.url).href, category: "Time-Series Database", top: 47, left: 30 },
        { alt: "Oracle", src: new URL("@/assets/oracle.png", import.meta.url).href, category: "Relational Database", top: 90, left: 18 },
        { alt: "MongoDB", src: new URL("@/assets/mongo.png", import.meta.url).href, category: "Document Database", top: 90, left: 300 },
        { alt: "Redis", src: new URL("@/assets/redis.png", import.meta.url).href, category: "Key-Value Database", top: 150, left: 50 },
        { alt: "MySQL", src: new URL("@/assets/mysql.png", import.meta.url).href, category: "Relational Database", top: 119, left: 139 },
        { alt: "Timescale", src: new URL("@/assets/timescale_white.png", import.meta.url).href, category: "Time-Series Database", top: 202, left: 29 },
        { alt: "InfluxDB", src: new URL("@/assets/influxdb.png", import.meta.url).href, category: "Time-Series Database", top: 60, left: 146 },
        { alt: "Cassandra", src: new URL("@/assets/cassandratry.png", import.meta.url).href, category: "Document Database", top: 208, left: 150 },
        { alt: "Milvus", src: new URL("@/assets/milvus.png", import.meta.url).href, category: "Vector Database", top: 71, left: 140 },
        { alt: "Couchbase", src: new URL("@/assets/couchbase.png", import.meta.url).href, category: "Document Database", top: 254, left: 34 },
        { alt: "DynamoDB", src: new URL("@/assets/d1_white_text.png", import.meta.url).href, category: "Key-Value Database", top: 300, left: 42 },
        { alt: "SQL Server", src: new URL("@/assets/sql_server_white.png", import.meta.url).href, category: "Relational Database", top: 300, left: 142 },
        { alt: "Graph Database", src: new URL("@/assets/Neo_logo.png", import.meta.url).href, category: "Graph Database", top: 11, left: 153 },
      ];

        // Check if the screen width is less than 768px (Mobile View)
        this.allLogos = window.innerWidth < 768 ? assets_mob : assets;

  
      this.filterByCategory("All");
        // Listen for window resize events to dynamically adjust positions
        window.addEventListener("resize", this.adjustLogoPositions);
    },
    methods: {
      filterByCategory(category) {
        this.selectedCategory = category;
        if (!this.allLogos || !Array.isArray(this.allLogos)) {
          console.error("allLogos is undefined or not an array");
          return;
        }
        this.logos = category === "All"
          ? this.allLogos
          : this.allLogos.filter((logo) => logo.category === category);
      },
      adjustLogoPositions() {
        this.allLogos = window.innerWidth < 768 ? this.assets_mob : this.allLogos;

      }
    },
  };
  </script>
  
  <style scoped>
  .tech-stack {
    background-color: #0d0d0d;
    color: #d7d7e4;
    padding: 4rem 2rem;
    text-align: center;
  }
  
  .stack-categories {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .stack-categories button {
    background: rgb(13, 13, 13);
    border: 2.5px solid #9191b633;
    color: #d7d7e4;
    padding: 12px 20px;
    font-size: 14px;
    text-align: center;
    width: 300px;
    cursor: pointer;
    border-radius: 15px;
  }
  
  .stack-categories button:hover {
    background: linear-gradient(270deg, #7b61ff, #4a3a99);
  }
  
  .stack-logos-1 {
    position: relative;
    height: 410px;
    margin: auto;
    overflow: hidden;
  }
  
  .stack-logos-1 img {
    position: absolute;
    max-width: 150px;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  
  .stack-logos-1 img:hover {
    transform: scale(1.1);
  }
  
  /* Animation */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
    transform: scale(0.8);
  }

  @media (max-width: 540px) { /* Mobile */
    .tech-stack {
    padding: 3rem 0rem;
    }

    .stack-categories button {
    background: rgb(13, 13, 13);
    border: 2.5px solid #9191b633;
    padding: 6px 7px;
    font-size: 9px;
    width: 116px;
    border-radius: 9px;
    }


    .subtitle{
        margin-bottom: 3rem;
    }

    .stack-logos-1 img {
      max-width: 80px;
    }
}
  </style>
  