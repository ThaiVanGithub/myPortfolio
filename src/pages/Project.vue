<template >
    <div class="projects  container py-5">
      <h2 class="text-center mb-5 text-primary">My Projects</h2>
      <a-row gutter="16">
        <a-col
          v-for="project in projects"
          :key="project.id"
          :xs="24"
          :sm="12"
          :md="8"
          class="mb-4"
        >
          <a-card
          class="text-center"
            :title="project.title"
            :cover="project.image ? h('img', { alt: project.title, src: project.image }) : null"
            hoverable
          >
            <p>{{ project.description }}</p>
            <div class="d-flex justify-content-between mt-3">
              <a :href="project.demo" target="_blank">
                <a-button type="primary" size="small">Live Demo</a-button>
              </a>
              <a :href="project.code" target="_blank">
                <a-button size="small">Source Code</a-button>
              </a>
            </div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </template>
  
  <script setup>
  import { h } from 'vue'
  import gproducts from '@/assets/gproducts.png'
  import vtravel from '@/assets/vtravel.jpg'
  const projects = [
    {
      id: 1,
      title: 'Vietnam introduce App',
      description: 'Trang giới thiệu về văn hóa, lịch sử, vẻ đẹp của đất nước hình chữ S',
      image: vtravel,
      demo: 'https://vtravelw.netlify.app/',
      code: 'https://github.com/ThaiVanGithub/ThucTap',
    },
    {
      id: 2,
      title: 'GProducts selling App',
      description: 'Trang mua bán các sản phẩm xanh bảo vệ môi trường, bảo vệ thiên nhiên',
      image: gproducts,
      demo: 'https://gproducts.netlify.app/',
      code: 'https://github.com/ThaiVanGithub/gproducts',
    },
  ]
  </script>
  
  <style scoped lang="scss">
  .projects {
    h2 {
      font-weight: 700;
    }
    img {
      object-fit: cover;
      height: 180px;
    }
  }
  </style>
  