<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <UserProfileCard :user="user" />
        <!-- <UserProfileCardEditor :user="user" /> -->
        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <div class="text-center">
          <hr />
          <a href="edit-profile.html" class="btn-green btn-small">Edit Profile</a>
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> Joker's recent activity </span>
          <a href="#">See only started threads?</a>
        </div>
        <hr />
        <PostList :posts="userPosts" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUsersStore } from '../stores/UsersStore'

import { useThreadsStore } from '../stores/ThreadsStore'
import { usePostsStore } from '../stores/PostsStore'
import { ref, computed, onMounted } from 'vue'

import PostList from '../components/PostList.vue'

import UserProfileCard from '../components/UserProfileCard.vue'
import UserProfileCardEditor from '../components/UserProfileCardEditor.vue'

const threadsStore = useThreadsStore()
const threads = computed(() => threadsStore.threads)

const postStore = usePostsStore()
const { posts } = storeToRefs(postStore)

const usersStore = useUsersStore()
const user = computed(() => {
  return usersStore.authUser
})

const userThreads = computed(() => {
  return threads.value.filter((post) => post.userId === usersStore.authId)
})

const userPosts = computed(() => {
  return posts.value.filter((post) => post.userId === usersStore.authId)
})

const userPostsCount = computed(() => {
  return user.value.postsCount
})

const userThreadsCount = computed(() => {
  return user.value.threadsCount
})
onMounted(() => {
  console.log('Component mounted!')
})
</script>