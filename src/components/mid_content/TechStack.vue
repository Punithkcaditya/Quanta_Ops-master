<template>
    <section class="tech-stack">
        <div class="container">
            <h2 data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1000">Works Seamlessly With Your Tech Stack</h2>
            <p class="subtitle" data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1200">The most efficient Polyglot</p>
            
            <div class="stack-content mt-4em">
                <div class="stack-categories">
                    <button data-aos="slide-up" data-aos-delay="1100">Relational Database</button>
                    <button data-aos="slide-up" data-aos-delay="1200">Document Database</button>
                    <button data-aos="slide-up" data-aos-delay="1300">Graph Database</button>
                    <button data-aos="slide-up" data-aos-delay="1400">Vector Database</button>
                    <button data-aos="slide-up" data-aos-delay="1500">Key-Value Database</button>
                    <button data-aos="slide-up" data-aos-delay="1600">Time-Series Database</button>
                </div>
                
                <div class="stack-logos">
                    <img src="@/assets/weaviate-logo.png" alt="Weaviate">
                    <img src="@/assets/prometheus.png" alt="Prometheus">
                    <img src="@/assets/oracle.png" alt="Oracle">
                    <img src="@/assets/mongo.png" alt="MongoDB">
                    <img src="@/assets/redis.png" alt="Redis">
                    <img src="@/assets/mysql.png" alt="MySQL">
                    <img src="@/assets/timescale.png" alt="Timescale">
                    <img src="@/assets/influxdb.png" style="width: 200px;" alt="InfluxDB">
                    <img src="@/assets/cassandra.png" alt="Cassandra">
                    <img src="@/assets/milvus.png" alt="Milvus">
                    <img src="@/assets/couchbase.png" alt="Couchbase">
                    <img src="@/assets/dynamodb.png" alt="DynamoDB">
                    <img src="@/assets/sqlserver.png" alt="SQL Server">
                </div>
            </div>
        </div>
    </section>
    
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: "TechStack",

  mounted(){
    AOS.init({
    easing: 'ease-out',
    })
  }
};
</script>
<style scoped>
.tech-stack {
    background-color: #0D0D0D;
    color: #D7D7E4;
    padding: 4rem 2rem;
    text-align: center;
}

.container {
    max-width: 1100px;
    margin: auto;
}

h2 {
    font-size: 2rem;
    font-weight: 700;
}

.subtitle {
    font-size: 1rem;
    color: #aaa;
    margin-bottom: 2rem;
}

.stack-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}

.stack-categories {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.stack-categories button {
    background: rgb(13 13 13);
    border: none;
    color: #D7D7E4;
    padding: 12px 20px;
    font-size: 14px;
    text-align: left;
    width: 300px;
    cursor: pointer;
    transition: 0.3s;
    border: 2.5px solid #9191B633;
    border-radius: 15px;
    text-align: center;
}


.stack-categories button:hover {
    background: linear-gradient(270deg, #7B61FF, #4A3A99);
  }
.stack-logos {
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    justify-content: center;
    gap: 20px;
}

.stack-logos img {
    max-width: 120px;
    /* filter: brightness(0.8); */
    transition: 0.3s;
    width: 100%;
    padding: 10px;
    height: 22%;
}

.stack-logos img:hover {
    filter: brightness(1);
}

.tech-stack h2{
    font-size: 48px;
    color: #D7D7E4;
    text-align: justify;
}

.tech-stack p{
    color: #D7D7E4;
    text-align: justify;
    font-size: 24px;
}
</style>