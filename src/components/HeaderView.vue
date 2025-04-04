<template>
  <!-- <header class="header">
    <h1>{{ company }}</h1>
    <button>{{ msg }}</button>
  </header> -->

  <header class="navbar sticky-on aos-init aos-animate" data-aos="fade-down" data-aos-duration="1500">
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
  }
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

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: black;
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

</style>
