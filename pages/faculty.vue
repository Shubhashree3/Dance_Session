<template>
  <div class="main_template" id="dance">
    <div style="min-height: 30vh;"></div>
    <b-container fluid>
      <b-row>
        <b-col  md="12" class="d-flex justify-content-center">
          <b-badge class="d-flex badge_text">
            <h1 class="title_text">Faculities of Bhramara Dance Academy</h1>
          </b-badge>
        </b-col>
      </b-row>
       <b-row class="p-3 mt-4 bordered_box right_aligned_images">
        <b-col md="8" sm="12" class="d-flex flex-column justify-content-center align-items-center">
          <b-badge class="d-flex badge_text">
            <h4 class="title_text font-weight-bold text-center">
              Sonal Sagathiya
            </h4>
          </b-badge>
          <h5><p class="text-dark font-italic text-justify p-2 pt-4" >
            She is a Leading Kathak(dance) artist,
            Senior Faculty of Bhramara Dance Academy snice lasst 25 years,
            and she is also a  T.V. artist.
            Sonal Sagathiya has performed  in, National and International Shows.
            Her main objectives are invites enthusiastic learners from india
            to learn the art of Kathak dance.
          </p></h5>
        </b-col>
        <b-col  md="4" sm="12"  class="d-flex">
          <b-img src="~/assets/image/Sonal.jpeg" class="w-100 float-right"></b-img>
        </b-col>
      </b-row>
      <b-row class="p-3 bordered_box" id="teacher2">
        <b-col md="4" sm="12" class="d-flex">
          <b-img src="~/assets/image/Purvi.jpeg" class="w-100 float-right"></b-img>
        </b-col>
        <b-col md="8" sm="12" class="d-flex flex-column justify-content-center align-items-center">
          <b-badge class="d-flex badge_text">
            <h4 class="title_text font-weight-bold text-center">
              Purvi Sheth
            </h4>
          </b-badge>
          <h5><p class="text-dark font-italic text-justify p-2 pt-4">
            She is a Leading Bharatnatyam (dance) artist,
            Senior Faculty of Bhramara Dance Academy snice lasst 10 years,
            and she is also a  T.V. artist.
            Purvi Sheth has performed  in, Leicester, Londan and in some other cities of India.
            Her main objectives are invites enthusiastic learners from abroad
            to learn the art of Bharatnatyam dance.
            She wants assignment on contract basis for limited period from / in other countries.
          </p></h5>
        </b-col>
      </b-row>
      <b-row class="p-3 bordered_box right_aligned_images">
        <b-col md="8" sm="12" class="d-flex flex-column justify-content-center align-items-center">
          <b-badge class="d-flex badge_text">
            <h4 class="title_text font-weight-bold text-center">
              Swati Daithankar
            </h4>
          </b-badge>
          <h5><p class="text-dark font-italic text-justify p-2 pt-4">
            She is a Leading Bharatnatyam (dance) artist,
            Senior Faculty of Bhramara Dance Academy snice lasst 20 years,
            and she is also a  T.V. artist.
            Swati Daithankar has performed  in, India and Abroad.
            Her main objectives are invites enthusiastic learners from abroad
            to learn the art of Bharatnatyam dance.
            She wants assignment on contract basis for limited period from / in other countries.
          </p></h5>
        </b-col>
        <b-col  md="4" sm="12" class="d-flex">
          <b-img src="~/assets/image/Swati.jpeg" class="w-100 float-right"></b-img>
        </b-col>
      </b-row>

    <div style="min-height: 30vh;"></div>
    </b-container>

  </div>
</template>
<style>
@media only screen and (max-width: 768px) {
  .book_session_title {
    font-size: 1.5rem;
    font-family: cursive;
  }

  h1 {
    font-size: 1.5rem;
  }

  .right_aligned_images {
    display: flex;
    flex-direction: column-reverse !important;
  }
}

.bordered_box {
  border: 2px solid;
  margin: 5px;
  border-radius: 25px;
}

.badge_text {
  background-color: crimson;
  color: #f0f5f5;
  max-width: max-content;
}
</style>
<script type="text/javascript">
export default {
  layout: 'sessionLayout',
};
</script>
