<template>
  <b-row>
    <b-col>
      <b-carousel
        id="carousel-1"
        :interval="2000"
        controls
        indicators
        style="text-shadow: 1px 1px 2px #333;">

        <b-carousel-slide class="slider_image"  img-src="https://sites.google.com/site/vaneetashah/Untitled-3.jpg">
        <h2>Dancers Don't Need Wings To Fly!</h2>
        </b-carousel-slide>

        <b-carousel-slide class="slider_image" img-src="http://nspa.in/blog/wp-content/uploads/2018/07/odishi.jpg">
        <h2>Dance Is The Hidden Language Of Soul!</h2>
        </b-carousel-slide>

        <b-carousel-slide class="slider_image" img-src="https://pbs.twimg.com/media/Ef2tz74WAAErnyw.jpg">
        <h2>Never Miss The Chance To Dance!</h2>
        </b-carousel-slide>
      </b-carousel>
    </b-col>
  </b-row>
</template>
<style>
.slider_image {
  height: 100vh;
}

@media only screen and (max-width: 768px) {
  .slider_image {
    height: 50vh;
  }

  h2 {
    display: none;
  }
}
</style>
