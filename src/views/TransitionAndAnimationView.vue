
<template>
  <button @click="flag = !flag">Toggle</button>
  <Transition name="show" mode="out-in">
    <p v-if="flag" key="main">hello</p>
    <p v-else key="secondary">hello 2</p>
  </Transition>
  <div>-----</div>
  <button @click="show = !show">Show</button>
  <Transition name="bounce" appear>
    <p v-if="show" style="text-align: center">Hello here is some bouncy text!</p>
  </Transition>

  <Transition
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
    :css="false"
    appear=""
  >
    <div class="gsap-box" v-if="show"></div>
  </Transition>
  <div>-----</div>
  <div>-----</div>
  <button @click="insert">insert at random index</button>
  <button @click="reset">reset</button>

  <TransitionGroup tag="ul" name="show" class="container">
    <div v-for="item in items" class="item" :key="item">
      {{ item }}
      <button @click="remove(item)">x</button>
    </div>
  </TransitionGroup>
</template>
<script setup>
import { ref } from 'vue'
import gsap from 'gsap'
const flag = ref(true)
const show = ref(true)

function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1
  })
}

function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done
  })
}

function onLeave(el, done) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)'
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  })
}
const getInitialItems = () => [1, 2, 3, 4, 5]
const items = ref(getInitialItems())
let id = items.value.length + 1

function insert() {
  const i = Math.round(Math.random() * items.value.length)
  items.value.splice(i, 0, id++)
}

function reset() {
  items.value = getInitialItems()
}



function remove(item) {
  const i = items.value.indexOf(item)
  if (i > -1) {
    items.value.splice(i, 1)
  }
}
</script>


<style scoped>
button {
  border: 1px solid black;
  padding: 4px;
  margin: 4px;
}
.show-enter-active,
.show-leave-active {
  transition: opacity 0.5s ease;
}

.show-enter-from,
.show-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
.gsap-box {
  background: #42b883;
  margin-top: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>