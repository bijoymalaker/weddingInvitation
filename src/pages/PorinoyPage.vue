<script setup>
import sky from '@/assets/images/PorinoyPage/Sky-porinoy.svg'
import buildings from '@/assets/images/PorinoyPage/buildings-porinoy.svg'
import car from '@/assets/images/PorinoyPage/car-porinoy.svg'
import water from '@/assets/images/PorinoyPage/water-proinoy.svg'
import letterOpen from '@/assets/images/PorinoyPage/Letter-Open-Porinoy.svg'

const emit = defineEmits(['next', 'back'])

const bgLayers = [sky, buildings, car, water]
</script>

<template>
  <div class="save-the-date-view min-vh-100 d-flex flex-column position-relative w-100 overflow-hidden">
    
    <!-- Animated Background Layers -->
    <div class="bg-layers-container position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style="pointer-events: none; z-index: 1;">
      
      <!-- 1. Sky (Background, stretches to fill the screen) -->
      <img :src="sky" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" style="z-index: 1;" alt="Sky">
      
      <!-- Scene Wrapper anchored to bottom -->
      <div class="scene-wrapper position-absolute bottom-0 start-0 w-100" style="z-index: 2;">
        
        <!-- 2. Buildings (Background) -->
        <img :src="buildings" class="position-absolute start-0 w-100 h-auto" style="bottom: 22vw; z-index: 4;" alt="Buildings">
        
        <!-- 3. Water (Moved z-index to 3 so it is behind the car. Made 110vw wide to fill any side gaps) -->
        <img :src="water" class="position-absolute h-auto" style="bottom: 0; left: -5vw; width: 110vw; z-index: 3;" alt="Water">

        <!-- 4. Car (Moved z-index to 4 so it sits on top of everything, preventing water from covering it) -->
        <!-- <img :src="car" class="position-absolute start-0 w-100 h-auto" style="bottom: 18vw; z-index: 4;" alt="Car"> -->
        
      </div>
    </div>

    <!-- Main Content -->
    <div class="content-wrapper flex-grow-1 d-flex flex-column position-relative w-100 h-100" style="z-index: 10;">
      <div class="position-absolute top-0 start-0 p-3 z-3">
        <button @click="emit('back')" class="btn btn-outline-dark rounded-circle bg-white shadow-sm" style="width: 45px; height: 45px;">
          <i class="bi bi-arrow-left">←</i>
        </button>
      </div>

      <div class="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center p-4">
        <h2 class="display-font text-primary-crimson mb-4" style="font-size: 1.8rem; text-shadow: 1px 1px 2px rgba(255,255,255,0.8);">
          আমাদের নতুন পথ চলা শুরু হতে চলেছে
        </h2>
        
        <!-- Interactive Letter Button -->
        <div class="letter-button-wrapper mb-5" @click="emit('next')">
          <div class="letter-btn-inner">
            <img :src="letterOpen" alt="Open Letter" class="letter-btn-img img-fluid">
          </div>
          <!-- Optional text to guide the user -->
          <div class="text-primary-crimson fw-bold mt-3 animate-pulse-text" style="font-size: 1.2rem; letter-spacing: 1px;">
            খুলতে ট্যাপ করুন
          </div>
        </div>

        <h1 class="display-font text-accent-gold fw-bold mb-2" style="font-size: 3rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.4);">
          শুভ পরিণয়
        </h1>
        <p class="fs-4 text-dark fw-bold mb-4" style="text-shadow: 1px 1px 2px rgba(255,255,255,0.8);">২৩শে নভেম্বর ২০২৬</p>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.save-the-date-view {
  background-color: var(--bg-ivory);
}

/* Interactive Letter Animations */
.letter-button-wrapper {
  cursor: pointer;
  animation: zoomInFade 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s forwards;
  opacity: 0;
  transform: scale(0.5);
}

.letter-btn-inner {
  animation: float 4s ease-in-out infinite;
  will-change: transform;
}

.letter-btn-img {
  width: 500px;
  max-width: 90vw;
  filter: drop-shadow(0 15px 25px rgba(0,0,0,0.3));
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.3s;
  will-change: transform;
}

.letter-button-wrapper:hover .letter-btn-img {
  transform: scale(1.1) rotate(2deg);
  filter: drop-shadow(0 20px 35px rgba(0,0,0,0.4));
}

.animate-pulse-text {
  animation: pulseOpacity 2s infinite;
}

@keyframes zoomInFade {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

@keyframes pulseOpacity {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
</style>
