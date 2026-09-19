<script setup>
const emit = defineEmits(['next'])

const openEnvelope = () => {
  emit('next')
}
</script>

<template>
  <div class="envelope-view min-vh-100 d-flex justify-content-center align-items-center position-relative w-100">
    <!-- Envelope Container -->
    <div class="envelope-wrapper text-center">
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
  background: radial-gradient(circle, var(--bg-ivory) 0%, #f0e6d2 100%);
}

.envelope:hover {
  transform: scale(1.02);
}

.seal-overlay {
  opacity: 0.9;
  transform: translate(-50%, -10%);
}
</style>
