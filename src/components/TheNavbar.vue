<template>
  <header class="header" id="header">

    <RouterLink :to="{name: 'home'}" class="logo">
         <IconTooling/>
    </RouterLink>

    <div class="btn-hamburger">

      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>


    <nav class="navbar">
      <ul>
        <li class="navbar-user">
          <RouterLink :to="{name: 'profile'}">
              <img class="avatar-small" :src="usersStore.authUser.avatar">
            <p>{{usersStore.authUser.name}}</p>
          
           
          </RouterLink>

        
          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item"><a href="profile.html">View profile</a></li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div>
        </li>
      </ul>


    </nav>
  </header>
</template>

<script setup>
import IconTooling from './icons/IconTooling.vue'

import { useUsersStore } from '../stores/UsersStore'

const usersStore = useUsersStore();

</script>

<style scoped>
</style>