<template>
  <div class="about-container">
    <div class="title">
      <center><h1 class="french">Notre Histoire...</h1></center>
      <center><h1 class="heading">or should I say <b class="OS">Our Story</b></h1></center>
    </div>
    <center><div class="pierre-image">
      <img src="https://chlowus.github.io/Nodejs.pictures/pierre.jpeg" alt="">
    </div></center>
    <br>
    <div class="about-text">
      <p>Founded by <b class="PB">Pierre Borcelle</b>, a French enthusiast with a passion for health and happiness, Borcelle was created to make wellness both effective and enjoyable. Pierre’s journey from athlete to wellness aficionado led him to discover that great health products should also be fun.</p>
      <br>
      <h4 class="what-wo">What We Offer</h4>
      <p>
        At Borcelle, we curate a vibrant selection of supplements, nutrient-rich foods, and innovative fitness products, all designed to bring a smile to your wellness routine. Our quirky, modern style reflects our belief that taking care of yourself should be an exciting adventure.
      </p>
      <br>
      <h4 class="our-p">Our Philosophy</h4>
      <p> We’re dedicated to making wellness delightful and effective. With a blend of quality, charm, and a dash of French joie de vivre, we’re here to support your health goals in the most enjoyable way possible.
      </p>
      <br>
      <h4 class="join-tf">Join the Fun</h4>
      <p>Explore Borcelle and discover how wellness can be both exceptional and entertaining!</p>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .french{
     font-size: 3em;
     font-family: "DM Sans";
     color: #87CEEB;
     font-weight: 600;
     padding-top: 1vw;
  }

  .heading{
    font-size: 3em;
    font-family: "DM Sans";
    color: #000;
    font-weight: 600;
 }

 .OS{
  color: #87CEEB;
 }

 .pierre-image{
  padding-top: 4vw;
 }

 .pierre-image img{
  height: 35vw;
 }

 .about-text{
  padding-top: 4vw;
  width: 95vw;
  margin: auto;
  padding-bottom: 4vw;
 }

 .about-text p{
  font-family: poppins;
 }

 .PB{
  color: #87CEEB;
  font-family: "Russo One";
  font-size: 1.5vw;
 }

 .what-wo{
  font-family: "DM Sans";
  color: #FF8175;
  font-weight: 800;
 }

 .our-p{
  font-family: "DM Sans";
  color: #FEB262;
  font-weight: 800;
 }

 .join-tf{
  font-family: "DM Sans";
  color: #87CEEB;
  font-weight: 800;
 }
</style>
