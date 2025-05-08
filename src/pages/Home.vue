<template>
  <section class="container-fluid text-light py-5" style="background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
">
    <div class="row align-items-center p-5">
      <!-- Left side: Text -->
      <div class="col-lg-8 text-center col-md-6 text-lg-start">
        <h1 class="display-4 fw-bold mb-4 animate__animated animate__fadeInLeft">Hi i'm Trần Văn Thái <span
            class="text-primary"> A FrontEnd Developer</span>
        </h1>
        <p class="lead mb-4">
          As an IT student, I chose the direction of website front-end development in my third year of university.
          Coupled with my current passion, I have acquired the necessary skills for myself. Let's explore!
        </p>
        <router-link to="/Projects"><a-button type="primary" size="large" shape="round">
            Wanna see my projects ?
          </a-button>
        </router-link>
      </div>

      <!-- Right side: Image -->
      <div class="col-lg-4 col-md-6 text-center mt-4 mt-lg-0">
        <img src="/src/assets/tui6.jpg" alt="Hero Image" class=" img-fluid rounded-circle" />
      </div>
    </div>
  </section>



</template>



<script>
import IntroduceProjects from '@/components/IntroduceProjects.vue';
export default {
  components: {
    IntroduceProjects,
  }
}
</script>

<style scoped>
h1 span {
  color: #0d6efd;
}
</style>
