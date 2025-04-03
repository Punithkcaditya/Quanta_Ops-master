<template>
  <section class="features">
    <div class="container text-center">
      <h2 class="mb-4" data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1000">10X Faster | 10X Efficient | 10X Secure</h2>
  
      <div class="row">
        <!-- Speed Feature -->
        <div class="col-md-7 mb-4">
          <div class="feature-card p-4">
            <h3>Speed</h3>
            <p>Deploy your intelligence solutions 10X faster.</p>
            <div class="d-flex-center gap-3 mt-5em symbol-div">
              <div class="icon icon-star">⌘</div>
              <div class="icon icon-Q">Q</div>
            </div>
          </div>
        </div>
  
        <!-- Efficiency Feature -->
          <div class="col-md-5 mb-4">
              <div class="feature-card pb-0">
                <h3>Efficiency</h3>
                <p>Optimize processes with 10X more efficiency.</p>
                <div class="feature-image symbol-div">
                  <div class="mockup-screen"></div>
                  <div class="badge process-optimization">
                    <span>
                      <img src="@/assets/tools.png" alt="screw" class="icon-screw" />
                      Process Optimization
                    </span>                    
                  </div>
                  <div class="badge data-analysis">
                    <span>  <img src="@/assets/bar-chart.png" alt="screw" class="bar-chart" /> Data Analysis</span>
                  </div>
                </div>
              </div>
          </div>
      </div>

      <div class="row">
        <!-- Efficiency Feature -->
          <div class="col-md-5 mb-4">
              <div class="feature-card pb-0">
                <h3>Security</h3>
                <p>Ensure your data is 10X more secure.</p>
                <div class="feature-image symbol-div">
                  <div class="mockup-screen"></div>
                  <div class="badge_2 process-optimization">
                    <span>
                      <img src="@/assets/secure-data.png" alt="screw" class="icon-screw" />
                    </span>                    
                  </div>
                </div>
              </div>
          </div>

           <!-- Speed Feature -->
       <div class="col-md-7 mb-4">
        <div class="feature-card p-4 pb-0">
          <h3>Innovation</h3>
          <p>Drive innovation with cutting-edge AI solutions.</p>
          <div class="d-flex-center gap-3 mt-6 data-interlinked">

          </div>
        </div>
      </div>
      </div>

      
    </div>
  </section>

  <!-- ai agent section start -->

  <!-- ai agent section end -->
         
</template>


<script>
export default {
  name: "EfficientSection",
};
</script>
<style scoped>
.features {
  text-align: center;
  color: #D7D7E4;
  padding: 100px 0px;
  background: #0d0d0d;
  margin-top: -7em;
  padding-top: 15em;
}

.features h2 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #D7D7E4;
}

.features-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.feature-card {
  overflow: hidden;
  background: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  text-align: left;
}

.feature-card h3 {
  font-size: 25px;
  margin-bottom: 10px;
  color: #D7D7E4;
}

.feature-card p {
  font-size: 20px;
  color: #D7D7E4;
}

.icons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.icon {
  background: #000000;
  color: #D7D7E4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 55px;
}

.icon-star, .icon-Q {
  color: #D7D7E4;
  display: flex; /* Ensures centering works */
  justify-content: center;
  align-items: center;
  font-family: 'Domine', serif; /* Ensure Domine is available */
  font-size: 120px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1; /* 106.667% -> Converted */
  letter-spacing: -2.4px;
}


.image-overlay {
  position: relative;
  margin-top: 20px;
  background: #222;
  border-radius: 10px;
  padding: 40px 10px;
}

.tag {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  color: #D7D7E4;
  margin-right: 5px;
}

 /* Mobile Style */
 .feature-card {
  background: #18181B;
  color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  font-family: 'Domine', serif;
}

h3 {
  font-size: 18px;
  font-weight: bold;
}

p {
  font-size: 14px;
  margin-bottom: 15px;
  color: #D7D7E4;
}

.feature-image {
  position: relative;
  background: url('@/assets/mobile-mockup.png') no-repeat center center;
  background-size: contain;
  border-radius: 12px;
  height: 330px;
  padding: 20px;
}


.data-interlinked {
  position: relative;
  /* background: url('@/assets/image_div.png') no-repeat center center; */
  background: url('@/assets/image_div.png') no-repeat center 60%;
  /* background-size: contain; */
  border-radius: 12px;
  height: 245px;
  padding: 20px;
  background-size: 94% 102%;
}

.mockup-screen {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  /*background: linear-gradient(135deg, #1F1F23, #2A2A31); */
}

.badge {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  color: #D7D7E4;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}


.badge_2 {
  position: absolute;
  color: #D7D7E4;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
}


.process-optimization {
  top: 50%;
  right: -2em;
  transform: translateY(-50%);
}

.data-analysis {
  bottom: 10px;
  left: -2em;
}
</style>
