<template>
  <div class="date-plaque-container d-flex justify-content-center align-items-center position-relative mx-auto">
    <!-- SVG Background from Divider-3.svg -->
    <img src="../assets/divider/Divider-3.svg" class="position-absolute top-50 start-50 translate-middle w-100 h-100 date-svg" style="object-fit: contain; pointer-events: none;" alt="Decorative Date Divider" />

    <!-- Content Slot for Text -->
    <div class="content position-relative z-1 text-center d-flex justify-content-center align-items-center">
      <slot>
        <h2 class="display-font fw-bold" style="color: #4a130c !important; font-size: 2.2rem; letter-spacing: 1px;">
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
