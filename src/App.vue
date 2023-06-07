<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheNavbar from './components/TheNavbar.vue';
</script>

<template>
  <header>
   
    <div class="wrapper">
    
      <TheNavbar/>
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "assets/style.css";

</style>