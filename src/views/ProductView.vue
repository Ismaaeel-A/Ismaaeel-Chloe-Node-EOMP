<template>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div id="grad1" class="carousel-item active" data-bs-interval="3000">
        <img id="sup-image" src="https://chlowus.github.io/Nodejs.pictures/pillimage.png" class="d-block w-100" alt="...">
        <div class="content-wrapper">
          <h1 class="sup-text centered-text">Supplements</h1>
          <button class="c-button c-button--gooey">SHOP NOW
            <div class="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
      <div id="grad2" class="carousel-item" data-bs-interval="3000">
        <img id="nf-image" src="https://chlowus.github.io/Nodejs.pictures/NFimage.png" class="d-block w-100" alt="...">
        <div class="content-wrapper">
          <h1 class="natf-text centered-text">Natural Foods</h1>
          <button class="c-button c-button--gooey">SHOP NOW
            <div class="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
      <div id="grad3" class="carousel-item" data-bs-interval="3000" >
        <img id="f-image" src="https://chlowus.github.io/Nodejs.pictures/Fimage.png" class="d-block w-100" alt="...">
        <div class="content-wrapper">
          <h1 class="fit-text centered-text">Fitness</h1>
          <button class="c-button c-button--gooey">SHOP NOW
            <div class="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div class="search-etc">
    <center>
      <div class="search-container">
        <input class="search" type="text" v-model="searchTerm" placeholder="Search">
  
        <div class="button-container">
          <div class="filter-button">
            <button class="btn filter-btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filter
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click="setCategory('Supplements')">Supplements</a></li>
              <li><a class="dropdown-item" href="#" @click="setCategory('Natural Food')">Natural Foods</a></li>
              <li><a class="dropdown-item" href="#" @click="setCategory('Fitness')">Fitness</a></li>
              <li><a class="dropdown-item" href="#" @click="setCategory('')">All</a></li>
            </ul>
          </div>
  
          <div class="sort-button">
            <button class="btn sort-btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sort
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click="setSortBy('price')">Sort by Price</a></li>
              <li><a class="dropdown-item" href="#" @click="setSortBy('name')">Sort by Name</a></li>
            </ul>
          </div>
        </div>
      </div>
    </center>
  </div>
  
  <div class="card-container">
    <CardComp :search-term="searchTerm" :selected-category="selectedCategory" :sort-by="sortBy" />
  </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';
export default {
  components: {
    CardComp
  },
  data() {
    return {
      searchTerm: '',
      selectedCategory: '', // This will hold the selected category
      sortBy: ''
    };
  },
  methods: {
    setCategory(category) {
      this.selectedCategory = category;
    },
    setSortBy(sortCriteria) {
      this.sortBy = sortCriteria;
    }
  }
};
</script>

<style scoped>

.search-etc {
  margin-top: 5vw;
  font-family: "DM Sans";
}

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Allows items to wrap on smaller screens */
  gap: 1.5vw; /* Adds some space between elements */
}

.search {
  width: 50vw;
  height: 7vh;
  background-color: #ff81756f;
  border-radius: 10px;
  border: #FF8175 3px solid;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5vw;
}

.filter-btn,
.sort-btn {
  width: 8vw;
  height: 7vh;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  border: #87CEEB 3px solid;
  font-weight: 600;
  text-align: center;
}

.filter-btn:hover,
.sort-btn:hover {
  background-color: #87CEEB;
  color: #000;
}

.carousel-item {
  position: relative;
  width: 100%;
  height: 30vw;
}

.content-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}

.centered-text {
  color: white;
  font-size: 4vw;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 2vh;
}

.c-button {
  padding: 1vh 3vw;
  font-size: 1.5vw;
  border-radius: 10px;
  border: 3px solid #87CEEB;
  color: #FF8175;
  background-color: transparent;
  font-weight: 600;
  letter-spacing: 0.2vw;
  text-transform: uppercase;
  transition: all 0.7s ease;
}

.c-button:hover {
  color: #000;
  background-color: #87CEEB;
}

.c-button__blobs div {
  width: 300%;
  height: 200%;
  background-color: #87CEEB;
}

/* Button Styling */
.c-button--gooey {
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 4px solid #000;
  font-weight: 700;
  border-radius: 10px;
  position: relative;
  transition: all 700ms ease;
}

.c-button--gooey .c-button__blobs {
  height: 100%;
  filter: url(#goo);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: -3px;
  right: -1px;
  z-index: -1;
}

.c-button--gooey .c-button__blobs div {
  background-color: #cb4141;
  width: 304%;
  height: 100%;
  border-radius: 100%;
  position: absolute;
  transform: scale(1.4) translateY(125%) translateZ(0);
  transition: all 700ms ease;
}

.c-button--gooey .c-button__blobs div:nth-child(1) {
  left: -5%;
}

.c-button--gooey .c-button__blobs div:nth-child(2) {
  left: 30%;
  transition-delay: 60ms;
}

.c-button--gooey .c-button__blobs div:nth-child(3) {
  left: 66%;
  transition-delay: 25ms;
}

.c-button--gooey:hover {
  color: #000;
}

.c-button--gooey:hover .c-button__blobs div {
  transform: scale(1.4) translateY(0) translateZ(0);
}

/* Carousel image sizes */
#sup-image,
#nf-image,
#f-image {
  z-index: 1;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.sup-text,
.natf-text,
.fit-text {
  text-align: center;
  align-content: center;
  font-family: "Anton";
  color: #87CEEB;
  text-shadow: 10px 10px rgb(32, 32, 32);
  font-size: 5vw;
  padding-top: 5vh;
}

.natf-text{
  color: #FEB262 !important;
}

.fit-text{
  color: #87CEEB !important;
}

#grad1 {
  background-color: #FEB262;
}

#grad2 {
  background-color: #87CEEB;
}

#grad3 {
  background-color: #FF8175;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 1024px) {
  .search {
    width: 60vw;
    height: 6vh;
  }

  .filter-btn,
  .sort-btn {
    width: 15vw;
    height: 6vh;
    font-size: 1rem;
  }

  .centered-text {
    font-size: 6vw;
  }

  .carousel-item {
    height: 40vw;
  }

  .c-button {
    padding: 1.2vh 3.5vw;
    font-size: 2vw;
  }
}

@media (max-width: 768px) {
  .search {
    width: 80vw;
    height: 5.5vh;
  }

  .filter-btn,
  .sort-btn {
    width: 20vw;
    height: 5.5vh;
    font-size: 0.9rem;
  }

  .centered-text {
    font-size: 8vw;
  }

  .carousel-item {
    height: 50vw;
  }

  .c-button {
    padding: 1.5vh 4vw;
    font-size: 3vw;
  }
}

@media (max-width: 480px) {
  .search {
    width: 90vw;
    height: 5vh;
  }

  .filter-btn,
  .sort-btn {
    width: 40vw;
    height: 5vh;
    font-size: 0.8rem;
  }

  .centered-text {
    font-size: 10vw;
  }

  .carousel-item {
    height: 35vw;
  }

  .sup-text, .natf-text, .fit-text{
    font-size: 8vw;
    text-shadow: 7px 7px 7px rgba(0, 0, 0, 0.5);
  }

  .c-button {
    padding: 2vh 5vw;
    font-size: 1.5vw;
    font-size: 2.3vw;
    margin-bottom: 1.5vw;
  }
}
</style>
