<script setup>
const emit = defineEmits(['next', 'back'])
</script>

<template>
  <div class="save-the-date-view min-vh-100 d-flex flex-column position-relative w-100">
    <div class="position-absolute top-0 start-0 p-3 z-3">
      <button @click="emit('back')" class="btn btn-outline-dark rounded-circle bg-white shadow-sm" style="width: 45px; height: 45px;">
        <i class="bi bi-arrow-left">←</i>
      </button>
    </div>

    <div class="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center p-4">
      <h2 class="display-font text-primary-crimson mb-4" style="font-size: 1.8rem;">
        আমাদের নতুন পথ চলা শুরু হতে চলেছে
      </h2>
      
      <div class="image-container position-relative mb-5 shadow-lg rounded-4 overflow-hidden border border-warning" style="max-width: 500px; width: 100%;">
        <img src="/bengali_save_date.jpg" alt="Bengali Wedding elements" class="img-fluid w-100 h-100 object-fit-cover">
      </div>

      <h1 class="display-font text-accent-gold fw-bold mb-2" style="font-size: 3rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.2);">
        শুভ পরিণয়
      </h1>
      <p class="fs-4 text-dark fw-medium mb-5">২৩শে নভেম্বর ২০২৬</p>
      
      <button @click="emit('next')" class="btn btn-primary-crimson text-white rounded-pill px-5 py-3 fs-5 shadow-lg mt-auto mb-4 custom-btn">
        নিমন্ত্রণ পত্র দেখুন <span class="ms-2">→</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.save-the-date-view {
  background: linear-gradient(135deg, var(--bg-ivory) 0%, #faecd9 100%);
}

.custom-btn {
  transition: all 0.3s ease;
  border: 2px solid var(--accent-gold);
}

.custom-btn:hover {
  background-color: #600000 !important;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(139,0,0,0.3) !important;
}
</style>
