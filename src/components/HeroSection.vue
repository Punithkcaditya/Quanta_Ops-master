<template>
  <div style="padding-top: 6em;">
    <section class="hero gradient-text-hero">
      <h1 class="fs-96 gradient-text" data-aos="slide-up" data-aos-easing="ease-in" data-aos-duration="1500"><span>Quanta </span><span ref="typing"></span></h1>
      <h2 class="fs-96 lh-120 mb-2em" data-aos="slide-up" data-aos-easing="ease-in" data-aos-duration="1500">Revolutionizing Enterprise <br> Intelligence</h2>
      <div class="hero-box">
        <div class="hero-content">
        <div class="hero-content-child  d-flex">
            <div class="d-flex-no-space p-05">
                <img src="@/assets/quantaops.png" alt="Quanta Ops Logo" class="logo-quantaops pr-o5 h-40">
                <h3 class="quanta_ops">Quanta Ops</h3>
            </div>
          <button class="btn">Optimize Your Enterprise</button>
        </div>
        <SearchBox />
        </div>
      </div>
    </section>
    <EfficientSection />
    <StaticAiagentSection />
    <TechStack />
    <CloudServiceScrollerSwiper />
    <QuantaApproachStatic />
    <StartYourJourney />
  </div>
  </template>
  
  <script>
  import SearchBox from "./SearchBox.vue";
  import EfficientSection from "./mid_content/EfficientSection.vue";
//   import AiagentSection from "./mid_content/AiagentSection.vue";
  import StaticAiagentSection from "./mid_content/StaticAiagentSection.vue";
  import TechStack from "./mid_content/TechStack.vue";
  import CloudServiceScrollerSwiper from "./mid_content/CloudServiceScrollerSwiper.vue";
  // import CloudServiceScroller from "./mid_content/CloudServiceScroller.vue";
  import QuantaApproachStatic from "./mid_content/QuantaApproachStatic.vue";
  import StartYourJourney from "./mid_content/StartYourJourney.vue";
  import Typed from "typed.js";
  import { onMounted, ref } from "vue";
  import AOS from "aos";
  import "aos/dist/aos.css";


  export default {
    name: "HeroSection",
    components: {
    SearchBox,
    EfficientSection,
    StaticAiagentSection,
    TechStack,
    CloudServiceScrollerSwiper,
    QuantaApproachStatic,
    StartYourJourney,
  },
  mounted() {
    AOS.init({
    easing: 'ease-in-out', // easing
    once: false,    // animate every time scroll happens
    mirror: true    // animate out while scrolling past
    })
  },
  setup() {
    const typing = ref(null);

    onMounted(() => {
      new Typed(typing.value, {
        strings: ["Ops", "Ops", "Ops"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      });
    });

    return { typing };
  },
  }
  </script>
  
  <style scoped>
  .hero {
    text-align: center;
    background: #0b0b0d;
    color: #D7D7E4;
    padding: 50px 0px;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #8b5cf6; /* Purple Shade */
  }
  
  .hero h2 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-top: 10px;
  }
  
  .hero-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  
  .hero-content {
    background: black;
    padding: 20px;
    border-radius: 10px;
    width: 70%;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
  
  .logo {
    width: 100px;
    margin-bottom: 15px;
  }
  
  .btn {
    background: #222244;
    color: #D7D7E4;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 16px;
    font-size: 1rem;
  }
  
  .btn:hover {
    background: linear-gradient(270deg, #7B61FF, #4A3A99);
  }

  .min-width-180{
    width: 200px;
  }

  .quanta_ops{
    color: #9292C9;
    font-weight: 700;
    font-family: Sen;
    font-size: 29px;
  }
  </style>
  