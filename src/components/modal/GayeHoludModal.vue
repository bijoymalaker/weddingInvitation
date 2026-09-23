<template>
  <Transition name="modal">
    <div v-if="modelValue" class="custom-modal-overlay d-flex align-items-center justify-content-center p-3 p-md-5">
      <div class="custom-modal-backdrop" @click="$emit('update:modelValue', false)"></div>
      <div class="modal-dialog m-0 w-100" style="max-width: 800px; z-index: 1060;">
        <div class="modal-content border-0 rounded-4 overflow-hidden" style="background: #fcf8ef; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
          
          <div class="row g-0 flex-md-row-reverse">
            <div class="col-12 col-md-5">
              <img src="../../assets/images/MainPage/image_8bdea5d0.jpg" class="modal-img object-fit-cover w-100" alt="গায়ে হলুদ" />
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
                
                <p class="text-dark mt-3 fs-5" style="line-height: 1.6; opacity: 0.85;">
                  হলুদ রাঙা এই সুন্দর সকালে আমাদের সাথে মিলিত হোন। হাসি, গান, আর হলুদের রঙে রঙিন হয়ে উঠুক আমাদের গায়ে হলুদ অনুষ্ঠান।
                </p>
              </div>
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
