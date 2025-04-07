<template>
    <div class="career-page">
      <!-- Navbar -->
      <HeaderView company="Quanta Ops" msg="Brainstorm"/>

   
      <!-- Hero Section -->
      <main class="content">
        <h1 class="title">
          Join our team and make a difference. Explore exciting career opportunities with us.
        </h1>
        <div class="btn-container">
          <button class="team">
            <span>Join Our Team</span>
          </button>
        </div>
        <div class="divider"></div>
   
        <!-- Career Opportunities Section -->
        <section class="career-opportunities">
          <div class="career-left">
            <h2>Career Opportunities</h2>
          </div>
          <div class="career-right">
            <div class="career-column">
              <div class="job-title">Software Engineer</div>
              <div class="job-title">UX Designer</div>
            </div>
            <div class="career-column">
              <div class="job-title">Product Manager</div>
              <div class="job-title">Data Scientist</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </template>
   
  <script>
import HeaderView from '../HeaderView.vue'
  import Footer from '../footer/footer.vue'
  export default {
    name: "CareerPage",
    components: {
      HeaderView,
      Footer,
    }
  };
  </script>
   
  <style scoped>
  /* Divider */
  .divider {
    width: 100vw; /* Full width */
    border-top: 1px solid #ffffff;
    margin: 40px 0;
    opacity: 0.6;
  }
   
  /* Career Page */
  .career-page {
    background-color: black;
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
   
  /* Navbar */
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: black;
  }
   
  .logo {
    width: 180px;
    height: auto;
  }
   
  .btn-wrapper {
    display: flex;
    align-items: center;
  }
   
  .line-img {
    height: 40px;
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
   
  /* Hero Section */
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 50px;
  }
   
  .title {
    font-family: Chivo, sans-serif;
    font-weight: 400;
    font-size: 73px;
    line-height: 83px;
    margin-bottom: 20px;
  }
   
  /* Centered Join Our Team Button */
  .btn-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
   
  .team {
    height: 40px;
    color: #D7D7E4;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    cursor: pointer;
    border-radius: 15px;
    background-color: #2c2c58;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
  }
   
  .career-opportunities {
    
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin: 0 0;
  }
   
  .career-left {
    
    flex: 1;
    text-align: left;
  }
   
  .career-left h2 {
    font-family: Chivo, sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
   
  .career-right {
    flex: 2;
    text-align: start;
    display: flex;
    gap: 180px;
    justify-content: flex-end;
    margin-right: 100px;
  }
   
  .career-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
   
  .job-title {
    font-family: Archivo, sans-serif;
    font-size: 18px;
    font-weight: 500;
  }
   
   
  /* Mobile Styles */
  @media (max-width: 768px) {
    .navbar {
      padding: 30px 20px;
    }
   
    .divider {
      opacity: 0;
    }
   
   
   
    .brainstorm-btn {
      height: 35px;
      font-size: 13px;
      padding: 8px 16px;
      border-radius: 18px;
    }
   
    .content {
      padding: 30px;
    }
   
    .title {
      font-size: 18px;
      line-height: 28px;
    }
   
    .career-opportunities {
      margin-top: 60px;
      flex-direction: column;
      align-items: flex-start;
    }
   
    .career-left {
      width: 100%;
      margin-bottom: 10px;
    }
   
    .career-right {
      margin-top: 30px;
      width: 100%;
      flex-direction: column;
      gap: 0px;
    }
   
    .career-column {
      margin-bottom: 10px;
    }
   
    .job-title {
      font-size: 16px;
    }
    .divider{
        margin: 16px 0;
    }
  }
  </style>
  