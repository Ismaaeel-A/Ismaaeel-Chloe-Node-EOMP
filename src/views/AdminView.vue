<template>
    <div>
      <div class="table-responsive">
        <div v-if="products && products.length">
          <table class="table table-bordered table-hover table-dark">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.prodID">
                <td>{{ item.prodName }}</td>
                <td>{{ item.quantity }}</td>
                <td>R{{ item.amount }}</td>
                <td>{{ item.Category }}</td>
                <td><img :src="item.prodUrl" alt="Product Image" class="img-fluid"></td>
                <td>
                  <button class="btnes" @click="editProduct(item)">Edit</button>
                </td>
                <td>
                  <button class="btnes" @click="deleteProduct(item.prodID)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else>
          <SpinnerComp/>
        </div>
      </div>
  
      <div class="product-form">
        <h3>{{ editID ? 'Edit Product' : 'Add New Product' }}</h3>
        <input id="input" type="text" placeholder="Product Name" v-model="prodName" />
        <input id="input" type="number" placeholder="Quantity" v-model="quantity" />
        <input id="input" type="number" placeholder="Amount" v-model="amount" />
        <input id="input" type="text" placeholder="Category" v-model="Category" />
        <input id="input" type="text" placeholder="Image URL" v-model="prodUrl" />
        <button @click="saveProduct()" id="btn">{{ editID ? 'Update' : 'Add' }}</button>
      </div>
    </div>
  </template>
  
  <script>
  import SpinnerComp from '@/components/SpinnerComp.vue'; // Updated import
  import { mapState } from 'vuex';
  import { toast } from 'vue3-toastify';
  
  export default {
    components: {
      SpinnerComp, // Updated component name
    },
    data() {
      return {
        prodName: '',
        quantity: '',
        amount: '',
        Category: '',
        prodUrl: '',
        editID: null,
      };
    },
    computed: {
      ...mapState({
        products: state => state.products,
      }),
    },
    methods: {
      async fetchProducts() {
        await this.$store.dispatch('getProducts');
      },
      async deleteProduct(prodID) {
        try {
          await this.$store.dispatch('deleteProduct', prodID);
          toast.success('Product deleted successfully');
        } catch (error) {
          toast.error('Error deleting product');
        }
      },
      editProduct(product) {
        this.prodName = product.prodName;
        this.quantity = product.quantity;
        this.amount = product.amount;
        this.Category = product.Category;
        this.prodUrl = product.prodUrl;
        this.editID = product.prodID;
      },
      async saveProduct() {
        if (this.editID) {
          const updatedProduct = {
            prodID: this.editID,
            prodName: this.prodName,
            quantity: this.quantity,
            amount: this.amount,
            Category: this.Category,
            prodUrl: this.prodUrl,
          };
          try {
            await this.$store.dispatch('updateProduct', updatedProduct);
            toast.success('Product updated successfully');
          } catch (error) {
            toast.error('Error updating product');
          }
        } else {
          const newProduct = {
            prodName: this.prodName,
            quantity: this.quantity,
            amount: this.amount,
            Category: this.Category,
            prodUrl: this.prodUrl,
          };
          try {
            await this.$store.dispatch('addProduct', newProduct);
            toast.success('Product added successfully');
          } catch (error) {
            toast.error('Error adding product');
          }
        }
        this.resetForm();
      },
      resetForm() {
        this.prodName = '';
        this.quantity = '';
        this.amount = '';
        this.Category = '';
        this.prodUrl = '';
        this.editID = null;
      }
    },
    mounted() {
      this.fetchProducts();
    },
  };
  </script>
  
  <style scoped>
  .img-fluid {
    width: 35%;
    object-fit: contain;
    height: 175px;
  }
  
  #btn {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100px;
    height: 25px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: white;
    color: black;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .btnes {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100px;
    height: 25px;
    border-radius: 10px;
    border: 1px solid white;
    background: transparent;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }
  
  #input {
    font-size: 20px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 5px 0;
    background-color: transparent;
    outline: none;
    color: white;
  }
  
  #input::placeholder {
    color: white;
  }
  
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  .product-form {
    margin-top: 20px;
  }
  
  .product-form h3 {
    margin-bottom: 10px;
  }
  
  .product-form input {
    display: block;
    margin-bottom: 10px;
  }
  
  a details summary {
    list-style: none;
    cursor: default;
  }
  
  a {
    text-decoration: none;
    color: white;
  }
  </style>
  