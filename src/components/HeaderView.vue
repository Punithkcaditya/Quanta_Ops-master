<template>
  <!-- <header class="header">
    <h1>{{ company }}</h1>
    <button>{{ msg }}</button>
  </header> -->

  <header  :class="['navbar', { scrolled: isScrolled }]" data-aos="fade-down" data-aos-duration="1000">
    <img src="@/assets/logo.png" alt="Logo" class="logo" />
    <div class="btn-wrapper">
      <img src="@/assets/line.png" alt="Line" class="line-img" />
      <button class="brainstorm-btn">
        <span>Brainstorm</span>
      </button>
    </div>
  </header>

</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    company: String,
    msg: String
  },
  data() {
    return {
      isScrolled: false, // Initially, no scroll
    };
  },
  mounted() {
    window.scrollTo(0, 0); // Ensure page loads at the top instantly
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 100; // Add class when scrolled past 50px
    },
  },
  watch: {
    isScrolled(newVal) {
      const navbar = document.querySelector('.navbar');
      if (newVal) {
        navbar.classList.add('aos-animate');
      } else {
        navbar.classList.remove('aos-animate');
      }
    },
  },
  computed: {
    isSticky() {
      return this.isScrolled ? 'sticky-on' : '';
    },
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: black;
  color: #D7D7E4;
}

/* .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
} */

.navbar {
  padding: 10px 20px;
}
.navbar.scrolled {
  position: fixed; /* only becomes fixed when scrolled */
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: transparent; /* Transparent at the start */
  transition: background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out;
  padding: 10px 20px;
  height: 60px;
  line-height: 60px; 
  background-color: rgba(0, 0, 0, 0.1); /* Dark background when scrolled */
  backdrop-filter: blur(10px); /* Optional blur effect */
}
.btn-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}
.line-img {
  height: 40px;
  width: auto;
  margin-right: 40px;
  margin-left: -40px;
}
.brainstorm-btn {
  height: 40px;
  color: #D7D7E4;
  border: none;
  padding: 10px 20px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 20px;
  background-color: #2c2c58;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brainstorm-btn span {
  font-family: 'Outfit', sans-serif;
  position: relative;
  z-index: 1;
  color: #D7D7E4;
  font-size: 15px;
}
.brainstorm-btn:hover {
  background: linear-gradient(270deg, #7B61FF, #4A3A99);
}

.line-img{
  margin-right: 14px; 
}
/* .navbar {
  opacity: 0; /* Ensure it's completely invisible 
  transition: opacity 0.5s ease-in-out, background-color 0.5s ease-in-out;
}  

.navbar.aos-animate {
  opacity: 1;
  background-color: #000; /* Change this to your desired color 
} 
*/

</style>
