<template>
  <nav>
    <div class="wrapper">
      <NavBarComp/>
    <main>
      <router-view />
    </main>
    <FooterComp class="fixed-bottom"/>
  </div>
</nav>
</template>
<script>
import NavBarComp from '@/components/NavBarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

// import HomeView from '@/views/HomeView.vue'
export default{
  components:{
    NavBarComp,
    FooterComp
  }
}
</script>
<style>

</style>
