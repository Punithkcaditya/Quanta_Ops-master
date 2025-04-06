<template>
    <div>
         <HeaderView company="Quanta Ops" msg="Brainstorm"/>
    <div ref="videoGallery" class="gallery-grid">
      <a
        v-for="(item, index) in videos"
        :key="index"
        :href="item.videoUrl"
        class="gallery-item"
        data-lg-size="1280-720"
        :data-lg-video="JSON.stringify({
          source: [{ src: item.videoUrl, type: item.type }],
          attributes: { preload: false, controls: true },
        })"
      >
        <img :src="item.thumbnail" :alt="item.title" />
        <div class="title">{{ item.title }}</div>
      </a>
    </div>
</div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import lightGallery from 'lightgallery'
  import lgVideo from 'lightgallery/plugins/video'
  import lgFullscreen from 'lightgallery/plugins/fullscreen';

  // CSS
  import 'lightgallery/css/lightgallery.css'
  import 'lightgallery/css/lg-video.css'
  import 'lightgallery/css/lg-fullscreen.css';
  import HeaderView from '../../components/HeaderView.vue'

  const videoGallery = ref(null)
  
  const videos = [
    {
      title: 'Galaxy Tour',
      thumbnail: 'https://img.youtube.com/vi/v8lh7AFLzYI/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=v8lh7AFLzYI',
      type: 'youtube'
    },
    {
      title: 'Nature Walk',
      thumbnail: 'https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=tgbNymZ7vqY',
      type: 'youtube'
    },
    // Add more items as needed
  ]
  
  onMounted(() => {
    // lightGallery(videoGallery.value, {
    //   plugins: [lgVideo],
    //   licenseKey: '0000-0000-000-0000',
    //   speed: 500,
    // }),
    lightGallery(this.$refs.gallery, {
      plugins: [lgVideo, lgFullscreen],
      licenseKey: '0000-0000-000-0000', // Replace with your actual key
      controls: true,
      download: false,
      fullscreen: true,
      speed: 500,
    });
  })
  </script>
  
  <style scoped>
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
    padding: 20px;
  }
  
  .gallery-item {
    position: relative;
    cursor: pointer;
    text-align: center;
  }
  
  .gallery-item img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  
  .gallery-item:hover img {
    transform: scale(1.03);
  }
  
  .title {
    margin-top: 8px;
    font-size: 0.95rem;
    font-weight: 600;
    color: #fff;
  }
  </style>
  