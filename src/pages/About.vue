<template>
  <div class="about-page container-fluid py-2">
    <!-- Phần khởi đầu -->
    <section class="banner text-center mb-5 ">
      <h1 class="display-3 fw-bold animate__animated animate_fadeInDown">Hello it's me again, Thái</h1>
      <p class="lead animate__animated animate_fadeInUp animate__delay-1s">
        A create web developer & passion about learning gain experiences
      </p>
    </section>
    <!-- Phần giới thiệu sơ luộc -->
    <section class="intro text-center mb-5 ">
      <h2 class="fw-semibold mb-3">About me</h2>
      <p class="text-muted mx-auto" style="max-width: 800px;">
        I am a web developer who believes in the power of simplicity and creativity.
        My goal is to build digital experiences that are both aesthetically pleasing and highly functional.
        With a passion for learning and innovation, I always strive to push the boundaries of what's possible.
      </p>
    </section>

    <!-- Kỹ năng chuyên môn -->
    <section class="skills mb-5 mt-5">
      <h2 class="text-center fw-semibold mb-4">My Skills</h2>
      <a-row gutter="[24, 24]">
        <a-col v-for="skill in skills" :key="skill.name" :xs="24" :sm="12" :md="8">
          <a-card class="skill-card text-center" hoverable>
            <i :class="skill.icon" class="skill-icon mb-3"></i>
            <h5 class="fw-semibold">{{ skill.name }}</h5>
            <a-progress :percent="skill.percent" :stroke-color="skill.color" :show-info="false" stroke-linecap="round"
              size="small" />
          </a-card>
        </a-col>
      </a-row>
    </section>
  </div>


  <!-- hành trình -->
  <section class="timeline mt-3">
    <h2 class="text-center fw-semibold mb-5 pt-5">My Educational and Professional Journey</h2>
    <div class="px-4 pb-5">
      <a-timeline mode="alternate">
        <a-timeline-item color="purple">
          <span class="fw-semibold">Pursued a Bachelor's Degree in Information Technology</span>
          <br />
          <p class="text-muted">Nam Can Tho University</p>
        </a-timeline-item>

        <a-timeline-item color="red">
          <span class="fw-semibold">Developed Self-Learning Abilities</span>
          <br />
          <p class="text-muted">Mastered subject-specific knowledge independently and proactively.</p>
        </a-timeline-item>

        <a-timeline-item color="blue">
          <span class="fw-semibold">Internship at the Digital Transformation Center</span>
          <br />
          <p class="text-muted">Contributed to real-world projects in Đồng Tháp Province.</p>
        </a-timeline-item>

        <a-timeline-item color="green">
          <span class="fw-semibold">Graduated as an Information Technology Engineer</span>
          <br />
          <p class="text-muted">Equipped with a solid foundation to thrive in the tech industry.</p>
        </a-timeline-item>
      </a-timeline>
      <h3 class="lead text-center">A promise</h3>
      <p class=" text-center text-muted"> if i could have a chance to be a part of your company, i will do my best </p>
      <p class="text-center">“Thành công không phải là điểm dừng, mà là một hành trình kiên trì.” - Michael Korda
      </p>
    </div>
  </section>


  
 <div class="container d-flex align-items-center justify-content-center ">
  <h2><i class="fa-solid fa-ellipsis"></i></h2>
 </div>


  <section class="Hobby mt-5">
    
  <div class="container d-flex align-items-center justify-content-center">
    <div class="col-lg-6">
      <a-collapse v-model:activeKey="activeKey" @change="changeActivekey">
      <a-collapse-panel key="1" header="Sở thích">
        <a-collapse v-model:activeKey="activeSubKey">
          <a-collapse-panel
            v-for="des in hobbyDescriptions"
            :key="des.id"
            :header="des.name">
            <p>{{ des.text }}</p>
          </a-collapse-panel>
        </a-collapse>
      </a-collapse-panel>
    </a-collapse>
    </div>
  </div>
</section>

<section class="SideSkills ">
  <div class="container d-flex align-items-center justify-content-center">
    <div class="col-lg-6 ">
      <a-collapse v-model:activeKey="activeKeySK" @change="changeActivekey">
      <a-collapse-panel key="1" header="Kỹ năng khác">
        <a-collapse v-model:activeKey="activeSubKey">
          <a-collapse-panel
            v-for="skill in SideSkills"
            :key="skill.id"
            :header="skill.name">
            <p>{{ skill.text }}</p>
          </a-collapse-panel>
        </a-collapse>
      </a-collapse-panel>
    </a-collapse>
    </div>
  </div>
</section>





<section class="download-cv text-center mt-5">
    <a-button type="primary" size="large" shape="round" href="https://short.com.vn/kN9L" download>
      Download My CV
    </a-button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'VueJS', percent: 75, color: '#41b883', icon: 'fab fa-vuejs' },
  { name: 'JavaScript', percent: 65, color: '#f7df1e', icon: 'fab fa-js' },
  { name: 'Bootstrap', percent: 80, color: '#7952b3', icon: 'fab fa-bootstrap' },
  { name: 'HTML5', percent: 90, color: '#e44d26', icon: 'fab fa-html5' },
  { name: 'CSS3', percent: 85, color: '#2965f1', icon: 'fab fa-css3-alt' },
  { name: 'Ant design vue', percent: 70, color: '#f7df1e', icon: 'fa-solid fa-list' },
 

])

const activeKey = ref([]);
const activeKeySK = ref([]);
const hobbyDescriptions = ref([
  {
    id: 1,
    name: "Thể thao",
    text: "Cụ thể là bóng đá là môn thể thao tôi chơi thường xuyên nhất, nó đem nhiều lợi ích về mặt sức khỏe."
  },
  {
    id: 2,
    name: "Nghệ thuật",
    text: "Tôi cũng có một niềm đam mê lớn với âm nhạc, có thể hát và chơi nhạc cụ."
  }
])
const SideSkills = ref([
  {
    id: 1, 
    name: "Data Analys",
    text: "Được tích lũy qua các project đã làm cũng như được học ở trường một cách bài bản"
  },
  {
    id: 2, 
    name: "Tester",
    text: "Được học và năm cuối của đại học, đạt được điểm khá cao và hoàn thành tốt"
  },
  {
    id: 3, 
    name: "Graphic design",
    text: "Từng thiết kế đồ án logo, và các ảnh liên quan về chủ đề quán cà phê"
  },
  {
    id: 4, 
    name: "Blockchain",
    text: "Nắm được lý thuyết và hiểu về tính chất của blockchain, lập trình solidity cơ bản"
  },
  {
    id: 5, 
    name: "Linux",
    text: "Các lệnh thao tác cơ bản trong linux"
  },
  {
    id: 6, 
    name: "Quản trị mạng máy tính",
    text: "Cơ bản"
  },

])
const changeActivekey = key => {
  console.log(key);
};
</script>

<style scoped>
.about-page {
  animation: fadeIn 1.0s ease;
}

.banner {
  background: linear-gradient(135deg, #007cf0 0%, #00dfd8 100%);
  padding: 80px 20px;
  border-radius: 20px;
  color: white;
}

.intro p {
  font-size: 1.1rem;
}

.skill-card {
  background: #ffffff;
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
}

.skill-icon {
  font-size: 3rem;
  color: #007cf0;
}

.quote {
  background: #f9f9f9;
  border-radius: 20px;
}

.download-cv {
  margin-top: 40px;
}

.time-line {
  background-color: #B7B1F2;
}

/* Fade-in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>