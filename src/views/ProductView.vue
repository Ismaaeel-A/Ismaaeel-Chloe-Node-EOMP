<template>
    <div class="carousel">
      <div class="carousel-inner" ref="carouselInner">
        <!-- First Slide: Protein Restock -->
        <div class="carousel-item" id="protein-restock">
          <div class="shake-powder">
            <img src="https://chlowus.github.io/Nodejs.pictures/protein-banner(1)(1).png" alt="Protein Banner">
          </div>
          <div class="Text">
            <center><h1>Protein Restock</h1></center>
            <p>ALL YOUR FAVOURITE SHAKES ARE BACK IN STOCK!</p>
            <button class="c-button c-button--gooey"> SHOP NOW
              <div class="c-button__blobs">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: block; height: 0; width: 0;">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                  <feBlend in="SourceGraphic" in2="goo"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
          <div class="shake-image">
            <img src="https://chlowus.github.io/Nodejs.pictures/shake%20image.png" alt="Shake Image">
          </div>
        </div>
  
        <!-- Additional Slides -->
        <div class="carousel-item">
          <!-- Content for the second slide -->
        </div>
        <div class="carousel-item">
          <!-- Content for the third slide -->
        </div>
      </div>
      <button class="prev" @click="prevSlide">&lt;</button>
      <button class="next" @click="nextSlide">&gt;</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const carouselInner = ref(null);
      const carouselItems = ref([]);
  
      const updateCarousel = () => {
        if (!carouselInner.value) return;
        const offset = -carouselIndex.value * 100; // Width of carousel-item in percentage
        carouselInner.value.style.transform = `translateX(${offset}%)`;
      };
  
      const prevSlide = () => {
        carouselIndex.value = (carouselIndex.value > 0) ? carouselIndex.value - 1 : carouselItems.value.length - 1;
        updateCarousel();
      };
  
      const nextSlide = () => {
        carouselIndex.value = (carouselIndex.value < carouselItems.value.length - 1) ? carouselIndex.value + 1 : 0;
        updateCarousel();
      };
  
      const carouselIndex = ref(0);
  
      onMounted(() => {
        carouselItems.value = Array.from(carouselInner.value.querySelectorAll('.carousel-item'));
        updateCarousel();
      });
  
      return {
        carouselInner,
        carouselItems,
        prevSlide,
        nextSlide,
      };
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    min-width: 100%; /* Adjust to your needs */
    box-sizing: border-box;
  }
  
  #protein-restock {
    width: 100%;
    height: 30vw;
    background-color: #FF8175;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
  /* Your existing styles for #protein-restock and other elements */
  .Text, .shake-image, .shake-powder, h1, p, button {
    width: fit-content;
  }
  
  /* Add other styles as needed */
  </style>  