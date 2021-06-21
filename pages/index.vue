<template>
  <div class="main_template" id="dance">
    <b-container fluid>
      <Header />
      <!--slide-->
      <SessionCarousal/>
      <!--card-->
      <b-row class="p-3">
        <b-col class="d-flex justify-content-center">
          <b-badge>
            <h1 class="book_session_title title_text text-capitalize" >
              Book Your Sessions Now
            </h1>
          </b-badge>
        </b-col>
      </b-row>
      <!--card view for all sessions-->
      <b-row>
        <SessionCard/>
      </b-row>

      <Footer/>
    </b-container>
  </div>
</template>
<style>
@media only screen and (max-width: 768px) {
  .book_session_title {
    font-size: 1.5rem;
    font-family: cursive;
  }

  .carousel-caption {
    top: 0;
  }
}
</style>
