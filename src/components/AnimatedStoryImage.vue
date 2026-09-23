<template>
  <div class="animated-story-container mx-auto position-relative rounded-5 overflow-hidden shadow-lg">
    
    <!-- 1. The Image with Ken Burns Effect -->
    <img src="../assets/images/MainPage/image_a525bd76.jpg" alt="Our Story" class="story-image position-absolute top-0 start-0 w-100 h-100" style="object-fit: cover;" />

    <!-- 2. Animated Fireflies / Magical Dust Overlay -->
    <div class="fireflies-overlay position-absolute top-0 start-0 w-100 h-100 pointer-events-none">
      <div v-for="n in 30" :key="'firefly'+n" class="firefly" :style="getFireflyStyle()"></div>
    </div>

    <!-- 3. Falling Marigold Petals Overlay -->
    <div class="petals-overlay position-absolute top-0 start-0 w-100 h-100 pointer-events-none overflow-hidden">
      <!-- Shared Gradient Def -->
      <svg width="0" height="0" class="position-absolute">
        <defs>
          <linearGradient id="petal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ff9900" />
            <stop offset="50%" stop-color="#ff5500" />
            <stop offset="100%" stop-color="#cc0000" />
          </linearGradient>
        </defs>
      </svg>
      
      <div v-for="n in 25" :key="'petal'+n" class="falling-petal position-absolute" :style="getPetalStyle()">
        <!-- A curved shape resembling a flower petal -->
        <svg viewBox="0 0 24 24" width="18" height="18">
          <path d="M12,2 C18,0 24,6 20,14 C16,22 8,24 2,18 C-4,12 0,4 6,2 C8,1 10,2 12,2 Z" fill="url(#petal-grad)" opacity="0.85" />
        </svg>
      </div>
    </div>
    
  </div>
</template>

<script setup>
const getFireflyStyle = () => {
  const top = Math.random() * 100;
  const left = Math.random() * 100;
  const size = Math.random() * 3 + 2; // 2px to 5px
  const duration = Math.random() * 4 + 3; // 3s to 7s
  const delay = Math.random() * 5;
  return {
    top: `${top}%`,
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  };
}

const getPetalStyle = () => {
  const left = Math.random() * 100;
  const duration = Math.random() * 6 + 6; // 6s to 12s falling speed
  const delay = Math.random() * -15; // Negative delay to start mid-animation (so screen isn't empty at first)
  const scale = Math.random() * 0.6 + 0.6; // 0.6x to 1.2x size
  return {
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    transform: `scale(${scale})`
  };
}
</script>

<style scoped>
/* Responsive Container Sizing */
.animated-story-container {
  width: 100%;
  max-width: 900px;
  background-color: #2b1810;
  border: 5px solid #c59b27;
  /* Mobile: taller square-ish ratio to show the people clearly */
  aspect-ratio: 1 / 1;
}

@media (min-width: 768px) {
  .animated-story-container {
    aspect-ratio: 4 / 3;
  }
}

@media (min-width: 992px) {
  .animated-story-container {
    aspect-ratio: 16 / 9;
  }
}

/* 1. Cinematic Zoom (Ken Burns) */
.story-image {
  animation: kenBurns 25s ease-in-out infinite alternate;
  transform-origin: 40% 50%; /* Focus slightly left where bride/groom are */
  filter: brightness(0.9) contrast(1.1); /* Slight mood adjustment */
}

@keyframes kenBurns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.15) translate(-2%, 2%);
  }
}

/* 2. Fireflies (Floating & Blinking) */
.firefly {
  position: absolute;
  background-color: #fffacd;
  border-radius: 50%;
  box-shadow: 0 0 10px 3px rgba(255, 215, 0, 0.7), 0 0 20px 8px rgba(255, 140, 0, 0.4);
  opacity: 0;
  animation-name: floatAndBlink;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floatAndBlink {
  0% {
    opacity: 0;
    transform: translateY(10px) translateX(0) scale(0.8);
  }
  25% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    transform: translateY(-15px) translateX(15px) scale(1.2);
  }
  75% {
    opacity: 0.6;
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) translateX(-10px) scale(0.8);
  }
}

/* 3. Falling Petals */
.falling-petal {
  top: -10%;
  animation-name: fallAndSway;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes fallAndSway {
  0% {
    top: -10%;
    margin-left: 0px;
    rotate: 0deg;
  }
  25% {
    margin-left: 30px;
    rotate: 90deg;
  }
  50% {
    margin-left: -20px;
    rotate: 180deg;
  }
  75% {
    margin-left: 15px;
    rotate: 270deg;
  }
  100% {
    top: 110%;
    margin-left: -30px;
    rotate: 360deg;
  }
}

.pointer-events-none {
  pointer-events: none;
}
</style>
