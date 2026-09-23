<template>
  <div v-if="modelValue" class="custom-modal-overlay d-flex align-items-center justify-content-center p-3 p-md-5">
    <div class="custom-modal-backdrop" @click="$emit('update:modelValue', false)"></div>
    <div class="modal-dialog m-0 w-100" style="max-width: 800px; z-index: 1060;">
      <div class="modal-content border-0 rounded-4 overflow-hidden" style="background: #fdfbf7; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
        
        <div class="row g-0">
          <div class="col-md-5 d-none d-md-block">
            <img src="../../assets/images/MainPage/image_7296ded7.jpg" class="w-100 h-100 object-fit-cover" style="min-height: 400px;" alt="আইবুড়ো ভাত" />
          </div>
          
          <div class="col-md-7 position-relative bg-white">
            <button type="button" class="btn-close position-absolute end-0 top-0 mt-3 me-3" style="z-index: 1;" @click="$emit('update:modelValue', false)"></button>
            
            <div class="p-4 p-md-5 d-flex flex-column h-100 justify-content-center text-center">
              <h2 class="display-font text-primary-crimson mb-4" style="font-size: 2.5rem;">আইবুড়ো ভাত পর্ব</h2>
              
              <div class="d-flex align-items-center justify-content-center mb-3">
                <i class="bi bi-calendar-event fs-4 text-accent-gold me-3"></i>
                <p class="fs-5 fw-bold mb-0 text-dark">২১শে নভেম্বর ২০২৬, বৃহস্পতিবার</p>
              </div>
              
              <div class="d-flex align-items-center justify-content-center mb-4">
                <i class="bi bi-clock fs-4 text-accent-gold me-3"></i>
                <p class="fs-5 text-muted mb-0">দুপুর ১:০০ টা থেকে</p>
              </div>
              
              <hr class="w-50 mx-auto" style="border-top: 2px dashed #d4af37; opacity: 0.5;">
              
              <p class="text-muted mt-3 fs-5" style="line-height: 1.6;">
                বিয়ের আগে অবিবাহিত জীবনের শেষ আনন্দঘন ভোজ। এই বিশেষ দিনে আমরা প্রিয়জনদের সাথে আনন্দ ভাগ করে নিতে চাই।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: Boolean
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1055;
}
.custom-modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
}
</style>
