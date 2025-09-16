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
      <div class="col-lg-4 col-md-6 text-center mt-4 mt-lg-0 ">
        <img src="/src/assets/tui6.jpg" alt="Hero Image" class=" img-fluid rounded-circle" />
      </div>
    </div>
  </section>

 
 <section class="bg-white py-5">
    <div class="container">
      <h2 class="text-center fw-bold mb-4">My Collection</h2>
      <div id="personalCarousel" class="carousel slide" data-bs-ride="carousel">
        
        <!-- Indicators -->
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#personalCarousel" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#personalCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#personalCarousel" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#personalCarousel" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#personalCarousel" data-bs-slide-to="4"></button>
          <button type="button" data-bs-target="#personalCarousel" data-bs-slide-to="5"></button>
        </div>

        <!-- Slides -->
        <div class="carousel-inner rounded shadow">
          <div class="carousel-item active">
            <img src="/src/assets/tui11.jpg" class="d-block w-100" alt="Slide 1">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/tui12.jpg" class="d-block w-100" alt="Slide 2">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/tui13.jpg" class="d-block w-100" alt="Slide 3">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/tui14.jpg" class="d-block w-100" alt="Slide 4">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/tui15.jpg" class="d-block w-100" alt="Slide 5">
          </div>
          <div class="carousel-item">
            <img src="/src/assets/tui16.jpg" class="d-block w-100" alt="Slide 6">
          </div>
        </div>

        <!-- Controls -->
        <button class="carousel-control-prev " type="button" data-bs-target="#personalCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bg-dark rounded-circle " ></span>
        </button>
        <button class="carousel-control-next " type="button" data-bs-target="#personalCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon bg-dark rounded-circle "></span>
        </button>
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
.carousel-inner img {
  max-height: 450px; /* để ảnh không quá cao */
  object-fit: contain; /* cắt ảnh đẹp */
}
</style>
