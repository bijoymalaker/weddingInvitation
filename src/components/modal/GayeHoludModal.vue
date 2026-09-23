<template>
  <Transition name="modal">
    <div v-if="modelValue" class="custom-modal-overlay d-flex align-items-center justify-content-center p-3 p-md-5">
      <div class="custom-modal-backdrop" @click="$emit('update:modelValue', false)"></div>
      <div class="modal-dialog m-0 w-100" style="max-width: 800px; z-index: 1060; max-height: 90vh;">
        <div class="modal-content border-0 rounded-4 h-100 hide-scrollbar" style="background: #fcf8ef; box-shadow: 0 20px 50px rgba(0,0,0,0.5); overflow-y: auto; overflow-x: hidden; max-height: 90vh;">
          
          <div class="row g-0 flex-md-row-reverse">
            <div class="col-12 col-md-5">
              <img src="@/assets/images/MainPage/image_d7a65b5b.jpg" class="modal-img object-fit-cover w-100 h-100" alt="গায়ে হলুদ" />
            </div>
            
            <div class="col-12 col-md-7 position-relative bg-white">
              <button type="button" class="btn-close position-absolute start-0 top-0 mt-3 ms-3" style="z-index: 1;" @click="$emit('update:modelValue', false)"></button>
              
              <div class="p-4 p-md-5 d-flex flex-column h-100 justify-content-center text-center">
                <h2 class="display-font text-accent-gold mb-4 fw-bold" style="font-size: 2.5rem; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">গায়ে হলুদ পর্ব</h2>
                
                <div class="d-flex align-items-center justify-content-center mb-3">
                  <i class="bi bi-calendar-event fs-4 text-primary-crimson me-3"></i>
                  <p class="fs-5 fw-bold mb-0 text-dark">২২শে নভেম্বর ২০২৬, শুক্রবার</p>
                </div>
                
                <div class="d-flex align-items-center justify-content-center mb-4">
                  <i class="bi bi-clock fs-4 text-primary-crimson me-3"></i>
                  <p class="fs-5 text-muted mb-0">সকাল ১০:০০ টা থেকে</p>
                </div>
                
                <hr class="w-50 mx-auto" style="border-top: 2px dashed #4a130c; opacity: 0.3;">
                
                <p class="text-dark mt-3 mb-0 fs-5" style="line-height: 1.6; opacity: 0.85;">
                  হলুদ রাঙা এই সুন্দর সকালে আমাদের সাথে মিলিত হোন। হাসি, গান, আর হলুদের রঙে রঙিন হয়ে উঠুক আমাদের গায়ে হলুদ অনুষ্ঠান।
                </p>
              </div>
            </div>
          </div>
          
          <div class="w-100 p-4 bg-white border-top">
            <h5 class="text-accent-gold mb-3 fw-bold display-font text-center" style="font-size: 1.5rem;">অনুষ্ঠানের স্থান</h5>
            <div class="w-100 rounded-3 overflow-hidden shadow-sm border" style="height: 250px;">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.9265667362465!2d89.9006927!3d24.244346999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfb0046b0609f%3A0xa0622e2e8ec43d9c!2sKALIPUR%20MALAKAR%20BARI!5e0!3m2!1sen!2sbd!4v1790146432656!5m2!1sen!2sbd" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
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

/* Responsive Image Height */
.modal-img {
  height: 250px;
}
@media (min-width: 768px) {
  .modal-img {
    height: 100%;
    min-height: 400px;
  }
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
