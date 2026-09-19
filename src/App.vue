<script setup>
import { ref } from 'vue'
import FrontPage from './pages/FrontPage.vue'
import ViewSaveTheDate from './components/ViewSaveTheDate.vue'
import ViewMain from './components/ViewMain.vue'

const currentView = ref(1)

const setView = (viewNumber) => {
  currentView.value = viewNumber
}
</script>

<template>
  <div class="app-container position-relative min-vh-100 bg-ivory d-flex flex-column">
    <Transition name="fade" mode="out-in">
      <FrontPage v-if="currentView === 1" @next="setView(2)" />
      <ViewSaveTheDate v-else-if="currentView === 2" @next="setView(3)" @back="setView(1)" />
      <ViewMain v-else-if="currentView === 3" @back="setView(2)" />
    </Transition>
  </div>
</template>

<style scoped>
.app-container {
  overflow-x: hidden;
}
</style>
