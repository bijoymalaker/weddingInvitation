<template>
  <div class="vintage-plaque-container d-flex justify-content-center align-items-center position-relative mx-auto">
    <!-- SVG Background -->
    <svg 
      class="position-absolute top-0 start-0 w-100 h-100 plaque-svg" 
      viewBox="0 0 800 300" 
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Base Paper fill -->
      <path d="M 50 50 A 30 30 0 0 1 80 20 C 200 -15, 350 -10, 400 30 C 450 -10, 600 -15, 720 20 A 30 30 0 0 1 750 50 Q 780 150, 750 250 A 30 30 0 0 1 720 280 C 600 315, 450 310, 400 270 C 350 310, 200 315, 80 280 A 30 30 0 0 1 50 250 Q 20 150, 50 50 Z" 
            fill="#f4ebd8" />
            
      <!-- Outer Thick Border (Exact 12px true offset) -->
      <path d="M 62 50 A 18 18 0 0 1 80 32 C 200 -3, 350 2, 400 42 C 450 2, 600 -3, 720 32 A 18 18 0 0 1 738 50 Q 768 150, 738 250 A 18 18 0 0 1 720 268 C 600 303, 450 298, 400 258 C 350 298, 200 303, 80 268 A 18 18 0 0 1 62 250 Q 32 150, 62 50 Z" 
            fill="none" stroke="#4a1811" stroke-width="2.5" />
            
      <!-- Inner Thin Border (Exact 18px true offset) -->
      <path d="M 68 50 A 12 12 0 0 1 80 38 C 200 3, 350 8, 400 48 C 450 8, 600 3, 720 38 A 12 12 0 0 1 732 50 Q 762 150, 732 250 A 12 12 0 0 1 720 262 C 600 297, 450 292, 400 252 C 350 292, 200 297, 80 262 A 12 12 0 0 1 68 250 Q 38 150, 68 50 Z" 
            fill="none" stroke="#4a1811" stroke-width="1" />

      <!-- Decorative Rivets -->
      <circle cx="400" cy="58" r="3" fill="#4a1811" />
      <circle cx="400" cy="242" r="3" fill="#4a1811" />
    </svg>

    <!-- Content Slot for Text -->
    <div class="content position-relative z-1 text-center d-flex justify-content-center align-items-center">
      <slot>
        <h2 class="display-font m-0" style="color: #38110b !important; font-size: 2.8rem; letter-spacing: 2px;">
          মুকুটের পরিবার
        </h2>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.vintage-plaque-container {
  width: 100%;
  max-width: 550px;
  /* Mathematically match the 800x300 SVG to prevent ANY distortion */
  aspect-ratio: 8 / 3;
  filter: drop-shadow(0 15px 25px rgba(0,0,0,0.2));
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.vintage-plaque-container:hover {
  transform: translateY(-5px) scale(1.02);
  filter: drop-shadow(0 20px 35px rgba(0,0,0,0.3));
}

.content {
  width: 85%;
  height: 100%;
  /* Shift slightly up to perfectly center text visually against the deep dips */
  transform: translateY(-2px);
}
</style>
