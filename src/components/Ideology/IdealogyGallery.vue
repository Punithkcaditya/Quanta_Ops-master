<template>
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
        <img :src="item.image" :alt="item.title" class="card-image" @click="openModal(item.url)" />
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
          <VideoPlayer :videoUrl="selectedVideoUrl" />
      </div>
    </div>
  </section>
</template>
 
<script>
import VideoPlayer from '../Gallery/Videojs.vue'; // Adjust the path as necessary
export default {
  name: 'IdealogyGallery',
  components: {
    VideoPlayer
  },
  data() {
    return {
      showModal: false,
      selectedVideoUrl: '',
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
    openModal(url) {
      this.selectedVideoUrl = url;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedVideoUrl = '';
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
}
.tags {
  font-size: 14px;
  color: #999;
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
  background: rgba(0, 0, 0, 0.85);
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
  max-width: 90%;
  max-height: 90%;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
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
}
</style>
