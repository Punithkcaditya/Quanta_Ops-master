<template>
    <!-- <header class="header">
      <h1>{{ company }}</h1>
      <button>{{ msg }}</button>
    </header> -->
    <div class="bg-dark-header">
    <HeaderView company="Quanta Ops" msg="Brainstorm"/>
    <main class="content">
      <h1 class="title">Privacy Policy for Quanta Ops</h1>
      <section class="policy-text">
        <h2>1. Introduction</h2>
        <p>Welcome to Quanta Ops ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://www.quantaops.com">www.quantaops.com</a> or use our services. Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.</p>
  
        
        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <p>We may collect personal information that you voluntarily provide to us when you:</p>
        <ul>
          <li>Register for an account</li>
          <li>Sign up for our newsletter</li>
          <li>Contact us through our website</li>
          <li>Participate in surveys or promotions</li>
          <li>Use our products or services</li>
        </ul>
        <p>This information may include:</p>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name and position</li>
          <li>Billing and payment information</li>
          <li>Any other information you choose to provide</li>
        </ul>
        
        <h3>2.2 Automatically Collected Information</h3>
        <p>When you visit our website, we automatically collect certain information about your device and usage patterns, including:</p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Device information</li>
          <li>Pages visited and time spent</li>
          <li>Referral sources</li>
          <li>General geographic location (country or city)</li>
        </ul>
        
        <h3>2.3 Cookies and Similar Technologies</h3>
        <p>We use cookies, web beacons, pixels, and similar tracking technologies to collect information about your browsing activities. These technologies help us analyze website traffic, customize content, and improve your experience. You can control cookie settings through your browser preferences.</p>
        
        <h2>3. How We Use Your Information</h2>
        <p>We may use the information we collect for various purposes, including to:</p>
        <ul>
          <li>Provide, maintain, and improve our website and services</li>
          <li>Process transactions and send related information</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Send you technical notices, updates, security alerts, and support messages</li>
          <li>Communicate with you about products, services, offers, and events</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Detect, prevent, and address technical issues</li>
          <li>Comply with legal obligations</li>
        </ul>
        <h2>4. Data Sharing and Disclosure</h2>
          <p>We may share your information with:</p>
          <h3>4.1 Service Providers</h3>
          <p>Third-party vendors and service providers who need access to your information to help us provide our services (e.g., payment processors, cloud hosting providers, email service providers).</p>
          <h3>4.2 Business Transfers</h3>
          <p>If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</p>
          <h3>4.3 Legal Requirements</h3>
          <p>If required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</p>
          <h3>4.4 With Your Consent</h3>
          <p>We may share your information with third parties when you have given us your consent to do so.</p>
  
          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please understand that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
  
          <h2>6. Data Retention</h2>
          <p>We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
  
          <h2>7. Your Privacy Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, which may include:</p>
          <ul>
            <li>Right to Access: You can request copies of your personal information.</li>
            <li>Right to Rectification: You can request that we correct inaccurate information.</li>
            <li>Right to Erasure: You can request that we delete your personal information.</li>
            <li>Right to Restrict Processing: You can request that we limit how we use your data.</li>
            <li>Right to Data Portability: You can request that we transfer your information to another organization.</li>
            <li>Right to Object: You can object to our processing of your information.</li>
          </ul>
          <p>To exercise any of these rights, please contact us using the information provided in the "Contact Us" section.</p>
  
          <h2>8. Children's Privacy</h2>
          <p>Our website and services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will delete such information from our systems.</p>
  
          <h2>9. International Data Transfers</h2>
          <p>Your information may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that are different from those in your country. We have taken appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy.</p>
  
          <h2>10. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. We encourage you to read the privacy policy of every website you visit.</p>
  
          <h2>11. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
  
          <h2>12. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
          <p>Quanta Ops<br />[YOUR COMPANY ADDRESS]<br />Email: [YOUR PRIVACY EMAIL ADDRESS]<br />Phone: [YOUR PHONE NUMBER]</p>
      </section>
    </main>
    <Footer />
  </div>
  
  </template>
    <script>
    import HeaderView from '../HeaderView.vue'
    import Footer from '../footer/footer.vue'
    export default {
    name: 'Privacypolicy',
    components: {
      HeaderView,
      Footer,
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
    padding: 20px 40px; /* Default padding for desktop */
    background-color: black; /* Border for desktop */
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
  .content {
    padding: 50px;
    background-color: black;
    color: white;
  }
  .title {
    color: white;
    font-family: Chivo, sans-serif;
    font-weight: 700;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: -2%;
    text-align: center;
    margin: 30px;
  }
  .policy-text {
    color: white;
    margin: 100px auto;
    text-align: justify;
  }
  .policy-text h2, .policy-text h3 {
    color: white;
    font-family: Archivo, sans-serif;
    font-weight: 500;
    margin-top: 75px;
  }
  .policy-text h3 {
    color: white;
    font-family: Archivo, sans-serif;
    font-weight: 500;
    margin-top: 30px;
  }
  .policy-text p, .policy-text ul {
    margin-bottom: 0;
    color: white;
    font-family: Archivo, sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 28px;
  }
  .policy-text li {
    color: white;
    font-family: Archivo, sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 28px;
  }
  @media (max-width: 1024px) {
    .title {
        font-size: 41px !important; /* Reduce font size */
  }
  }
  /* Mobile view adjustments */
  @media (max-width: 768px) {
    .navbar {
      padding: 30px 20px; /* Adjusted padding */
      border-bottom: none; /* Remove bottom border on mobile */
    }
  
    .logo {
      width: 180px;
      height: auto; /* Resize logo for mobile */
    }
  
    .btn-wrapper {
      display: flex;
      align-items: center;
    }
  
    .line-img {
      height: 30px; /* Reduce line image size */
      margin-right: 60px;
      margin-left: -20px;
    }
  
    .brainstorm-btn {
      height: 35px; 
      font-size: 13px; /* Adjust button text */
      padding: 8px 16px;
      border-radius: 18px;
    }
  
    .content {
      padding: 30px; /* Reduce padding for smaller screens */
    }
  
    .title {
      font-size: 20px !important; /* Reduce font size */
      line-height: 28px !important;
      margin: 0px;
      text-align: center;
    }
  
    .policy-text {
      margin: 50px auto;
    }
  
    .policy-text h2 {
      font-size: 15px;
      font-size: 20px;
      margin-top: 50px;
    }
  
    .policy-text h3 {
      font-size: 15px;
      margin-top: 25px;
    }
  
    .policy-text p,
    .policy-text ul,
    .policy-text li {
      font-size: 15px; /* Slightly smaller font for readability */
      line-height: 24px;
    }
}
 
  
  </style>