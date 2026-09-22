<script setup>
import bg1 from '@/assets/images/Homepage/Home-background.svg'
import bg2 from '@/assets/images/Homepage/Home-background-2.svg'
import bg3 from '@/assets/images/Homepage/Home-background-3.svg'
import bg4 from '@/assets/images/Homepage/Home-background-4.svg'
import letterEnvelope from '@/assets/images/Homepage/letter-envolve.svg'
import typeButton from '@/assets/images/Homepage/Type-button.svg'
import bananaTree from '@/assets/images/Homepage/Banana-tree.svg'
import { useRouter } from 'vue-router'

const router = useRouter()

const mainBackgrounds = [bg1, bg2]

const openEnvelope = () => {
  router.push('/porinoy')
}
</script>

<template>
  <div class="envelope-view min-vh-100 d-flex justify-content-center align-items-center position-relative w-100 overflow-hidden">

    <!-- Stacked Animated Background Sequence (Base layers 1, 2) -->
    <div class="bg-layers-container position-absolute top-0 start-0 w-100 h-100" style="pointer-events: none;">
      <img v-for="(bg, index) in mainBackgrounds" :key="index" :src="bg"
        class="animated-bg-layer position-absolute top-0 start-0 w-100 h-100" :class="{ 'is-transparent': index > 0 }"
        :style="{ animationDelay: `${index * 0.2}s` }" alt="background" />

      <!-- 4 Sides (Layer 3) -->
      <!-- Right Side (Original) -->
      <img :src="bg3" class="side-bg animated-bg-layer position-absolute end-0 is-transparent"
        style="top: 50%; animation-delay: 0.4s; transform: translateY(-50%) rotate(0deg);" alt="side-r" />
      <!-- Bottom Side -->
      <img :src="bg3" class="side-bg animated-bg-layer position-absolute bottom-0 is-transparent"
        style="left: 50%; animation-delay: 0.4s; transform: translateX(-50%) rotate(90deg);" alt="side-b" />
      <!-- Left Side -->
      <img :src="bg3" class="side-bg animated-bg-layer position-absolute start-0 is-transparent"
        style="top: 50%; animation-delay: 0.4s; transform: translateY(-50%) rotate(180deg);" alt="side-l" />
      <!-- Top Side -->
      <img :src="bg3" class="side-bg animated-bg-layer position-absolute top-0 is-transparent"
        style="left: 50%; animation-delay: 0.4s; transform: translateX(-50%) rotate(270deg);" alt="side-t" />

      <!-- 4 Corners (Layer 4) -->
      <!-- Bottom Right (Original) -->
      <img :src="bg4" class="corner-bg animated-bg-layer position-absolute bottom-0 end-0 is-transparent"
        style="animation-delay: 0.8s; transform: rotate(0deg);" alt="corner-br" />
      <!-- Bottom Left -->
      <img :src="bg4" class="corner-bg animated-bg-layer position-absolute bottom-0 start-0 is-transparent"
        style="animation-delay: 0.8s; transform: rotate(90deg);" alt="corner-bl" />
      <!-- Top Left -->
      <img :src="bg4" class="corner-bg animated-bg-layer position-absolute top-0 start-0 is-transparent"
        style="animation-delay: 0.8s; transform: rotate(180deg);" alt="corner-tl" />
      <!-- Top Right -->
      <img :src="bg4" class="corner-bg animated-bg-layer position-absolute top-0 end-0 is-transparent"
        style="animation-delay: 0.8s; transform: rotate(270deg);" alt="corner-tr" />
    </div>

    <!-- Envelope Container (Content) -->
    <div class="envelope-wrapper d-flex justify-content-center align-items-center w-100 h-100" style="z-index: 10;">
      <div class="floating-envelope">
        <div class="envelope-container position-relative mx-auto" @click="openEnvelope">
          <!-- Envelope Image -->
          <img :src="letterEnvelope" alt="Letter Envelope" class="img-fluid w-100 envelope-img">

          <!-- Seal/Button at the top flap (Absolutely positioned) -->
          <div class="seal-container position-absolute translate-middle-x" style="top: -20%; z-index: 20; left: 40%;">
            <img :src="typeButton" alt="Tap to open" class="seal-btn">
          </div>

          <!-- Text overlay on envelope -->
          <div class="envelope-text-overlay position-absolute w-100 text-center" style="top: 60%; left: 0;">
            <h2 class="display-font text-white mb-2 px-3"
              style="font-size: 1.8rem; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">দেবাংশী ও শিবাংশ-র</h2>
            <h1 class="display-font text-warning px-3"
              style="font-size: 3.2rem; text-shadow: 2px 2px 6px rgba(0,0,0,0.6); color: #FFDF73 !important;">ঘর
              বাঁধার<br />চিঠি</h1>
          </div>
        </div>
        
        <p class="text-center mt-4 display-font px-3 mx-auto" style="font-size: clamp(1.5rem, 5vw, 2.5rem); text-shadow: 1px 1px 2px rgba(255,255,255,0.5); color: #FFDF73; line-height: 1.4; max-width: 90vw; word-wrap: break-word;">
          আমাদের শুভক্ষণের সাক্ষী হতে<br> আপনাকে জানাই সাদর আমন্ত্রণ
        </p>
      </div>
    </div>

    <!-- Banana Trees (Layer 5 - Overlapping envelope) -->
    <!-- Left Banana Tree (Flipped) -->
    <img :src="bananaTree" class="banana-tree left animated-bg-layer position-absolute is-transparent"
      style="animation-delay: 1.2s;" alt="banana-tree-left" />
    <!-- Right Banana Tree -->
    <img :src="bananaTree" class="banana-tree right animated-bg-layer position-absolute is-transparent"
      style="animation-delay: 1.2s;" alt="banana-tree-right" />
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
  animation: fadeInLayer 0.6s ease-out forwards;
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

