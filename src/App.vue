<template>
  <div class="bg-dark-header">
    <HeaderView company="Quanta Ops" msg="Brainstorm"/>
    <HeroSection />
    <Footer />
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue'
import HeroSection from './components/HeroSection.vue'
import Footer from './components/footer/footer.vue'

export default {
  name: 'App',
  components: {
    HeaderView,
    HeroSection,
    Footer,
  }
}
</script>

<style>
body {
  margin: 0px !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
