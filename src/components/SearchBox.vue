<template>
    <div class="search-container mt-9 mb-3" data-aos="fade-up" data-aos-easing="ease-in" data-aos-duration="1000">
      <div class="search-box">
        <span class="indicator"></span>
        <input type="text" placeholder="Initiate Quanta Ops...">
        <button class="search-btn">➜</button>
      </div>
      <textarea class="result-box"></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchBox",
  };
  </script>
  
  <style scoped>
  .search-container {
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 80%;
    margin: auto;
  }
  
  .search-box {
    background: url('@/assets/input_vector.png') no-repeat center center;
    background-size: contain;
    display: flex;
    align-items: center;
    /* background: #1a1a1a; */
    padding: 10px;
    border-radius: 50px;
    width: 100%;
    max-width: 500px;
    margin-bottom: 2em;
  }
  
  .search-box input {
    flex-grow: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #ccc;
    padding: 10px;
    font-size: 16px;
  }
  
  .search-btn {
    background: transparent;
    background: url('@/assets/arrow_vector.png') no-repeat center center;
    background-size: contain;
    border: none;
    color: #ccc;
    font-size: 18px;
    cursor: pointer;
  }
  
  .indicator {
    width: 12px;
    height: 12px;
    background: #7B61FFCC;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .result-box {
    margin-top: 20px;
    width: 100%;
    height: 250px;
    background: #222;
    border-radius: 10px;
  }

  .search-btn:hover {
    background: linear-gradient(270deg, #7B61FF, #4A3A99);
    border-radius: 18px;
  }
  </style>
  