<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  targetDate: {
    type: String,
    required: true
  }
})

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timer = null

const calculateTimeLeft = () => {
  const difference = +new Date(props.targetDate) - +new Date()
  
  if (difference > 0) {
    days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((difference / (1000 * 60 * 60)) % 24)
    minutes.value = Math.floor((difference / 1000 / 60) % 60)
    seconds.value = Math.floor((difference / 1000) % 60)
  }
}

onMounted(() => {
  calculateTimeLeft()
  timer = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="countdown-container py-4">
    <h3 class="display-font text-center text-primary-crimson mb-4">আর মাত্র সময় বাকি!</h3>
    <img class="mx-auto d-block mb-4" src="../assets/divider/Divider-2.svg" alt="">
    <div class="d-flex justify-content-center gap-3 gap-md-4 text-center">
      <div class="time-box">
        <div class="fs-1 fw-bold text-accent-gold">{{ days }}</div>
        <div class="small text-muted text-uppercase">দিন</div>
      </div>
      <div class="time-box">
        <div class="fs-1 fw-bold text-accent-gold">{{ hours }}</div>
        <div class="small text-muted text-uppercase">ঘন্টা</div>
      </div>
      <div class="time-box">
        <div class="fs-1 fw-bold text-accent-gold">{{ minutes }}</div>
        <div class="small text-muted text-uppercase">মিনিট</div>
      </div>
      <div class="time-box">
        <div class="fs-1 fw-bold text-accent-gold">{{ seconds }}</div>
        <div class="small text-muted text-uppercase">সেকেন্ড</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.time-box {
  background: white;
  border-radius: 12px;
  padding: 15px 20px;
  min-width: 80px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  border: 1px solid rgba(212, 175, 55, 0.3);
}
@media (max-width: 576px) {
  .time-box {
    padding: 10px 15px;
    min-width: 60px;
  }
  .time-box .fs-1 {
    font-size: 1.5rem !important;
  }
}
</style>
