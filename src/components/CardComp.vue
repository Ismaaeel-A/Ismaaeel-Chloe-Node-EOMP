<template>
    <div class="p-cards">
      <slot name="product-cards">
        <div class="card" v-for="product in sortedProducts" :key="product.prodID" style="width: 18rem;">
          <img :src="product.prodUrl" class="card-img-top" />
          <div class="card-body">
            <center>
              <div class="prodName">
                <h4 class="card-title">{{ product.prodName }}</h4>
              </div>
              <h4 class="card-price">R{{ product.amount }}</h4>
              <router-link :to="{ name: 'product', params: { id: product.productID } }">
                <a href="#" class="btn btn-primary">View More</a>
              </router-link>
            </center>
          </div>
        </div>
      </slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardComp",
    props: {
      searchTerm: {
        type: String,
        default: ""
      },
      selectedCategory: {
        type: String,
        default: ""
      },
      sortBy: {
        type: String,
        default: "" // Will hold 'price' or 'name' based on user selection
      }
    },
    data() {
      return {
        category: []
      };
    },
    computed: {
      filteredProducts() {
        const search = this.searchTerm.trim().toLowerCase();
        const category = this.selectedCategory;
        
        // Ensure products are available before filtering
        const products = this.myProducts() || [];
        
        // Filter by search term and category
        return products.filter(product => {
          const matchesSearch = product.prodName.toLowerCase().includes(search);
          const matchesCategory = category === '' || product.Category === category;
          return matchesSearch && matchesCategory;
        });
      },
      sortedProducts() {
        // First filter the products, then sort them
        let products = [...this.filteredProducts];
        
        if (this.sortBy === 'price') {
          products.sort((a, b) => a.amount - b.amount);
        } else if (this.sortBy === 'name') {
          products.sort((a, b) => a.prodName.localeCompare(b.prodName));
        }
        
        return products;
      }
    },
    methods: {
      getProducts() {
        return this.$store.dispatch('getProducts');
      },
      myProducts() {
        return this.$store.state.products;
      }
    },
    mounted() {
      this.getProducts();
    }
  };
  </script>   
  
<style scoped>

.p-cards {
    width: 90vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2vw;
    place-items: center;
    margin: auto;
}

.card {
    width: 100%; /* Let the card take full width of the grid cell */
    max-width: 400px; /* Maximum width for large screens */
    margin-top: 2vw;
    margin-bottom: 2vw;
    background-color: #edeaea72;
    border: #87cfeb58 2px solid;
    border-radius: 30px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
}

.card-title {
    font-family: "DM Sans";
    font-weight: 600;
}

.card-price {
    font-family: "Anton";
    -webkit-text-fill-color: #FF8175;
    -webkit-text-stroke: black 0.1px;
    text-shadow: 4px 4px rgba(32, 32, 32, 0.586);
    padding-top: 2vw;
    padding-bottom: 1vw;
    font-weight: 800;
}

.btn {
    height: auto;
    width: 70%;
    background-color: #FEB262;
    border: #f79124 1px solid;
    font-size: 1.2vw;
}

.btn:hover {
    background-color: #f79124;
    border: #f79124 1px solid;
}

@media (max-width: 1024px) {
    .p-cards {
        grid-template-columns: repeat(2, 1fr);
    }

    .btn {
        font-size: 2vw;
    }
}

@media (max-width: 768px) {
    .p-cards {
        grid-template-columns: 1fr;
    }

    .card {
        max-width: 90vw;
    }

    .btn {
        font-size: 3.5vw;
    }
}


/* Mobile devices */
@media (max-width: 480px) {
    .p-cards {
        grid-template-columns: 1fr;
    }

    .card {
        width: 90vw !important;
    }

    .btn{
        height: 9vw;
        width: 30vw;
        font-size: 4vw;
    }
}

</style>
