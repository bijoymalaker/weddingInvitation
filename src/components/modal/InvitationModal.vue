<template>
  <Transition name="modal">
    <div v-if="modelValue" class="custom-modal-overlay d-flex align-items-center justify-content-center p-3 p-md-5">
      <div class="custom-modal-backdrop" @click="$emit('update:modelValue', false)"></div>
      <div class="modal-dialog m-0 w-100" style="max-width: 800px; z-index: 1060; max-height: 90vh;">
        <div class="modal-content border-0 rounded-4 hide-scrollbar" style="background: #fdfbf7; box-shadow: 0 20px 50px rgba(0,0,0,0.5); overflow-y: auto; overflow-x: hidden; max-height: 90vh;">
          <div class="modal-header border-0 bg-primary-crimson text-white py-2 w-100" style="position: sticky; top: 0; z-index: 1050; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <h4 class="modal-title display-font mx-auto" style="font-size: 2.2rem;">নিমন্ত্রণ পত্র</h4>
            <button type="button" class="btn-close btn-close-white position-absolute end-0 top-0 mt-3 me-3" style="z-index: 1051;" @click="$emit('update:modelValue', false)"></button>
            
            <!-- Decorative SVG Border inside header -->
            <!-- <svg class="position-absolute bottom-0 start-0 w-100" viewBox="0 0 100 20" preserveAspectRatio="none" style="height: 20px; z-index: 1;">
               <path d="M0,20 C30,0 70,0 100,20 L100,20 L0,20 Z" fill="#fdfbf7" />
            </svg> -->
          </div>
          
          <img src="../../assets/gallery/image_8bdea5d0.jpg" alt="Gallery Image" class="w-100 object-fit-cover position-relative" style="height: 90%; z-index: 0; margin-top: -20px;">
          
          <div class="modal-body text-center p-4 p-md-5 pt-4">
            
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
  </Transition>
</template>

<script setup>
defineProps({
  modelValue: Boolean
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
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
  backdrop-filter: blur(5px);
}

/* Modal Transition Animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .modal-dialog,
.modal-leave-active .modal-dialog {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.modal-enter-from .modal-dialog,
.modal-leave-to .modal-dialog {
  transform: scale(0.8) translateY(30px);
}
</style>
