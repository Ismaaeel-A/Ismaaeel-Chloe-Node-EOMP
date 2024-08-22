<template>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div id="grad1" class="carousel-item active" data-bs-interval="10000">
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
      <div id="grad2" class="carousel-item" data-bs-interval="2000">
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
      <div id="grad3" class="carousel-item">
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
    <input class="search" type="text">
    <button class="filter-btn" @click="Filter">Filter</button>
    <button class="sort-btn">Sort</button>
    </center>
  </div>

  <div class="card-container">
    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.search-etc{
  margin-top: 5vw;
  align-items: center;
  font-family: "DM Sans";
}

.search {
  width: 50vw;
  height: 7vh;
  background-color: #ff81756f;
  border-radius: 10px;
  border: #FF8175 3px solid;
  margin-right: 2vw;
}

.filter-btn, .sort-btn{
  width: 8vw;
  height: 7vh;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  border: #87CEEB 3px solid;
  font-weight: 600;
  margin-right: 2vw;
}

.filter-btn:hover{
  width: 8vw;
  height: 7vh;
  background-color: #87CEEB;
  color: #000;
  border-radius: 10px;
  border: #87CEEB 3px solid;
}

.sort-btn:hover{
  width: 8vw;
  height: 7vh;
  background-color: #87CEEB;
  color: #000;
  border-radius: 10px;
  border: #87CEEB 3px solid;
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
  margin-bottom: 20px;
}

#sup-image,
#nf-image,
#f-image {
  z-index: 1;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.sup-text{
  text-align: center;
  align-content: center;
  font-family: "Anton";
  color: #87CEEB;
  text-shadow: 10px 10px rgb(32, 32, 32);
  font-size: 5vw;
  padding-top: 5vh;
}

.natf-text{
  text-align: center;
  align-content: center;
  font-family: "Anton";
  color: #FEB262;
  text-shadow: 10px 10px rgb(32, 32, 32);
  font-size: 5vw;
  padding-top: 5vh;
}

.fit-text{
  text-align: center;
  align-content: center;
  font-family: "Anton";
  color: #87CEEB;
  text-shadow: 10px 10px rgb(32, 32, 32);
  font-size: 5vw;
  padding-top: 5vh;
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

/* Button Styling */
.c-button {
  color: #000;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  padding: 0.9em 1.6em;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  z-index: 1;
}

.c-button--gooey {
  color: #FF8175;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 4px solid #87CEEB;
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
  background-color: #87CEEB;
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
</style>