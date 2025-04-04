<template>
  <section class="swiper_section">
  <div class="container">
  <div class="scroller-container mb-5 mt-5 black_layout">
    <swiper
      :modules="[Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :space-between="20"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      class="custom-swiper"
    >
      <swiper-slide v-for="(group, index) in imageGroups" :key="index">
        <div class="slide-content">
          <h2>{{ group.title }}</h2>
          <div class="image-group">
            <div class="image-wrapper" v-for="(image, idx) in group.images" :key="idx">
              <img :src="image.src" :alt="image.alt" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  </div>
</section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Import images
import googleCloud from "@/assets/google.png";
import azure from "@/assets/azure.png";
import aws from "@/assets/aws.png";
import ibm from "@/assets/ibm.png";

import messageBird from "@/assets/messageBird.png";
import plivo from "@/assets/plivo.png";
import twilio from "@/assets/twilio-logo-red.png";
import salesforce from "@/assets/salesforce_logo.png";


import nvidia_logo from "@/assets/nvidia_logo.png";
import google_cloud_platform_logo from "@/assets/google_cloud_platform_logo.png";



export default {
  components: { Swiper, SwiperSlide },
  setup() {
    // Each slide now includes a title along with its images
    const imageGroups = [
      {
        title: "Cloud Service Providers",
        images: [
          { src: googleCloud, alt: "Google Cloud" },
          { src: azure, alt: "Azure" },
          { src: aws, alt: "AWS" },
          { src: ibm, alt: "IBM Cloud" }
        ]
      },
      {
        title: "Other SaaS Partners",
        images: [
          { src: messageBird, alt: "MessageBird" },
          { src: plivo, alt: "Plivo" },
          { src: twilio, alt: "Twilio" },
          { src: salesforce, alt: "Salesforce" }
        ]
      },
      {
        title: "AI Infrastructure Partners",
        images: [
          { src: nvidia_logo, alt: "Nvidia" },
          { src: google_cloud_platform_logo, alt: "Google Cloud" },
          { src: azure, alt: "Azure" },
          { src: aws, alt: "Aws" }
        ]
      }
    ];

    return { imageGroups, Autoplay };
  }
};
</script>

<style scoped>
.scroller-container {
  width: 100%;
  /* max-width: 900px; */
  margin: auto;
  text-align: center;
}

h2 {
  color: #D7D7E4;
  margin-bottom: 10px;
}

.custom-swiper {
  padding: 10px 0;
}

.slide-content {
  text-align: center;
}

.image-group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #121212;
  padding: 15px;
  border-radius: 10px;
}
.black_layout{
  background: #121212;
  padding: 1em;
  border-radius: 12px;
}
.image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  /* width: 100px; */
  height: auto;
  object-fit: contain;
}

@media (max-width: 540px) { /* Mobile */
  img {
    width: 60px;
  }
  .swiper_section, .startyourjourney {
    padding: 1em 0em;
 }
}
</style>