/* Banana Tree Decorations */
.banana-tree {
  height: 70vh;
  width: auto;
  max-width: 350px;
  object-fit: contain;
  top: 50%;
  z-index: 25;
  /* Higher than envelope (20) to sit above it */
  pointer-events: none;
  /* Crucial: Allows clicking right through the leaves to the button underneath! */
  will-change: transform, opacity;
}

/* Desktop positioning */
@media (min-width: 768px) {
  .banana-tree.left {
    right: 50%;
    margin-right: 250px;
    transform: translateY(-50%) scaleX(-1) translateZ(0);
  }

  .banana-tree.right {
    left: 50%;
    margin-left: 250px;
    transform: translateY(-50%) translateZ(0);
  }
}

/* Mobile positioning (Show overlapping envelope) */
@media (max-width: 767.98px) {
  .banana-tree {
    height: 50vh;
  }

  .banana-tree.left {
    left: 0;
    right: auto;
    /* Bring tree inward: -25% means mostly visible, overlapping envelope */
    transform: translateX(-60%) translateY(-50%) scaleX(-1) translateZ(0);
  }

  .banana-tree.right {
    right: 0;
    left: auto;
    /* Bring tree inward: 25% */
    transform: translateX(60%) translateY(-50%) translateZ(0);
  }
}

/* Premium Envelope Effects */
.floating-envelope {
  animation: float 4s ease-in-out infinite;
  will-change: transform;
}

.envelope-container {
  cursor: pointer;
  max-width: 90vw;
  width: 450px;
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  transform: translateZ(0);
  /* Hardware acceleration */
  will-change: transform;
}

.envelope-img {
  filter: drop-shadow(0 15px 25px rgba(0, 0, 0, 0.3));
  /* Removed filter transition to prevent lag */
}

.envelope-container:hover {
  transform: translateY(-5px) scale(1.02) translateZ(0);
}

/* Seal Button Effects */
.seal-btn {
  width: 150%;
  height: auto;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center;
  transform: translateZ(0);
  /* Hardware acceleration */
  will-change: transform;
}

.envelope-container:hover .seal-btn {
  transform: scale(1.15) rotate(5deg) translateZ(0);
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
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
  z-index: 20;
  opacity: 0;
  animation: fadeInEnvelope 1.5s ease-out 1.6s forwards;
}

@keyframes fadeInEnvelope {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.envelope:hover {
  transform: scale(1.02);
}

.seal-overlay {
  opacity: 0.9;
  transform: translate(-50%, -10%);
}
</style>
