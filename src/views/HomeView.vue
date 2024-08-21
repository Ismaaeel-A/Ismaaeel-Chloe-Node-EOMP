<template>
  <div class="home-container">
    <div id="protein-restock">
      <div class="shake-powder">
      <img src="https://chlowus.github.io/Nodejs.pictures/protein-banner(1)(1).png" alt="#">
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
      <img src="https://chlowus.github.io/Nodejs.pictures/shake%20image.png" alt="#">
      </div>
    </div>
    <div class="product-category">
      <center><h1 class="shop-via">Shop Via Categories:</h1></center>
      <div class="category-container">
        <a id="anchor" href="#"><button class="supplements">
          <h1 id="suppl">Supplements</h1>
          <img class="sup-icon" src="https://chlowus.github.io/Nodejs.pictures/sup.icon(1)(1).png" alt="">
        </button>
        </a>
        <a id="anchor" href="#">
        <button class="natural-food">
          <h1 id="suppl">Natural Food</h1>
          <img class="sup-icon" src="https://chlowus.github.io/Nodejs.pictures/natfood.icon(1)(1).png" alt="">
        </button>
        </a>
        <a id="anchor" href="#">
        <button class="fitness">
          <h1 id="suppl">Fitness</h1>
          <img class="sup-icon" src="https://chlowus.github.io/Nodejs.pictures/fitness.icon(1)(1).png" alt="">
        </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style>

#anchor{
  text-decoration: none;
}

.fitness{
  width: 20vw;
  height: 40vh;
  border-radius: 10px;
  background-color: #FF8175 ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
}

.natural-food{
  width: 20vw;
  height: 40vh;
  border-radius: 10px;
  background-color: #87CEEB ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
}


.category-container{
  display:flex ;
  flex-direction: row;
  justify-content: center;
  padding-top: 2vh;
  padding-bottom: 2vw;
  gap: 4em;
}

.supplements{
  width: 20vw;
  height: 40vh;
  border-radius: 10px;
  background-color: #FEB262 ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
}

#suppl{
  font-family: "DM Sans";
  color: #fff;
  font-size: 2vw;
  text-align: center;
  font-weight: 700;
  
}

.sup-icon{
  height: 10vw;
  padding-top: 1vw;
}

#protein-restock{
  width: 100%;
  height: 30vw;
  background-color: #FF8175 ;
  display:flex ;
  flex-direction: row;
  justify-content: center;
}

.Text, .shake-image, .shake-powder, h1, p, button{
  width:fit-content;
}


.Text{
  text-align: center;
  margin-left: 5vw;
}

.Text h1{
  text-align: center;
  align-content: center;
  font-family: "Anton";
  color: #87CEEB;
  text-shadow: 10px 10px rgb(32, 32, 32);
  font-size: 5vw;
  padding-top: 5vh;
}

.Text p{
  text-align: center;
  align-content: center;
  font-family: "DM Sans";
  color: #000000;
  font-size: 2vw;
  font-weight: 600;
  padding-top: 10vh;
}

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
  width: 34%;
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

.shake-powder img{
  height: 27vw;
  padding-top: 5rem;
  margin-left: 4vw;
}

.shake-image img{
 height: 30vw;
 padding-top: -20vh;
}

.shop-via{
  padding-top: 10vh;
  font-family: "DM Sans";
}


</style>
