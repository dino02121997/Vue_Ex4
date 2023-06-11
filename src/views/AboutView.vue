<template>
  <label>
    <input type="checkbox" v-model="isPurple" /> Purple
    <div class="circle" :class="circle_class">asdkjasldjal</div>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">hihi</div>
    <div :class="classObject">hello</div>
  </label>

  <br />
  <button @click="awesome = !awesome">Toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
  <h1 v-show="!awesome">Hello!</h1>

  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item.message }} {{ index }}</li>
  </ul>

  <select v-model="componentName">
    <option value="HelloWorld">HelloWorld</option>
    <option value="AppDate">AppDate</option>
  </select>

-----
  <!-- <component :is="componentName  === 'HelloWorld' ? HelloWorld : AppDate"></component> -->

  <component :is="dynamic"></component>

  <!-- <select v-model="componentName">
    <option :value="AppDate">AppDate</option>
    <option :value="HelloWorld">HelloWorld</option>
  </select>

  <component :is="componentName"></component> -->

  <!-- <button
    v-for="(_, tab) in tabs"
    :key="tab"
    :class="['tab-button', { active: currentTab === tab }]"
    @click="currentTab = tab"
  >
    {{ tab }}
  </button>
 -->

  <!-- <button v-for="(_, tab) in tabs" :key="tab" @click="componentName = tab">
    {{ tab }}
  </button>

  <component :is="tabs[componentName]"></component> -->

  <!-- {{ componentName }} -->
</template>

components: {
  HelloWorld,
  AppDate
}

<script setup lang="ts">
import { ref, computed, onMounted, watch, defineAsyncComponent,  } from 'vue'
const isPurple = ref(false)
const activeColor = ref('red')
const fontSize = ref(30)

const isActive = ref(true)
const error = ref(null)

const awesome = ref(true)

const componentName = ref('AppDate');




const HelloWorld = defineAsyncComponent(() => import('../components/HelloWorld.vue'));
const AppDate = defineAsyncComponent(() => import('../components/AppDate.vue'));

const dynamic = computed(() => {
  return componentName.value === 'HelloWorld' ? HelloWorld : AppDate;

  //return defineAsyncComponent(() => import(`../components/${componentName.value}.vue`));
})

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))
const circle_class = computed(() => ({
  purple: isPurple.value
}))
onMounted(() => {
  console.log(componentName.value)
})
watch(componentName, (newValue) => {
  console.log(`new component: ${newValue}`)
})
</script>
<style scoped>
.purple {
  background-color: blueviolet;
}
</style>