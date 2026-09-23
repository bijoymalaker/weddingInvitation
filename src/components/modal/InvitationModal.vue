<template>
  <div v-if="modelValue" class="custom-modal-overlay d-flex align-items-center justify-content-center p-3 p-md-5">
    <div class="custom-modal-backdrop" @click="$emit('update:modelValue', false)"></div>
    <div class="modal-dialog m-0 w-100" style="max-width: 800px; z-index: 1060;">
      <div class="modal-content border-0 rounded-4 overflow-hidden" style="background: #fdfbf7; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
        <div class="modal-header border-0 bg-primary-crimson text-white position-relative pb-4">
          <h4 class="modal-title display-font mx-auto" style="font-size: 2.2rem; z-index: 1;">নিমন্ত্রণ পত্র</h4>
          <button type="button" class="btn-close btn-close-white position-absolute end-0 top-0 mt-3 me-3" style="z-index: 1;" @click="$emit('update:modelValue', false)"></button>
          
          <!-- Decorative SVG Border inside header -->
          <svg class="position-absolute bottom-0 start-0 w-100" viewBox="0 0 100 20" preserveAspectRatio="none" style="height: 20px; z-index: 0;">
             <path d="M0,20 C30,0 70,0 100,20 L100,20 L0,20 Z" fill="#fdfbf7" />
          </svg>
        </div>
        
        <div class="modal-body text-center p-4 p-md-5">
          <h2 class="display-font text-accent-gold mb-4 fw-bold" style="font-size: 2rem;">শ্রী শ্রী প্রজাপতয়ে নমঃ</h2>
          
          <div class="invitation-text my-4 px-2 px-md-4">
            <p class="fs-4 mb-4 text-dark" style="line-height: 1.8;">
              পরম করুণাময়ের অশেষ কৃপায় আগামী <strong class="text-primary-crimson fs-3">২৩শে নভেম্বর ২০২৬</strong>, 
              রোজ সোমবার, আমাদের পরিবারের দুই সন্তান <strong>দেবাংশী</strong> এবং <strong>শিবাংশ</strong> এর শুভ বিবাহ সম্পন্ন হতে চলেছে।
            </p>
            <p class="fs-4 mb-4 text-dark" style="line-height: 1.8;">
              জীবনের এই নতুন অধ্যায়ে আপনাদের সপরিবারে উপস্থিতি ও আশীর্বাদ আমাদের একান্ত কাম্য।
            </p>
          </div>

          <img src="../../assets/divider/Divider-2.svg" alt="Divider" class="img-fluid my-3" style="max-width: 250px;">

          <div class="mt-4">
            <p class="mb-1 text-muted fs-5">বিনীত,</p>
            <h3 class="display-font text-primary-crimson mb-0" style="font-size: 1.8rem;">বসু ও মুখার্জী পরিবার</h3>
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
