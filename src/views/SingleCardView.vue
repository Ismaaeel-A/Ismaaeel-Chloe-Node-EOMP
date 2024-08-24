<template>
    <div class="go-b-btn">
      <router-link to="/product">
        <button class="c-button c-button--gooey"> Go Back
          <div class="c-button__blobs">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </router-link>
    </div>
  
    <div class="product-container" v-if="product">
      <div class="main-content">
        <div class="product-nid">
          <img :src="product.prodUrl" class="card-img-top" alt="Product Image" />
          <div class="product-info">
            <h4 class="card-title">{{ product.prodName }}</h4>
            <p>{{ product.prodDescription }}</p>
          </div>
        </div>
  
        <div class="side-content">
          <div class="p-price-q">
            <div class="price-quantity">
              <h4>Price: R{{ product.amount }} </h4>
              <h6>Available: {{ product.quantity }}</h6>
            </div>
          </div>
  
          <div class="p-ingredients">
            <div class="ingredients-list">
              <h4>Ingredients</h4>
              <ul>
                <li v-for="(ingredient, index) in product.prodIngredients.split(', ')" :key="index">{{ ingredient }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </template>  
  
  <script>
  export default {
    data() {
      return {
        product: null,
      };
    },
    async created() {
      const productId = this.$route.params.id;
      try {
        const response = await fetch(`https://ismaaeel-chloe-node-eomp.onrender.com/products`);
        const data = await response.json();
  
        if (response.ok) {
          this.product = data.results.find((prod) => prod.prodID === parseInt(productId));
        } else {
          console.error("Error fetching product:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    }
  };
  </script>
  
  <style scoped>
.product-container {
  margin-top: 2vw;
  padding: 2vw;
}

.main-content {
  display: flex;
  align-items: stretch;
}

.product-nid {
  display: flex;
  background-color: #87ceeb;
  border-radius: 30px;
  width: 60%;
  padding: 2vw;
  box-sizing: border-box;
  margin-right: 2vw; 
}

.card-img-top {
  width: 40%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
}

.product-info {
  margin-left: 2vw;
  width: 55%;
}

.card-title {
  font-size: 1.5vw;
  margin-bottom: 1vw;
}

.product-info p {
  font-size: 1.2vw;
}

.side-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
}

.p-price-q, .p-ingredients {
  background-color: #ff8175;
  border-radius: 30px;
  padding: 2vw;
  box-sizing: border-box; 
}

.p-price-q {
  background-color: #ff8175;
  margin-bottom: 2vw;
}

.p-ingredients {
  background-color: #feb262;
}

.price-quantity {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price-quantity h4 {
  margin-bottom: 1vw;
  font-size: 1.5vw;
}

.price-quantity h6 {
  font-size: 1.2vw;
}

.ingredients-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ingredients-list h4 {
  margin-bottom: 1vw;
  font-size: 1.5vw;
}

.ingredients-list ul {
  padding: 0;
  list-style-type: none;
}

.ingredients-list ul li {
  font-size: 1.2vw;
  margin-bottom: 0.5vw;
}
</style>
