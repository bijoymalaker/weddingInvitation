<script setup>
import bg1 from '@/assets/images/Homepage/Home-background.svg'
import bg2 from '@/assets/images/Homepage/Home-background-2.svg'
import bg3 from '@/assets/images/Homepage/Home-background-3.svg'
import bg4 from '@/assets/images/Homepage/Home-background-4.svg'

const emit = defineEmits(['next'])

const mainBackgrounds = [bg1, bg2]

const openEnvelope = () => {
  emit('next')
}
</script>

<template>
  <div class="envelope-view min-vh-100 d-flex justify-content-center align-items-center position-relative w-100 overflow-hidden">
    
    <!-- Stacked Animated Background Sequence (Base layers 1, 2) -->
    <div class="bg-layers-container position-absolute top-0 start-0 w-100 h-100" style="pointer-events: none;">
      <img 
        v-for="(bg, index) in mainBackgrounds" 
        :key="index"
        :src="bg"
        class="animated-bg-layer position-absolute top-0 start-0 w-100 h-100"
        :class="{ 'is-transparent': index > 0 }"
        :style="{ animationDelay: `${index * 1}s` }"
        alt="background"
      />

      <!-- 4 Sides (Layer 3) -->
      <!-- Right Side (Original) -->
      <img 
        :src="bg3"
        class="side-bg animated-bg-layer position-absolute end-0 is-transparent"
        style="top: 50%; animation-delay: 2s; transform: translateY(-50%) rotate(0deg);"
        alt="side-r"
      />
      <!-- Bottom Side -->
      <img 
        :src="bg3"
        class="side-bg animated-bg-layer position-absolute bottom-0 is-transparent"
        style="left: 50%; animation-delay: 2s; transform: translateX(-50%) rotate(90deg);"
        alt="side-b"
      />
      <!-- Left Side -->
      <img 
        :src="bg3"
        class="side-bg animated-bg-layer position-absolute start-0 is-transparent"
        style="top: 50%; animation-delay: 2s; transform: translateY(-50%) rotate(180deg);"
        alt="side-l"
      />
      <!-- Top Side -->
      <img 
        :src="bg3"
        class="side-bg animated-bg-layer position-absolute top-0 is-transparent"
        style="left: 50%; animation-delay: 2s; transform: translateX(-50%) rotate(270deg);"
        alt="side-t"
      />

      <!-- 4 Corners (Layer 4) -->
      <!-- Bottom Right (Original) -->
      <img 
        :src="bg4"
        class="corner-bg animated-bg-layer position-absolute bottom-0 end-0 is-transparent"
        style="animation-delay: 3s; transform: rotate(0deg);"
        alt="corner-br"
      />
      <!-- Bottom Left -->
      <img 
        :src="bg4"
        class="corner-bg animated-bg-layer position-absolute bottom-0 start-0 is-transparent"
        style="animation-delay: 3s; transform: rotate(90deg);"
        alt="corner-bl"
      />
      <!-- Top Left -->
      <img 
        :src="bg4"
        class="corner-bg animated-bg-layer position-absolute top-0 start-0 is-transparent"
        style="animation-delay: 3s; transform: rotate(180deg);"
        alt="corner-tl"
      />
      <!-- Top Right -->
      <img 
        :src="bg4"
        class="corner-bg animated-bg-layer position-absolute top-0 end-0 is-transparent"
        style="animation-delay: 3s; transform: rotate(270deg);"
        alt="corner-tr"
      />
    </div>

    <!-- Overlay to ensure text readability -->
    <div class="position-absolute top-0 start-0 w-100 h-100 bg-overlay" style="pointer-events: none;"></div>

    <!-- Envelope Container (Content) -->
    <div class="envelope-wrapper text-center w-100">
      <h1 class="display-font text-primary-crimson mb-5" style="font-size: 2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">
        দেবাংশী ও শিবাংশ-র<br/>ঘর বাঁধার চিঠি
      </h1>
      
      <div class="envelope position-relative mx-auto" @click="openEnvelope">
        <img src="/envelope_seal.jpg" alt="Envelope" class="img-fluid rounded shadow-lg border border-warning" style="max-width: 400px; cursor: pointer; transition: transform 0.3s ease;">
        <div class="position-absolute top-50 start-50 translate-middle text-center w-100 seal-overlay">
           <button class="btn btn-warning rounded-pill px-4 py-2 fw-bold text-dark shadow mt-5">
             ট্যাপ করে খুলুন
           </button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.envelope-view {
  background: var(--bg-ivory); 
}

.bg-layers-container {
  z-index: 1;
}

.animated-bg-layer {
  object-fit: cover;
  opacity: 0;
  animation: fadeInLayer 1s ease-in-out forwards;
}

.is-transparent {
  background-color: transparent !important;
}

.corner-bg {
  width: 35vmin;
  height: 35vmin;
  max-width: 250px;
  max-height: 250px;
  object-fit: contain;
}

.side-bg {
  width: 45vmin;
  height: 45vmin;
  max-width: 300px;
  max-height: 300px;
  object-fit: contain;
}

@keyframes fadeInLayer {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.bg-overlay {
  background: rgba(253, 251, 247, 0.4); 
  z-index: 2;
}

.envelope-wrapper {
  position: relative;
  z-index: 10;
}

.envelope:hover {
  transform: scale(1.02);
}

.seal-overlay {
  opacity: 0.9;
  transform: translate(-50%, -10%);
}
</style>
