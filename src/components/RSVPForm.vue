<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  attendance: 'yes',
  guests: 1
})

const submitForm = () => {
  console.log('RSVP Data Submitted:', formData.value)
  alert('আপনার উত্তর জমা নেওয়া হয়েছে। ধন্যবাদ!')
  formData.value = {
    name: '',
    attendance: 'yes',
    guests: 1
  }
}
</script>

<template>
  <div class="rsvp-container card border-0 shadow-lg p-4 p-md-5 my-5 mx-auto" style="max-width: 600px; border-radius: 20px; background: white;">
    <h3 class="display-font text-center text-primary-crimson mb-2">আপনাদের উপস্থিতিই এই আনন্দের আসল সৌন্দর্য</h3>
    <p class="text-center text-muted mb-4">অনুগ্রহ করে আপনার উপস্থিতির বিষয়টি নিশ্চিত করুন</p>
    
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="form-label fw-bold text-dark">আপনার নাম</label>
        <input type="text" class="form-control form-control-lg custom-input" id="name" v-model="formData.name" required placeholder="নাম লিখুন">
      </div>

      <div class="mb-4">
        <label class="form-label fw-bold text-dark d-block">আপনি কি আসছেন?</label>
        <div class="form-check form-check-inline">
          <input class="form-check-input custom-radio" type="radio" name="attendanceOptions" id="attendingYes" value="yes" v-model="formData.attendance">
          <label class="form-check-label" for="attendingYes">অবশ্যি আসবো ❤️</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input custom-radio" type="radio" name="attendanceOptions" id="attendingNo" value="no" v-model="formData.attendance">
          <label class="form-check-label" for="attendingNo">দুঃখিত, আসতে পারবো না</label>
        </div>
      </div>

      <div class="mb-5" v-if="formData.attendance === 'yes'">
        <label for="guests" class="form-label fw-bold text-dark">আপনারা মোট কত জন আসছেন?</label>
        <input type="number" class="form-control form-control-lg custom-input" id="guests" v-model="formData.guests" min="1" max="10" required>
      </div>

      <button type="submit" class="btn btn-primary-crimson w-100 rounded-pill py-3 fs-5 text-white fw-bold shadow">
        নিমন্ত্রণ পত্র জমা দিন
      </button>
    </form>
  </div>
</template>

<style scoped>
.custom-input {
  border: 1px solid #dee2e6;
  border-radius: 10px;
}
.custom-input:focus {
  border-color: var(--accent-gold);
  box-shadow: 0 0 0 0.25rem rgba(212, 175, 55, 0.25);
}
.custom-radio:checked {
  background-color: var(--primary-crimson);
  border-color: var(--primary-crimson);
}
</style>
