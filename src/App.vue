<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isPlaying = ref(false)
const audioRef = ref(null)

onMounted(() => {
  // Attempt to autoplay as soon as the page loads
  if (audioRef.value) {
    audioRef.value.play().then(() => {
      isPlaying.value = true
    }).catch(err => {
      console.log("Autoplay blocked by browser policy. Will play on first click.", err)
    })
  }
})

// Backup: Start music when they navigate to the Porinoy page if autoplay was blocked
watch(() => route.path, (newPath) => {
  if (newPath === '/porinoy' && !isPlaying.value && audioRef.value) {
    audioRef.value.play().then(() => {
      isPlaying.value = true
    }).catch(err => console.log("Audio play failed:", err))
  }
})

const toggleAudio = () => {
  if (audioRef.value) {
    if (isPlaying.value) {
      audioRef.value.pause()
      isPlaying.value = false
    } else {
      audioRef.value.play().then(() => {
        isPlaying.value = true
      }).catch(err => console.log("Play failed", err))
    }
  }
}
</script>

<template>
  <div class="app-container position-relative min-vh-100 bg-ivory d-flex flex-column">
    
    <!-- Background Audio -->
    <audio ref="audioRef" src="/wedding-music.mp3" autoplay loop></audio>

    <!-- Global Floating Music Control Button -->
    <div 
      class="music-control position-fixed rounded-circle shadow d-flex justify-content-center align-items-center"
      :class="{ 'is-playing': isPlaying }"
      @click="toggleAudio"
      title="Toggle Music"
    >
      <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/>
        <path d="M10.707 5.293a1 1 0 0 0-1.414 1.414L10.586 8l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 9.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 8l1.293-1.293a1 1 0 0 0-1.414-1.414L12 6.586l-1.293-1.293z"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-music-note-beamed" viewBox="0 0 16 16">
        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
        <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
      </svg>
    </div>

    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<style scoped>
.app-container {
  overflow-x: hidden;
}

.music-control {
  bottom: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  background-color: var(--primary-crimson);
  color: white;
  z-index: 1050;
  cursor: pointer;
  transition: all 0.3s ease;
}

.music-control:hover {
  transform: scale(1.1);
  background-color: #a30000;
}

.music-control.is-playing {
  background-color: var(--accent-gold);
  color: #3b2a05;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); }
  100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
}
</style>
