<template>
      <div class="bg-dark-header">
        <HeaderView company="Quanta Ops" msg="Brainstorm"/>
  <section class="philosophy-section">
    <div class="section-header">
      <h2>Our Philosophy</h2>
      <a href="#" class="see-all">See all →</a>
    </div>
    <div class="grid">
      <div
        class="card"
        v-for="(item, index) in philosophyItems"
        :key="index"
      >
        <img :src="item.image" :alt="item.title" class="card-image" @click="openModal(item.url,item.image)" />
        <div class="card-content">
          <h3>{{ item.title }}</h3>
          <p class="tags">{{ item.tags }}</p>
        </div>
      </div>
    </div>
       <!-- Modal -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
          <button class="close-btn" @click="closeModal">✖</button>
          <VideoPlayer :videoUrl="selectedVideoUrl" :poster="selectedPoster" />
      </div>
    </div>
    <div class="container">
      <div class="about-us">
      <h2>About Us</h2>
      <p class="subtitle">An operator optimizing Enterprise Operations.</p>
      <p>
        At Quanta Ops, we transform complex operational challenges into elegant solutions. Born from the crucible of high-pressure, low-margin operations in challenging markets, our team has mastered the art of breaking down seemingly insurmountable problems into their fundamental components—their quanta.
      </p>
      <p>
        We believe that operational excellence doesn’t always require complex systems or expensive technology. Instead, it demands precision, insight, and the wisdom to identify where the smallest changes can create the greatest impact.
      </p>
      <p style="margin-bottom: 0px;">Our approach is refreshingly straightforward:</p>
      <ol>
        <li>Break down complex problems into their smallest parts</li>
        <li>Design streamlined processes that eliminate friction</li>
        <li>Automate recurring tasks to free human potential</li>
        <li>Apply the perfect blend of AI and human intelligence</li>
      </ol>
      <p>
        What sets us apart is our proven track record of creating profitable operations in environments where others see only obstacles. We've turned the constraints of challenging markets into a laboratory for innovation, developing methodologies that work not just in ideal conditions, but in the real world—with all its complications and constraints.
      </p>
      <p>
        Today, we bring this battle-tested expertise to enterprises worldwide, helping them achieve operational transformation that drives both efficiency and growth.
      </p>
      <p>
        We don’t just offer advice – we roll up our sleeves and help you transform your operations from the inside out. Because at Quanta Ops, we understand that true optimization isn’t about doing everything—it’s about doing what matters most, exceptionally well.
      </p>
      <p>
        Join us in redefining what’s possible when operations are approached with both scientific precision and practical wisdom.
      </p>
    </div>
    </div>
  </section>
  <Footer />
  </div> 
</template>
 
<script>
import VideoPlayer from '../Gallery/Videojs.vue'; // Adjust the path as necessary
import HeaderView from '../HeaderView.vue';
import Footer from '../footer/footer.vue';
export default {
  name: 'IdealogyGallery',
  components: {
    VideoPlayer,
    HeaderView,
      Footer,
  },
  data() {
    return {
      showModal: false,
      selectedVideoUrl: '',
      selectedPoster: '',
      philosophyItems: [
        {
          title: 'Exploring the Alps',
          image: new URL("@/assets/travel.png", import.meta.url).href,
          url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
          tags: 'Travel, Adventure'
        },
        {
          title: 'Cooking with Spices',
          image: new URL("@/assets/cooking.png", import.meta.url).href,
          url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
          tags: 'Cooking, Spices'
        },
        {
          title: 'Tech Gadgets Review',
          image: new URL("@/assets/tech.png", import.meta.url).href,
          url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
          tags: 'Technology, Gadgets'
        },
        {
          title: 'Daily Yoga Routine',
          image: new URL("@/assets/yoga.png", import.meta.url).href,
          url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
          tags: 'Yoga, Wellness'
        },
        {
          title: 'DIY Home Projects',
          image: new URL("@/assets/diy.png", import.meta.url).href,
          url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
          tags: 'DIY, Home Improvement'
        },
        {
          title: 'Travel Vlog: Paris',
          image: new URL("@/assets/paris.png", import.meta.url).href,
          url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
          tags: 'Travel, Paris'
        },
        {
          title: 'Fitness Challenge',
          image: new URL("@/assets/fitness.png", import.meta.url).href,
          url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
          tags: 'Fitness, Challenge'
        },
        {
          title: 'Gardening Tips',
          image: new URL("@/assets/gardening.png", import.meta.url).href,
          url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
          tags: 'Gardening, Tips'
        }
      ]
    };
  },
  methods: {
    openModal(url,image) {
      this.selectedVideoUrl = url;
      this.showModal = true;
      this.selectedPoster = image;
    },
    closeModal() {
      this.showModal = false;
      this.selectedVideoUrl = '';
      this.selectedPoster = '';
    }
  },
  mounted() {
    // Initialize the video player if needed
    // this.$nextTick(() => {
    //   this.$refs.videoPlayer.initPlayer(this.selectedVideoUrl);
    // });
  },
};
</script>
 
<style scoped>
.philosophy-section {
  background-color: #000000;
  color: white;
  padding: 60px 40px;
}
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section-header h2 {
  font-size: 28px;
  font-weight: 700;
}
.see-all {
  color: #A094FF;
  text-decoration: none;
  font-weight: 500;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}
.card {
  background-color: #000000;
  border-radius: 20px;
  overflow: hidden;
  border: unset;
}
.card-image {
  width: 100%;
  height: 160px;
  background: #000000;
}
.card-content {
  background: #000000;
  padding: 15px 0px 0px 0px;
}
.card-content h3 {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 5px;
  text-align: justify;
}
.tags {
  font-size: 14px;
  color: #6464B1;
  text-align: justify;
}
.thumbnail {
  width: 300px;
  margin: 10px;
  cursor: pointer;
  border-radius: 12px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(255 255 255 / 30%);  
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: #111;
  padding: 20px;
  border-radius: 16px;
  max-width: 52em;
  max-height: 90%;
}

/* .close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
} */
.close-btn {
  position: absolute;
    top: 2em;
    right: 2em;
    background: transparent;
    border: none;
    font-size: 13px;
    color: #060606;
    cursor: pointer;
    z-index: 99;
    /* padding: 6px; */
    background: #fff;
    border-radius: 1em;
}

.about-us {
  padding: 96px 0px;
  margin-bottom: 60px;
  text-align: justify;
}
.about-us h2 {
  font-size: 64px;
  font-weight: 900;
  color: #FFFFFF;
  margin-bottom: 10px;
  
}
.about-us .subtitle {
  padding: 0px;
  font-size: 24px;
  color: #FFFFFF;
  margin-bottom: 40px;
}
.about-us p {
  font-weight: 500;
  padding: 10px 20px;
  font-size: 22px;
  margin-bottom: 15px;
  color: #FFFFFF;
  line-height: 1.3;
}
.about-us ol {
  margin-left: 20px;
  color: #FFFFFF;
  margin-bottom: 20px;
}
.about-us li {
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 0px;
}

.card-content h3 {
  color: #FFFFFF;
  font-size: 17px;
  font-weight: 800;
}

@media (max-width: 768px) {
  .philosophy-section {
    padding: 40px 20px;
  }
  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .card-image {
    height: 140px;
  }
  .about-us h2{
    font-size: 35px;
  }

  .about-us p {
    font-size: 15px;
  }

  .about-us .subtitle{
    font-size: 20px;
  }
  .about-us li {
    font-size: 18px;
  }
}
</style>
