<template>
  <div class="sticky-top">
    <nav class="navbar  navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="nav-logo" href="#">
          <img
            src="https://chlowus.github.io/Nodejs.pictures/Beige%20Modern%20Health%20and%20Wellness%20Logo%20(1).png"
            alt="logo"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link
              class="nav-link"
              :class="{ active: activeLink === 'home' }"
              to="/"
              @click="setActive('home')"
              >Home</router-link
            >
            <router-link
              class="nav-link"
              :class="{ active: activeLink === 'product' }"
              to="/product"
              @click="setActive('product') && collapseNavbar()"
              >Product</router-link
            >
            <router-link
              class="nav-link"
              :class="{ active: activeLink === 'about' }"
              to="/about"
              @click="setActive('about')"
              >About</router-link
            >
            <router-link
              class="nav-link"
              :class="{ active: activeLink === 'contact' }"
              to="/contact"
              @click="setActive('contact')"
              >Contact</router-link
            >
            <router-link
              class="nav-link"
              :class="{ active: activeLink === 'admin' }"
              to="/admin"
              @click="setActive('admin')"
              >Admin</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeLink: '',
      };
    },
    methods: {
      setActive(link) {
        this.activeLink = link;
      },
      collapseNavbar() {
      if (window.innerWidth < 992) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    }
  
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Russo+One&display=swap');
  
  .navbar {
    background-color: #f8f8f8b3 !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
  }
  
  .nav-logo {
    flex: 0 0 auto; /* Prevents the logo from taking extra space */
  }
  
  .nav-logo img {
    width: 200px;
  }
  
  .navbar-collapse {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  
  .navbar-nav {
    display: flex;
    align-items: center;
  }
  
  .nav-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 25px;
    font-weight: 600;
    color: #000;
    transition: transform 0.3s ease, color 0.3s ease;
    margin: 0 15px;
  }
  
  .nav-link.active {
    transform: scale(1.2);
    color: #87ceeb !important;
  }
  
  .nav-link:hover {
    color: #ff8175;
  }
  </style>
  