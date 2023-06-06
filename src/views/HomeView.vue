

<template>
  <h1>Welcome to the Forum</h1>
  <AppDate/>
  <ThreadList :threads="threads" />
</template>

<script setup>
import sourceData from '@/data.json'
import ThreadList from '../components/ThreadList.vue'
import { ref, onMounted } from 'vue'
const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
const users = ref(sourceData.users)

function postById(postId) {
  return posts.value.find((p) => p.id === postId)
}
function userById(userId) {
  return users.value.find((p) => p.id === userId)
}

</script>
<style scoped>
</style>