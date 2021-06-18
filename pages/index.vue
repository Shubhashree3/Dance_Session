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

<script src="https://unpkg.com/vue"></script>
<link type="text/css" rel="stylesheet" href="http://unpkg.com/bootstrap/dist/css/bootstrap.min.css" />
<link type="text/css" rel="stylesheet" href="http://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-vue/2.21.2/bootstrap-vue.min.js" integrity="sha512-Z0dNfC81uEXC2iTTXtE0rM18I3ATkwn1m8Lxe0onw/uPEEkCmVZd+H8GTeYGkAZv50yvoSR5N3hoy/Do2hNSkw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
  export default {
    
  }      
</script>

<style>
  @media only screen and (max-width: 768px) {
  .book_session_title{
    font-size: 1.5rem;
    font-family: cursive;
  }
  .carousel-caption{
    top: 0;
  }
}
</style>
