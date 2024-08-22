<template>
    <div>
    <slot name="product-cards">
        <div class="row" v-for="product in products()" :key="product.prodID"></div>
        <div class="card" style="width: 18rem;">
            <img src="product.prodURL" class="card-img-top" alt="...">
           <div class="card-body">
            <div class="prodName">
             <h5 class="card-title">{{product.prodName}}</h5>
             </div>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </slot>
    </div>
</template>
<script>
export default {
name: "CardComp"
}
</script>
<style>
</style>
