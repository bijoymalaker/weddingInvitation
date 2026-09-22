<script setup>
import { ref } from 'vue'
import CountdownTimer from '../components/CountdownTimer.vue'
import RSVPForm from '../components/RSVPForm.vue'
import VintagePlaque from '../components/VintagePlaque.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Modal state
const showStoryModal = ref(false)
</script>

<template>
  <div class="main-view w-100 position-relative">
    <!-- Sticky Header / Back Button -->
    <div class="position-fixed top-0 start-0 p-3 z-3 w-100 d-flex justify-content-between align-items-center" style="background: linear-gradient(to bottom, rgba(253, 251, 247, 0.9), transparent);">
      <button @click="router.push('/porinoy')" class="btn btn-outline-dark rounded-circle bg-white shadow-sm" style="width: 45px; height: 45px;">
        <i class="bi bi-arrow-left">←</i>
      </button>
      <div class="display-font text-primary-crimson fs-5">দেবাংশী ও শিবাংশ</div>
      <div style="width: 45px;"></div>
    </div>

    <!-- Hero Section -->
    <section class="hero-section min-vh-100 d-flex flex-column justify-content-center align-items-center text-center p-4 pt-5">
      <div class="mb-4 w-100">
        <h1><VintagePlaque>মুকুটের পরিবার</VintagePlaque></h1>
      </div>
      <div class="image-wrapper shadow-lg rounded-5 overflow-hidden mb-5 border border-3 border-warning" style="max-width: 400px; width: 100%;">
        <img src="/wedding_hero.jpg" alt="Bride and Groom" class="img-fluid w-100">
      </div>
      <h1 class="display-font text-primary-crimson mb-3" style="font-size: 3.5rem; line-height: 1.2;">
        দেবাংশী<br/>
        <span class="text-accent-gold fs-2">&</span><br/>
        শিবাংশ
      </h1>
    </section>

    <hr class="elegant-divider mx-auto my-5">

    <!-- Countdown Section -->
    <section class="countdown-section px-4">
      <CountdownTimer target-date="2026-11-23T00:00:00" />
    </section>

    <hr class="elegant-divider mx-auto my-5">

    <!-- Our Story Section -->
    <section class="story-section text-center px-4 py-5">
      <h2 class="display-font text-primary-crimson mb-4" style="font-size: 2.5rem;">আমাদের গল্প</h2>
      <p class="text-muted fs-5 mb-4 max-w-md mx-auto" style="max-width: 600px;">
        দুটো মনের মিলন আর দুটি পরিবারের মেলবন্ধন। আমাদের এই নতুন পথচলায় আপনাদের আশীর্বাদ কাম্য।
      </p>
      
      <button @click="showStoryModal = true" class="btn btn-outline-primary rounded-pill px-4 py-2 custom-btn-outline">
        আমাদের পরিচয় পর্ব জানতে এখানে ক্লিক করুন
      </button>
    </section>

    <hr class="elegant-divider mx-auto my-5">

    <!-- Event Schedule Section -->
    <section class="schedule-section px-4 py-5" style="background-color: #fcf8ef;">
      <h2 class="display-font text-center text-primary-crimson mb-5" style="font-size: 2.5rem;">স্মারকলিপি</h2>
      <p class="text-center text-muted mb-5">আমাদের সমস্ত অনুষ্ঠান সূচি সম্পর্কে জানতে</p>
      
      <div class="container" style="max-width: 800px;">
        <!-- Card 1 -->
        <div class="card event-card border-0 shadow-sm mb-4 rounded-4 overflow-hidden">
          <div class="row g-0">
            <div class="col-md-4 bg-primary-crimson d-flex flex-column justify-content-center align-items-center text-white p-4">
              <h4 class="display-font mb-0">আইবুড়ো ভাত পর্ব</h4>
            </div>
            <div class="col-md-8 p-4 d-flex flex-column justify-content-center">
              <p class="fs-5 fw-bold mb-1">২১শে নভেম্বর ২০২৬</p>
              <p class="text-muted mb-0">দুপুর ১:০০ টা থেকে</p>
            </div>
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="card event-card border-0 shadow-sm mb-4 rounded-4 overflow-hidden">
          <div class="row g-0 flex-md-row-reverse">
            <div class="col-md-4 bg-accent-gold d-flex flex-column justify-content-center align-items-center text-dark p-4">
              <h4 class="display-font mb-0 fw-bold">গায়ে হলুদ পর্ব</h4>
            </div>
            <div class="col-md-8 p-4 d-flex flex-column justify-content-center text-md-end">
              <p class="fs-5 fw-bold mb-1">২২শে নভেম্বর ২০২৬</p>
              <p class="text-muted mb-0">সকাল ১০:০০ টা থেকে</p>
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card event-card border-0 shadow-sm mb-4 rounded-4 overflow-hidden border border-warning">
          <div class="row g-0">
            <div class="col-md-4 bg-primary-crimson d-flex flex-column justify-content-center align-items-center text-white p-4">
              <h4 class="display-font mb-0">শুভ বিবাহ পর্ব</h4>
            </div>
            <div class="col-md-8 p-4 d-flex flex-column justify-content-center">
              <p class="fs-5 fw-bold mb-1 text-accent-gold">২৩শে নভেম্বর ২০২৬</p>
              <p class="text-muted mb-0">সন্ধ্যা ৭:০০ টা থেকে</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location Section -->
    <section class="location-section px-4 py-5 text-center">
      <h2 class="display-font text-primary-crimson mb-4" style="font-size: 2.5rem;">বিবাহ বাসর</h2>
      <p class="text-muted mb-5">যেখানে আমরা আমাদের আনন্দ উদযাপন করবো…</p>
      
      <div class="container shadow p-0 rounded-4 overflow-hidden border" style="max-width: 800px;">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d117925.3343992775!2d88.26495111005727!3d22.535406374533036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="350" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>

    <hr class="elegant-divider mx-auto my-5">

    <!-- RSVP Section -->
    <section class="rsvp-wrapper px-4">
      <RSVPForm />
    </section>

    <!-- Footer -->
    <footer class="footer-section text-center py-5 mt-5 position-relative" style="background-color: #500000; color: #faecd9;">
      <h3 class="display-font mb-4 fw-light">শ্রী শ্রী প্রজাপতয়ে নমঃ</h3>
      <p class="mb-2">বিনীত</p>
      <p class="fw-bold fs-5 mb-0 display-font">বসু ও মুখার্জী পরিবার</p>
      
      <div class="floral-border mt-4"></div>
    </footer>

    <!-- Story Modal -->
    <div class="modal fade" :class="{ 'show d-block': showStoryModal }" tabindex="-1" style="background: rgba(0,0,0,0.6);" v-if="showStoryModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-4 border-0">
          <div class="modal-header border-0 bg-primary-crimson text-white rounded-top-4">
            <h5 class="modal-title display-font mx-auto">আমাদের পরিচয়</h5>
            <button type="button" class="btn-close btn-close-white position-absolute end-0 me-3" @click="showStoryModal = false"></button>
          </div>
          <div class="modal-body text-center p-4">
            <div class="row align-items-center">
              <div class="col-5">
                <div class="p-3 border rounded-3 bg-light">
                  <h6 class="display-font text-primary-crimson fw-bold">টোপরের পরিবার</h6>
                  <p class="small mb-0 text-muted">বসু পরিবার</p>
                </div>
              </div>
              <div class="col-2 fs-2 text-accent-gold">🦋</div>
              <div class="col-5">
                <div class="p-3 border rounded-3 bg-light">
                  <h6 class="display-font text-primary-crimson fw-bold">মুকুটের পরিবার</h6>
                  <p class="small mb-0 text-muted">মুখার্জী পরিবার</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.elegant-divider {
  width: 80px;
  border-top: 3px solid var(--accent-gold);
  opacity: 1;
}

.custom-btn-outline {
  border-color: var(--primary-crimson);
  color: var(--primary-crimson);
}
.custom-btn-outline:hover {
  background-color: var(--primary-crimson);
  color: white;
}

.event-card {
  transition: transform 0.3s ease;
}
.event-card:hover {
  transform: translateY(-5px);
}

.floral-border {
  height: 20px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" fill="%23D4AF37"><circle cx="50" cy="10" r="3"/><circle cx="40" cy="10" r="2"/><circle cx="60" cy="10" r="2"/></svg>') repeat-x center;
}
</style>
