<template>
  <div class="vintage-plaque-container d-flex justify-content-center align-items-center position-relative mx-auto">
    <!-- SVG Background from Button-1.svg -->
    <img src="../assets/buttons/Button-1.svg" class="position-absolute top-50 start-50 translate-middle w-100 h-100 plaque-svg" style="object-fit: contain; pointer-events: none;" alt="Decorative Button Plaque" />

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
