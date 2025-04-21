<template >
  <section class="container-fluid text-light py-5 bg-dark">
    <div class="row align-items-center p-5">
      <!-- Left side: Text -->
      <div class="col-lg-8 text-center text-lg-start">
        <h1 class="display-4 fw-bold mb-4">Hi i'm Trần Văn Thái <span class="text-primary"> A FrontEnd Developer</span>
        </h1>
        <p class="lead mb-4">
          As an IT student, I chose the direction of website front-end development in my third year of university.
          Coupled with my current passion, I have acquired the necessary skills for myself. Let's explore!
        </p>
        <router-link to="/Projects" class="btn btn-primary btn-lg">Wanna see my projects ?</router-link>
      </div>

      <!-- Right side: Image -->
      <div class="col-lg-4 text-center mt-4 mt-lg-0">
        <img src="/src/assets/tui6.jpg" alt="Hero Image" class=" img-fluid  rounded " />
      </div>
    </div>
  </section>
  <!-- section giới thiệu sơ lược -->
  <section class="container-fluid text-light py-5 bg-dark " >
    <h3 class="text-center">Experiences</h3>
    <div class="row d-flex justify-content-center align-items-center p-5">
      <div class="col-lg-5 col-sm-12">
        <h5>
          <i class="fa-solid fa-arrow-down"></i>
          Internship at the <span class="text-primary"> Dong Thap Provincial Digital Transformation Center </span>
          (emphasizes the internship)
        </h5>
        <h5>Time: <span class="text-primary" style="text-decoration: underline white 1px;">Dong Thap Provincial Digital
            Transformation Center </span> </h5>
        <p>Tại đây, tôi đã được học về VueJS, Bootstrap, Responsive Web... cũng như tự
          xây dựng cho mình một trang FrontEnd Web chủ đề về giới thiệu đất nước Việt Nam, các anh chị tại nơi đây
          vô cùng thân thiệt dễ mến, tạo ra một môi trường làm việc để tôi phát triển nhanh, có điều tôi hơi báo mấy anh
          chị
          vì tôi bị thủy đậu tui lây gián tiếp cả phòng.
        </p>
      </div>
      <div class="col-lg-3 ">
        <img src="../assets/ttcds.jpg" alt="anhtt" class="img-fluid rounded">
      </div>
    </div>

    <div class="row d-flex justify-content-center align-items-center p-5">
      <div class="col-lg-5 col-sm-12">
        <h5>
          <i class="fa-solid fa-arrow-down"></i>
          Internship at the <span class="text-primary"> Dong Thap Provincial Digital Transformation Center </span>
          (emphasizes the internship)
        </h5>
        <h5>Time: <span class="text-primary" style="text-decoration: underline white 1px;">Dong Thap Provincial Digital
            Transformation Center </span> </h5>
        <p>Tại đây, tôi đã được học về VueJS, Bootstrap, Responsive Web... cũng như tự
          xây dựng cho mình một trang FrontEnd Web chủ đề về giới thiệu đất nước Việt Nam, các anh chị tại nơi đây
          vô cùng thân thiệt dễ mến, tạo ra một môi trường làm việc để tôi phát triển nhanh, có điều tôi hơi báo mấy anh
          chị
          vì tôi bị thủy đậu tui lây gián tiếp cả phòng.
        </p>
      </div>
      <div class="col-lg-3 col-sm-12">
        <img src="../assets/vtravel.jpg" alt="anhtt" class="img-fluid rounded">
      </div>
    </div>

    
  </section>

  <section class="container-fluid text-light pt-0 pb-5 bg-dark">

    <h3 class="text-center">Project</h3>
    <div class="container p-3">

      <div class="row">
        <div class="col-lg-6 col-sm-12">
          <img src="/src/assets/vtravel.jpg" class="img-fluid" alt="">
        </div>
        <div class="col-lg-6 col-sm-12 align-items-center p-3 ">
          <h4 class="text-center">VTRAVEL - INTRODUCE ABOUT OUT COUNRY (VIETNAM)</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quos omnis quam modi quas quod,
            voluptatibus, nesciunt pariatur veniam quaerat hic autem! Nemo,
            id consequatur. Iure ducimus numquam sunt vitae necessitatibus.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae minus nemo quaerat sed enim dolorem
            asperiores fugit quidem illum, alias quasi blanditiis praesentium unde hic. Quis nam unde blanditiis
            deleniti.
          </p>
          <a-button type="primary" size="small">Live Demo</a-button>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>
h1 span {
  color: #0d6efd;
}

</style>
