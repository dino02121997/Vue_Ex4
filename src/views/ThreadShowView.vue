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

import { storeToRefs } from 'pinia'
import { useThreadsStore } from '../stores/ThreadsStore'
import { usePostsStore } from '../stores/PostsStore'

// import sourceData from '@/data.json'
import PostList from '../components/PostList.vue'
import PostEditor from '../components/PostEditor.vue'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const threadsStore  = useThreadsStore()
const threads = computed(() => threadsStore.threads)

const postStore = usePostsStore();
const { posts } = storeToRefs(postStore)




const props = defineProps(['id'])
const route = useRoute()


const thread = computed(() => {
  return threads.value.find((th) => th.id === route.params.id)
})
const threadPosts = computed(() => {
  return posts.value.filter((post) => post.threadId === route.params.id)
})


function addPost(eventData) {

  const post = {
    ...eventData.post,
    threadId: props.id
  }

  postStore.createPost(post)
  
}
onMounted(() => {
 
  console.log('Component mounted!')
});
</script>

<style scoped>
</style>