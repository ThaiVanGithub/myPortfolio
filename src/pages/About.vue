<template>
  <div class="container-fluid p-5 bg-dark text-light">
    <!-- Skills Section -->
    <section class="mb-5">
  <div class="text-center mb-5">
    <h2 class="mb-3">My Skills</h2>
    <p >These are all technology i been learned at school and by myself</p>
  </div>

  <div class="row d-flex justify-content-center align-items-center">
    <!-- Skills Column (Left) -->
    <div class="col-lg-4 d-flex justify-content-center align-items-center">
      <div class="row g-3">
        <div 
          class="col-md-6"
          v-for="skill in skills" 
          :key="skill.name"
        >
          <a-card class="skill-card h-100" :body-style="{ padding: '12px' }">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="mb-0 fw-semibold text-light">{{ skill.name }}</h6>
              <small class="text-light">{{ skill.percent }}%</small>
            </div>
            <a-progress 
              :percent="skill.percent" 
              :stroke-color="skill.color" 
              :show-info="false"
              stroke-linecap="square"
              size="small"
            />
          </a-card>
        </div>
      </div>
    </div>

    <!-- Image Column (Right) -->
    <div class="col-lg-8 col-sm-12 mt-3">
      <div class="ps-4 d-flex justify-content-center align-items-center ">
        <img 
          src="https://www.icat.com/producers/icat-online/_jcr_content/root/container/container_173505335/promobanner_copy/content/image.coreimg.png/1718296457818/icat-icatonline-promo-banner-cat-computer-960x640px.png" 
          alt="Kỹ năng lập trình" 
          class="img-fluid rounded-3 shadow"
          style="max-height: 600px; object-fit: cover;"
        />
      </div>
    </div>
  </div>
</section>

    <!-- Certificates Section -->
    <section>
      <div class="text-center mb-5">
        <h2 class="mb-3">Cerfiticates</h2>
        <p  >All certificates i got</p>
      </div>

      <a-carousel 
        arrows 
        dots-class="slick-dots-white"
        autoplay
        effect="fade"
      >
        <div v-for="ctf in certificates" :key="ctf.name" >
          <div class="d-flex justify-content-center px-2">
            <a-card class="certificate-card text-light">
              <img 
                :src="ctf.image" 
                :alt="ctf.name" 
                class="certificate-image"
              />
              <div class="mt-3 text-center">
                <h5 class="mb-1">{{ ctf.name }}</h5>
                <small class="text-light">Điểm số: {{ ctf.band }}</small>
                <hr>
              </div>
            </a-card>
          </div>
        </div>
      </a-carousel>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'VueJS', percent: 70, color: '#41b883' },
  { name: 'SCSS', percent: 60, color: '#cd6799' },
  { name: 'Git', percent: 75, color: '#f05133' },
  { name: 'Bootstrap', percent: 80, color: '#7952b3' },
  { name: 'HTML5', percent: 80, color: '#e44d26' },
  { name: 'CSS3', percent: 80, color: '#2965f1' },
  { name: 'JavaScript', percent: 65, color: '#f7df1e' },
  { name: 'Ant Design', percent: 55, color: '#0170fe' },
  { name: 'Java', percent: 30, color: '#5382a1' },
  { name: 'Hardhat', percent: 40, color: '#fff' },
  { name: 'UI/UX', percent: 50, color: '#ff4081' },
  { name: 'MySQL', percent: 50, color: '#4479a1' },
  { name: 'System Design', percent: 60, color: '#2c3e50' },
])

const certificates = ref([
  { name: 'TOEIC', band: '750', color: '#1677ff', image: 'https://www.aplustopper.com/media/images/articles/Certificate-1.jpg' },
  { name: 'English B1', band: '8', color: '#1677ff', image: 'https://www.aplustopper.com/media/images/articles/Certificate-1.jpg' },
  { name: 'Soft Skills', band: '9', color: '#1677ff', image: 'https://www.aplustopper.com/media/images/articles/Certificate-1.jpg' },
  { name: 'Microsoft Office Skills', band: '8', color: '#1677ff', image: 'https://www.aplustopper.com/media/images/articles/Certificate-1.jpg' },
])
</script>

<style scoped>
.skill-card {
  transition: all 0.2s ease;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
}

.skill-card:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}
.skill-card {
  transition: transform 0.3s, box-shadow 0.3s;
  background: #1a1a1a;
  border: 1px solid #333;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.certificate-card {
  width: 100%;
  max-width: 400px;
  background: #1a1a1a;
  border: 1px solid #333;
}

.certificate-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 4px;
}

:deep(.slick-dots-white) li button {
  background: #fff !important;
  opacity: 0.4;
}

:deep(.slick-dots-white) li.slick-active button {
  opacity: 1;
}
</style>