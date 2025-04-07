<template>     
      <footer class="footer">
        <div class='container'>
            <div class="footer-container">
                <div class="footer-left">
                  <img src="@/assets/logo.png" alt="Company Logo" class="logo" />
                  <div class="social-icons desktop-view">
                    <img src="@/assets/facebook.png" alt="Facebook" />
                    <img src="@/assets/instagram.png" alt="Instagram" />
                    <img src="@/assets/twitter.png" alt="Twitter" />
                  </div>
                </div>
                <div class="footer-sections">
                  <div class="footer-section">
                    <h3 class="section-title">Company</h3>
                    <ul>
                      <li><a href="#">About</a></li>
                      <li><a href="careers">Careers</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                  <div class="footer-section">
                    <h3 class="section-title">Solutions</h3>
                    <ul>
                      <li><a href="#">AI Solutions</a></li>
                      <li><a href="#">Data Security</a></li>
                      <li><a href="#">Process Optimization</a></li>
                      <li><a href="#">Innovation</a></li>
                    </ul>
                  </div>
                  <div class="footer-section">
                    <h3 class="section-title">Resources</h3>
                    <ul>
                      <li><a href="#">Help Center</a></li>
                      <li><a href="privacy_policy">Privacy Policy</a></li>
                      <li><a href="terms_of_service">Terms of Service</a></li>
                    </ul>
                  </div>
                </div>
              </div>

        </div>
        
        <div class="social-icons mobile-view">
          <img src="@/assets/facebook.png" alt="Facebook" />
          <img src="@/assets/instagram.png" alt="Instagram" />
          <img src="@/assets/twitter.png" alt="Twitter" />
        </div>
        <div class="footer-bottom">
          <p>Copyright 2025 | All rights reserved by Kots daily Services Pvt Ltd</p>
        </div>
      </footer>
  </template>
  
  <style scoped>
  .page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .footer {
    background: black;
    color: #D7D7E4;
    padding: 20px 70px;
    font-family: 'Outfit', sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 0%;
    margin-top: auto;
  }
  .footer-container {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .footer-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 40px;
  }
  .logo {
    width: 150px;
  }
  .social-icons {
    margin-top: 105px;
    display: flex;
    gap: 10px;
  }
  .social-icons img {
    width: 20px;
  }
  .footer-sections {
    display: flex;
    gap: 170px;
    justify-content: center;
    flex-grow: 1;
  }
  .footer-section ul {
    list-style: none;
    padding: 0;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: justify;
  }
  .footer-section a {
    text-decoration: none;
    color: #7171BA9E;
  }
  .section-title {
    font-size: 15px;
    margin-top: 0px;
    color: #D7D7E4;
    text-align: justify;
  }
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 11px;
    color: #D7D7E4;
  }
  .desktop-view {
    display: flex;
  }
  .mobile-view {
    display: none;
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
  @media (max-width: 768px) {
    .footer {
      padding: 20px 20px;
    }
    .footer-container {
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      gap: 20px;
    }
    .footer-left {
      align-items: flex-start;
      margin-right: 0;
    }
    .footer-sections {
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
    }
    .footer-section ul {
      gap: 5px;
    }
    .desktop-view {
      display: none;
    }
    .mobile-view {
      display: flex;
      justify-content: flex-start;
      margin-top: 10px;
      margin-left: 0.8em;
    }
    .footer-bottom {
      margin-top: 2em;
    }
    .footer-bottom p {
      margin-bottom: 0.5em;
    }
  }
  </style>
  