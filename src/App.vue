<template>
  <nav>
    <div class="wrapper">
      <NavBarComp/>
      <main>
      <router-view />
    </main>
    <FooterComp class=""/>
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
@import url('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Russo+One&display=swap');
</style>
