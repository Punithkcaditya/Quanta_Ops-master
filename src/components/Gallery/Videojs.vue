<template>
  <div class="player-container">
    <video
      ref="videoPlayer"
      class="video-js vjs-default-skin"
      controls
      preload="auto"
      width="800"
      height="450"
      :poster="poster"
    ></video>
  </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

import 'videojs-contrib-quality-levels';
import httpSourceSelector from 'videojs-http-source-selector';

// Register the plugin
videojs.registerPlugin('httpSourceSelector', httpSourceSelector);

export default {
  name: 'VideoPlayer',
  props: {
    videoUrl: String,
    poster: String // Accept poster image
  },
  mounted() {
    const player = videojs(this.$refs.videoPlayer, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      responsive: true,
      techOrder: ['html5'],
      poster: this.poster,
      controlBar: {
        children: [
          'playToggle',
          'volumePanel',
          'currentTimeDisplay',
          'timeDivider',
          'durationDisplay',
          'progressControl',
          'liveDisplay',
          'spacer',
          {
            name: 'button',
            el: this.createSeekButton('⏪ 10s', -10)
          },
          {
            name: 'button',
            el: this.createSeekButton('⏩ 10s', 10)
          },
          'fullscreenToggle',
          'playbackRateMenuButton',
          // 'qualitySelector' is auto-added by plugin
        ]
      },
      sources: [
        {
          src: this.videoUrl,
          type: 'application/x-mpegURL'
        }
      ]
    });

    player.ready(() => {
      player.httpSourceSelector({
        default: 'auto'
      });
    });

    this.player = player;
  },
  methods: {
    createSeekButton(label, seekTime) {
      const button = document.createElement('button');
      button.className = 'vjs-button custom-seek-button';
      button.innerHTML = `<span>${label}</span>`;
      button.addEventListener('click', () => {
        if (this.player) {
          const currentTime = this.player.currentTime();
          this.player.currentTime(currentTime + seekTime);
        }
      });
      return button;
    }
  },
  beforeUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

<style>
.player-container {
  max-width: 100%;
}
.video-js {
  max-width: 100%;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
.custom-seek-button {
  font-size: 14px;
  padding: 4px 8px;
  background: transparent;
  color: white;
}
</style>
