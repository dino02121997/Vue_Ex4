<template>
  <div class="NotFound">
    <h1>404 not found</h1>
     <RouterLink :to="{name: 'home'}">backhome</RouterLink>
           
  </div>
</template>

<script setup>

import { RouterLink } from 'vue-router'
</script>
