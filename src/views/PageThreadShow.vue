<template>
  <div v-if="thread" class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <PostList :posts="threadPosts" />
    <!-- <div class="col-full">
      <form @submit.prevent="addPost">
        <div class="form-group">
          <textarea v-model="newPostText" name="" id="" cols="30" rows="10" class="form-input" />
        </div>
        <div class="form-actions">
          <button class="btn-blue">Submit post</button>
        </div>
      </form>
    </div> -->
     <PostEditor @save="addPost"/>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import PostList from '../components/PostList.vue'
import PostEditor from '../components/PostEditor.vue'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const threads = ref(sourceData.threads)
const posts = ref(sourceData.posts)
const users = ref(sourceData.users)
const newPostText = ref('')
const props = defineProps(['id'])
const route = useRoute()
const thread = computed(() => {
  return threads.value.find((th) => th.id === route.params.id)
})
const threadPosts = computed(() => {
  return posts.value.filter((post) => post.threadId === route.params.id)
})
function addPost(eventData) {
  // const postId = 'ggqq' + Math.random()
  const post = {
    ...eventData.post,
    threadId: props.id
  }
  posts.value.push(post)
  thread.value.posts.push(post.id)
  console.log(post)
  
  
  // newPostText.value = ''
}
onMounted(() => {
  // Code to be executed when the component is mounted
  console.log('Component mounted!')
})
</script>

<style scoped>
</style>