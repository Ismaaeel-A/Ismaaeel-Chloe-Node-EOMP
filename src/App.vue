<template>
  <nav>
    <div class="wrapper">
      <NavBarComp/>
    <main>
      <router-view />
    </main>
    <!-- Footer -->
  </div>
  </nav>
</template>
<script>
import NavBarComp from '@/components/NavBarComp.vue'

// import HomeView from '@/views/HomeView.vue'
export default{
  components:{
    NavBarComp,
  }
}
</script>
<style>

</style>
