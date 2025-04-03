<template>
    <section class="startyourjourney">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="pale_color" data-aos="flip-right" data-aos-easing="ease-in" data-aos-duration="1000">Start Your AI Journey!</h1>
                <p>Get your company ready for the <strong>Next Gen Operations</strong></p>
                <button class="start_button pulse-button">Brainstorm</button>
            </div>
        </div>
    </div>
    </section>
</template>


<script>
export default {
  name: "StartYourJourney",
};
</script>

<style scoped>
.startyourjourney .container{
    border-radius: 20px;
    background: #7171BA9E;
    padding: 7em;
}
.pale_color{
    color: #D7D7E4;
    font-size: 64px;
    font-weight: 400;
}
.start_button{
    border-radius: 16px;
    background: #1B1B23;
    color: #fff;
    padding: 10px 35px;
    font-size: 14px;
    margin-top: 2em;
    border: 1px solid #1B1B23;
}

.start_button:hover {
    background: linear-gradient(270deg, #7a60fc, #05050a);
    border: 1px solid #484877;
  }

  
  @keyframes pulse-ring {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.6;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }

  /* pulse effect */
  .pulse-button {
    cursor: pointer;
    overflow: hidden;
    animation: pulse-ring 1.5s infinite;
  }

  

  
</style>