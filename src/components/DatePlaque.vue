<template>
  <div class="date-plaque-container d-flex justify-content-center align-items-center position-relative mx-auto">
    <!-- SVG Background -->
    <svg 
      class="position-absolute top-0 start-0 w-100 h-100 date-svg" 
      viewBox="0 0 800 300" 
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="date-shape" d="M 100 80 A 30 30 0 0 0 130 50 L 320 50 C 350 50, 350 10, 400 10 C 450 10, 450 50, 480 50 L 670 50 A 30 30 0 0 0 700 80 L 700 120 C 700 135, 720 140, 740 150 C 720 160, 700 165, 700 180 L 700 220 A 30 30 0 0 0 670 250 L 480 250 C 450 250, 450 290, 400 290 C 350 290, 350 250, 320 250 L 130 250 A 30 30 0 0 0 100 220 L 100 180 C 100 165, 80 160, 60 150 C 80 140, 100 135, 100 120 Z" />
        
        <clipPath id="date-shape-clip">
          <use href="#date-shape" />
        </clipPath>
        
        <!-- Very light icy-blue/grey radial gradient matching the image -->
        <radialGradient id="date-plaque-bg" cx="50%" cy="50%" r="50%">
          <stop offset="20%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#e8eef5"/>
        </radialGradient>
      </defs>

      <!-- Outer Flourishes (drawn behind so they tuck into the sharp points) -->
      <g class="golden-flourishes">
        <!-- Left Swirls -->
        <path d="M 60 150 L 35 150 C 15 150, 10 120, 25 120 C 40 120, 40 145, 28 145" fill="none" stroke="#cca230" stroke-width="4" stroke-linecap="round" />
        <path d="M 45 150 C 30 150, 25 170, 35 170 C 45 170, 45 155, 38 155" fill="none" stroke="#cca230" stroke-width="2.5" stroke-linecap="round" />
        <!-- Right Swirls -->
        <path d="M 740 150 L 765 150 C 785 150, 790 120, 775 120 C 760 120, 760 145, 772 145" fill="none" stroke="#cca230" stroke-width="4" stroke-linecap="round" />
        <path d="M 755 150 C 770 150, 775 170, 765 170 C 755 170, 755 155, 762 155" fill="none" stroke="#cca230" stroke-width="2.5" stroke-linecap="round" />
      </g>

      <!-- Main Plaque Body (clipped to exact shape) -->
      <g clip-path="url(#date-shape-clip)">
        <!-- 1. Fill -->
        <use href="#date-shape" fill="url(#date-plaque-bg)" />
        
        <!-- 2. Inner Thick Gold Border (inset 11 to 15px) -->
        <use href="#date-shape" fill="none" stroke="#cca230" stroke-width="30" />
        
        <!-- 3. Inner Paper Gap (inset 7 to 11px to erase gold) -->
        <use href="#date-shape" fill="none" stroke="url(#date-plaque-bg)" stroke-width="22" />
        
        <!-- 4. Outer Thin Gold Border (inset 5 to 7px) -->
        <use href="#date-shape" fill="none" stroke="#cca230" stroke-width="14" />
        
        <!-- 5. Outer Paper Edge (inset 0 to 5px to erase gold) -->
        <use href="#date-shape" fill="none" stroke="url(#date-plaque-bg)" stroke-width="10" />
      </g>

      <!-- Golden Leaf Motifs (Top and Bottom) -->
      <g class="leaf-motifs">
        <!-- Top leaves (pointing up) -->
        <path d="M 400 38 Q 390 22, 400 8 Q 410 22, 400 38 Z" fill="#cca230" />
        <path d="M 395 35 Q 375 28, 380 15 Q 395 18, 395 35 Z" fill="#cca230" />
        <path d="M 405 35 Q 425 28, 420 15 Q 405 18, 405 35 Z" fill="#cca230" />
        <circle cx="400" cy="43" r="3.5" fill="#cca230" /> <!-- tiny dot base -->

        <!-- Bottom leaves (pointing down) -->
        <path d="M 400 262 Q 390 278, 400 292 Q 410 278, 400 262 Z" fill="#cca230" />
        <path d="M 395 265 Q 375 272, 380 285 Q 395 282, 395 265 Z" fill="#cca230" />
        <path d="M 405 265 Q 425 272, 420 285 Q 405 282, 405 265 Z" fill="#cca230" />
        <circle cx="400" cy="257" r="3.5" fill="#cca230" /> <!-- tiny dot base -->
      </g>
    </svg>

    <!-- Content Slot for Text -->
    <div class="content position-relative z-1 text-center d-flex justify-content-center align-items-center">
      <slot>
        <h2 class="display-font m-0 fw-bold" style="color: #4a130c !important; font-size: 2.2rem; letter-spacing: 1px;">
          ২৩শে নভেম্বর, ২০২৬
        </h2>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.date-plaque-container {
  width: 100%;
  max-width: 550px;
  aspect-ratio: 8 / 3;
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.15));
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.date-plaque-container:hover {
  transform: translateY(-3px) scale(1.02);
  filter: drop-shadow(0 15px 25px rgba(0,0,0,0.25));
}

.content {
  width: 70%;
  height: 100%;
}
</style>
