<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CountdownTimer from '../components/CountdownTimer.vue'
import RSVPForm from '../components/RSVPForm.vue'
import VintagePlaque from '../components/VintagePlaque.vue'
import DatePlaque from '../components/DatePlaque.vue'
import ImgGallery from '../components/ImgGallery.vue'
import AnimatedStoryImage from '../components/AnimatedStoryImage.vue'
import InvitationModal from '../components/modal/InvitationModal.vue'
import AiburoBhaatModal from '../components/modal/AiburoBhaatModal.vue'
import GayeHoludModal from '../components/modal/GayeHoludModal.vue'
import WeddingModal from '../components/modal/WeddingModal.vue'

const router = useRouter()

// Modal states
const showStoryModal = ref(false)
const showInvitationModal = ref(false)
const showAiburoBhaatModal = ref(false)
const showGayeHoludModal = ref(false)
const showWeddingModal = ref(false)
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
    <section class="hero-section min-vh-100 d-flex justify-content-center align-items-center pt-5 pb-5">
      <div class="container mt-4">
        <div class="row align-items-center justify-content-center gap-4 gap-lg-0">
          
          <!-- Image Column (Always top on mobile, Left on Desktop) -->
          <div class="col-12 col-lg-5 order-1 order-lg-1 d-flex justify-content-center mb-5 mb-lg-0">
            <!-- Decorative Arch Image Frame -->
            <div class="hero-image-wrapper position-relative p-2" style="max-width: 420px; width: 100%;">
              <!-- Background Gold Offset Frame -->
              <div class="position-absolute border border-3" style="border-color: #c59b27 !important; border-radius: 200px 200px 20px 20px; top: 25px; left: 10px; right: 25px; bottom: 0px; z-index: 0; opacity: 0.8;"></div>
              
              <!-- Main Image -->
              <img src="/wedding_hero.jpg" alt="Bride and Groom" class="img-fluid shadow-lg position-relative" style="border-radius: 200px 200px 20px 20px; z-index: 1; width: 100%; aspect-ratio: 3/4; object-fit: cover; border: 8px solid white;">
            </div>
          </div>

          <!-- Text Column (Bottom on mobile, Right on Desktop) -->
          <div class="col-12 col-lg-7 order-2 order-lg-2 d-flex flex-column align-items-center text-center">
            
            <!-- <div class="mb-4 w-100 d-flex justify-content-center">
              <VintagePlaque style="max-width: 500px;">মুকুটের পরিবার</VintagePlaque>
            </div> -->
            
            <div class="names-wrapper my-3">
              <h2 class="display-font text-primary-crimson mb-2" style="font-size: clamp(3rem, 6vw, 4rem); line-height: 1.1;">
                দেবাংশী <span class="mx-3 display-font text-dark">ও</span> শিবাংশ
              </h2>
              <div class="text-accent-gold mb-2 d-flex justify-content-center align-items-center" style="font-size: clamp(2rem, 4vw, 3rem);">
                <p style="font-size: clamp(3rem, 4vw, 4rem); line-height: 1.1;">।। শুভ বিবাহ ।।</p>
              </div>
            </div>
            <img src="../assets/divider/Divider-1.svg" alt="" srcset="" style="transform: rotate(180deg);" class="mx-auto d-block">
            <div class="w-100 d-flex justify-content-center mt-2">
              <DatePlaque><p style="font-size: clamp(1.5rem, 3vw, 2rem);" class="m-0">২৩শে নভেম্বর, ২০২৬</p></DatePlaque>
            </div>
            <div class="countdown-section px-4">
              <CountdownTimer target-date="2026-11-23T00:00:00" />
            </div>
            
          </div>

        </div>
      </div>
    </section>

    <!-- <hr class="elegant-divider mx-auto"> -->

    <!-- Our Story Section -->
    <section class="story-section text-center px-4 py-5" style="background-color: #500000;">
      <div class="container d-flex flex-column align-items-center mb-5">
        <AnimatedStoryImage class="w-100" />
      </div>
      <div class="">
      <h2 class="text-accent-gold" style="font-size: clamp(2.5rem, 4vw, 3rem); line-height: 1.1;">আমাদের গল্প</h2>
      <p class="text-accent-gold fs-5 mb-4 max-w-md mx-auto" style="max-width: 600px;">
        দুটো মনের মিলন আর দুটি পরিবারের মেলবন্ধন। আমাদের এই নতুন পথচলায় আপনাদের আশীর্বাদ কাম্য।
      </p>
      <div class="w-100 d-flex justify-content-center mt-2">
        <RouterLink to="/story" class="d-block text-decoration-none mb-4 continuous-pulse" style="width: 100%; max-width: 300px;">
          <VintagePlaque>
            <p class="text-accent-gold m-0 fw-bold" style="font-size: 1.8rem; letter-spacing: 1px; padding-bottom: 5px;">ক্লিক করুন</p>
          </VintagePlaque>
        </RouterLink>
      </div>
      </div>
    </section>

    <!-- <hr class="elegant-divider mx-auto my-5"> -->

    <!-- Event Schedule Section -->
    <section class="schedule-section px-4 py-5" style="background-color: #fcf8ef;">
      <h2 class="display-font text-center text-primary-crimson mb-5" style="font-size: 2.5rem;">|| স্মারকলিপি ||</h2>

      
      <div class="container" style="max-width: 800px;">
        <!-- Card 1 -->
        <div class="card event-card border-0 shadow-lg mb-5 rounded-4 overflow-hidden position-relative" style="cursor: pointer;" @click="showAiburoBhaatModal = true">
          <div class="row g-0 h-100">
            <div class="col-md-5">
              <img src="../assets/images/MainPage/image_7296ded7.jpg" class="w-100 h-100 object-fit-cover" style="min-height: 250px;" alt="আইবুড়ো ভাত" />
            </div>
            <div class="col-md-7 p-4 p-md-5 d-flex flex-column justify-content-center bg-primary-crimson text-white">
              <h3 class="display-font text-accent-gold mb-3 fw-bold" style="font-size: 2.2rem;">আইবুড়ো ভাত পর্ব</h3>
              <p class="fs-5 fw-bold mb-1">২১শে নভেম্বর ২০২৬</p>
              <p class="fs-5 text-white-50 mb-3">দুপুর ১:০০ টা থেকে</p>
              <hr class="mt-3 mb-0" style="border-top: 2px dashed #d4af37; opacity: 0.5;">
            </div>
          </div>
        </div>
        
        <!-- Card 2 -->
        <div class="card event-card border-0 shadow-lg mb-5 rounded-4 overflow-hidden position-relative" style="cursor: pointer;" @click="showGayeHoludModal = true">
          <div class="row g-0 h-100 flex-md-row-reverse">
            <div class="col-md-5">
              <img src="../assets/images/MainPage/image_d7a65b5b.jpg" class="w-100 h-100 object-fit-cover" style="min-height: 250px;" alt="গায়ে হলুদ" />
            </div>
            <div class="col-md-7 p-4 p-md-5 d-flex flex-column justify-content-center bg-accent-gold text-dark text-md-end">
              <h3 class="display-font text-primary-crimson mb-3 fw-bold" style="font-size: 2.2rem;">গায়ে হলুদ পর্ব</h3>
              <p class="fs-5 fw-bold mb-1">২২শে নভেম্বর ২০২৬</p>
              <p class="fs-5 mb-3" style="opacity: 0.75;">সকাল ১০:০০ টা থেকে</p>
              <hr class="mt-3 mb-0" style="border-top: 2px dashed #4a130c; opacity: 0.3;">
            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card event-card border-0 shadow-lg mb-5 rounded-4 overflow-hidden position-relative" style="cursor: pointer;" @click="showWeddingModal = true">
          <div class="row g-0 h-100">
            <div class="col-md-5">
              <img src="../assets/images/MainPage/image_8bdea5d0.jpg" class="w-100 h-100 object-fit-cover" style="min-height: 250px;" alt="শুভ বিবাহ" />
            </div>
            <div class="col-md-7 p-4 p-md-5 d-flex flex-column justify-content-center bg-primary-crimson text-white">
              <h3 class="display-font text-accent-gold mb-3 fw-bold" style="font-size: 2.2rem;">শুভ বিবাহ পর্ব</h3>
              <p class="fs-4 fw-bold mb-1">২৩শে নভেম্বর ২০২৬</p>
              <p class="fs-5 text-white-50 mb-3">সন্ধ্যা ৭:০০ টা থেকে</p>
              <hr class="mt-3 mb-0" style="border-top: 2px dashed #d4af37; opacity: 0.5;">
            </div>
          </div>
        </div>
      </div>

            <p class="text-center text-muted mb-5 fs-2">আমাদের সমস্ত অনুষ্ঠান সূচি সম্পর্কে জানতে</p>
            <div class="w-100 d-flex justify-content-center mt-2">
        <RouterLink to="/story" class="d-block text-decoration-none mb-4 continuous-pulse" style="width: 100%; max-width: 300px;">
          <VintagePlaque>
            <p class="text-accent-gold m-0 fw-bold" style="font-size: 1.8rem; letter-spacing: 1px; padding-bottom: 5px;">ক্লিক করুন</p>
          </VintagePlaque>
        </RouterLink>
      </div>

    </section>

    <img src="../assets/divider/Divider-1.svg" alt="" class="container mx-auto d-block rotate-180">

    <ImgGallery />

    <!-- Location Section -->
    <section class="location-section px-4 py-5 text-center">
      <img src="../assets/divider/Divider-2.svg" alt="" class="container mx-auto d-block rotate-180 my-5" style="max-width: 800px;">
      <h2 class="display-font text-primary-crimson mb-4" style="font-size: 2.5rem;">বিবাহ বাসর</h2>
      <div style="color: #4a130c;">
        <h2 class="mb-3" style="font-size: 3.5rem;">"মালাকার বাড়ি"</h2>
        <p class="text-muted my-3 fs-4">কালিপুর, দিঘুলিয়া, টাঙ্গাইল সদর, টাঙ্গাইল
        </p>
      </div>
      <img src="../assets/divider/Divider-2.svg" alt="" class="container mx-auto d-block rotate-180 my-5" style="max-width: 800px;">
      <div class="container shadow p-0 rounded-4 overflow-hidden border" style="max-width: 1200px; aspect-ratio: 16/9;">
        <p class="text-muted my-3">যেখানে আমরা আমাদের আনন্দ উদযাপন করবো…</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.9265667362465!2d89.9006927!3d24.244346999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfb0046b0609f%3A0xa0622e2e8ec43d9c!2sKALIPUR%20MALAKAR%20BARI!5e0!3m2!1sen!2sbd!4v1790146432656!5m2!1sen!2sbd" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </section>


    <!-- RSVP Section -->
    <section class="rsvp-wrapper px-4 py-5" style="background: #4a130c;">
      <RSVPForm />
      <div class="w-100 d-flex justify-content-center mt-2">
        <div type="button" class="d-block text-decoration-none mb-4 continuous-pulse" style="width: 100%; max-width: 300px;" @click="showInvitationModal = true">
          <VintagePlaque>
            <p class="text-accent-gold m-0 fw-bold" style="font-size: 1.8rem; letter-spacing: 1px; padding-bottom: 5px;">নিমন্ত্রণ পত্র</p>
          </VintagePlaque>
        </div>
      </div>
    </section>
    

    <div class="wedding-divider-repeat w-100"></div>

    <!-- Image with Text Section -->
    <section class="image-text-section px-4 py-5" style="background-color: #fdfbf7;">
      <div class="container" style="max-width: 1000px;">
        <div class="row align-items-center shadow-lg rounded-5 overflow-hidden bg-white">
          <div class="col-md-6 p-0">
            <img src="../assets/gallery/image_20c4eb97.jpg" alt="Wedding Ritual" class="w-100 h-100 object-fit-cover" style="min-height: 400px; aspect-ratio: 4/5;">
          </div>
          <div class="col-md-6 p-5 p-lg-5 text-center text-md-start d-flex flex-column justify-content-center">
            <h2 class="display-font text-primary-crimson mb-4" style="font-size: 2.8rem;">আশীর্বাদ ও শুভকামনা</h2>
            <p class="fs-5 text-muted mb-4" style="line-height: 1.8;">
              জীবনের এই নতুন অধ্যায়ে পা রাখার মুহূর্তে আমরা আপনাদের উপস্থিতি ও আশীর্বাদ একান্তভাবে কামনা করছি। আপনাদের পদধূলিতে আমাদের বিবাহ বাসর হয়ে উঠুক আনন্দমুখর।
            </p>
            <p class="fs-3 text-accent-gold fw-bold mb-0 display-font mt-3">
              অপেক্ষায় রইলাম...
            </p>
          </div>
        </div>
      </div>
    </section>


    <!-- Footer -->
    <footer class="footer-section text-center py-5 mt-5 position-relative" style="background-color: #500000; color: #faecd9;">
      <h3 class="display-font mb-4 fw-light">Designed by InviteOn</h3>
      <!-- <p class="mb-2">বিনীত</p>
      <p class="fw-bold fs-5 mb-0 display-font">বসু ও মুখার্জী পরিবার</p> -->
      
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

    <!-- Event Modals -->
    <InvitationModal v-model="showInvitationModal" />
    <AiburoBhaatModal v-model="showAiburoBhaatModal" />
    <GayeHoludModal v-model="showGayeHoludModal" />
    <WeddingModal v-model="showWeddingModal" />
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

.continuous-pulse {
  animation: gentlePulse 1s infinite alternate ease-in-out;
}

.wedding-divider-repeat {
  height: 120px;
  background-image: url('../assets/divider/wedding_divider.svg');
  background-repeat: repeat-x;
  background-position: center;
  background-size: auto 100%;
}

@keyframes gentlePulse {
  0% {
    transform: scale(1);
    filter: drop-shadow(0 0 0 rgba(212, 175, 55, 0));
  }
  100% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 12px rgba(212, 175, 55, 0.6));
  }
}
</style>
