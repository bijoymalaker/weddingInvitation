<template>
  <div class="butterfly-container" :style="containerStyle">
    <div class="butterfly-wrapper">
      <svg viewBox="0 0 100 100" class="butterfly-svg">
        <!-- Shadow -->
        <g opacity="0.3" transform="translate(5, 10)">
          <path d="M50,50 C20,10 0,30 20,60 C25,70 40,65 50,50" fill="#000"/>
          <path d="M50,50 C30,70 10,90 30,95 C45,100 50,75 50,50" fill="#000"/>
          <path d="M50,50 C80,10 100,30 80,60 C75,70 60,65 50,50" fill="#000"/>
          <path d="M50,50 C70,70 90,90 70,95 C55,100 50,75 50,50" fill="#000"/>
        </g>
        
        <g class="left-wing">
          <path d="M50,50 C20,10 0,30 20,60 C25,70 40,65 50,50" :fill="color"/>
          <path d="M50,50 C30,70 10,90 30,95 C45,100 50,75 50,50" :fill="color"/>
        </g>
        <g class="right-wing">
          <path d="M50,50 C80,10 100,30 80,60 C75,70 60,65 50,50" :fill="color"/>
          <path d="M50,50 C70,70 90,90 70,95 C55,100 50,75 50,50" :fill="color"/>
        </g>
        <ellipse cx="50" cy="50" rx="3" ry="12" fill="#3b2a05" />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: { type: String, default: '#FFDF73' },
  size: { type: Number, default: 45 },
  duration: { type: Number, default: 12 },
  delay: { type: Number, default: 0 },
  startY: { type: Number, default: 60 },
  endY: { type: Number, default: 20 },
})

const containerStyle = computed(() => ({
  '--size': `${props.size}px`,
  '--duration': `${props.duration}s`,
  '--delay': `${props.delay}s`,
  '--start-y': `${props.startY}vh`,
  '--end-y': `${props.endY}vh`,
}))
</script>

<style scoped>
.butterfly-container {
  position: absolute;
  left: -10vw;
  width: var(--size);
  height: var(--size);
  z-index: 15;
  pointer-events: none;
  animation: flyAcross var(--duration) linear infinite;
  animation-delay: var(--delay);
  opacity: 0;
}

.butterfly-wrapper {
  width: 100%;
  height: 100%;
  animation: bob 4s ease-in-out infinite;
}

.butterfly-svg {
  width: 100%;
  height: 100%;
  transform: rotate(15deg);
}

.left-wing {
  transform-origin: 50px 50px;
  animation: flapLeft 0.12s ease-in-out infinite alternate;
}

.right-wing {
  transform-origin: 50px 50px;
  animation: flapRight 0.12s ease-in-out infinite alternate;
}

@keyframes flyAcross {
  0% {
    transform: translate(0, var(--start-y));
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(120vw, var(--end-y));
    opacity: 0;
  }
}

@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-40px); }
}

@keyframes flapLeft {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(65deg); }
}

@keyframes flapRight {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(-65deg); }
}
</style>
