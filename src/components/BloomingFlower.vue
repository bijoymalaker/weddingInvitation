<template>
  <div class="flower-container position-absolute" :style="containerStyle">
    <svg viewBox="0 0 100 150" class="flower-svg">
      <!-- Stem -->
      <path d="M50,70 Q45,120 55,150" fill="none" stroke="#3a7533" stroke-width="4" stroke-linecap="round" class="stem" />
      
      <!-- Leaves -->
      <path d="M50,110 Q20,100 10,80 Q30,130 50,110" fill="#4c9a42" class="leaf leaf-left"/>
      <path d="M50,120 Q80,110 90,90 Q70,140 50,120" fill="#4c9a42" class="leaf leaf-right"/>

      <!-- Petals -->
      <g class="flower-head">
        <g v-for="i in 8" :key="i" :style="{ transform: `rotate(${i * 45}deg)`, transformOrigin: '50px 70px' }">
          <path class="petal"
                :style="{ '--petal-delay': `${props.delay + 1.2 + (i * 0.1)}s` }"
                d="M50,70 C20,10 80,10 50,70" 
                :fill="petalColor" />
        </g>
        <circle cx="50" cy="70" r="12" :fill="centerColor" class="flower-center"/>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  petalColor: { type: String, default: '#e63946' },
  centerColor: { type: String, default: '#FFDF73' },
  size: { type: Number, default: 120 },
  delay: { type: Number, default: 0 },
  bottom: { type: String, default: '0' },
  left: { type: String, default: 'auto' },
  right: { type: String, default: 'auto' },
  zIndex: { type: Number, default: 10 }
})

const containerStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size * 1.5}px`,
  bottom: props.bottom,
  left: props.left,
  right: props.right,
  zIndex: props.zIndex,
  '--flower-delay': `${props.delay}s`
}))
</script>

<style scoped>
.flower-container {
  pointer-events: none;
  filter: drop-shadow(0 8px 12px rgba(0,0,0,0.3));
}

.flower-svg {
  width: 100%;
  height: 100%;
  overflow: visible;
}

.stem {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: growStem 1.5s ease-out forwards;
  animation-delay: var(--flower-delay);
}

.leaf {
  opacity: 0;
  transform: scale(0);
  animation: growLeaf 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.leaf-left {
  transform-origin: 50px 110px;
  animation-delay: calc(var(--flower-delay) + 0.5s);
}

.leaf-right {
  transform-origin: 50px 120px;
  animation-delay: calc(var(--flower-delay) + 0.8s);
}

.petal {
  transform-origin: 50px 70px;
  opacity: 0;
  transform: scale(0);
  animation: bloomPetal 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: var(--petal-delay);
}

.flower-center {
  transform-origin: 50px 70px;
  opacity: 0;
  transform: scale(0);
  animation: bloomCenter 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  animation-delay: calc(var(--flower-delay) + 2.2s);
}

@keyframes bloomPetal {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes bloomCenter {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes growStem {
  to { stroke-dashoffset: 0; }
}

@keyframes growLeaf {
  to { transform: scale(1); opacity: 1; }
}
</style>
