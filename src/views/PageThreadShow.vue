<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <!-- <div class="post-list">
      <div class="post" v-for="postId in thread.posts" :key="postId">
        <div class="user-info">
          <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>

          <a href="#">
            <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="" />
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>

        <div class="post-content">
          <div>
            <p>
              {{ postById(postId).text }}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{ postById(postId).publishedAt }}
        </div>
      </div>
    </div> -->
  </div>
  <PostList :posts="threadPosts()" />
</template>

<script setup>
import sourceData from '@/data.json'
import PostList from '../components/PostList.vue'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
const users = ref(sourceData.users)
const props = defineProps(['id'])
const route = useRoute()
const thread = computed(() => {
  return threads.value.find((th) => th.id === route.params.id)
})
// function postById(postId) {
//   return posts.value.find((p) => p.id === postId)
// }
// function userById(userId) {
//   return users.value.find((p) => p.id === userId)
// }
function threadPosts() {
  return posts.value.filter((post) => post.threadId === route.params.id)
}
onMounted(() => {
  // Code to be executed when the component is mounted
  console.log('Component mounted!')
});
</script>

<style scoped>
</style>