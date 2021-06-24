<template>
<div class="main_template" id="dance">
    <div style="min-height: 30vh;"></div>
    <b-container fluid>
      <b-row>
        <b-col  md="12" class="d-flex justify-content-center">
          <b-badge class="d-flex badge_text">
            <h1 class="title_text">Indian Classical Dances</h1>
          </b-badge>
        </b-col>
      </b-row>
       <b-row class="p-3 mt-4 bordered_box right_aligned_images">
        <b-col md="8" sm="12" class="d-flex flex-column justify-content-center align-items-center">
          <b-badge class="d-flex badge_text">
            <h4 class="title_text font-weight-bold text-center">
              Bharatnatyam
            </h4>
          </b-badge>
          <h5><p class="text-dark font-italic text-justify p-2 pt-4" >
            Bharatanatyam, also previously called Sadhir Attam,
            is a major form of Indian classical dance that originated in Tamil Nadu.
            It has flourished in the temples and courts of southern India since ancient times.
            It is one of the widely recognized eight forms of Indian classical dance
            (Kathak, Kuchipudi, Odissi, Kathakali, Mohiniyattam, Manipuri and Sattriya)
            and it expresses South Indian religious themes and spiritual ideas,
            particularly of Shaivism, Vaishnavism and Shaktism.
            Description of Bharatanatyam by 2nd CE is noted in ancient Tamil epic Silappatikaram,
            while temple sculptures of 6th to 9th century CE suggest it was a well
            refined performance art by the mid-1st millennium CE.
            Bharatanatyam is the oldest classical dance tradition in India.
            The dance form was prevalent in ancient Tamil Nadu,
            and several books have coded them such as Natya Shastra.
            Natya Shastra is just a codification by an unknown author &
            believed to be written by bharatha muni as per hindu mythology.
            Further, bharatanatyam is the state dance form of Tamil Nadu.
          </p></h5>
        </b-col>
        <b-col  md="4" sm="12"  class="d-flex">
          <b-img src="~/assets/image/danceshree1.png" class="w-100 float-right"></b-img>
        </b-col>
      </b-row>
      <b-row class="p-3 bordered_box">
        <b-col md="4" sm="12" class="d-flex">
          <b-img src="~/assets/image/Mohini.jpg" class="w-100 float-right"></b-img>
        </b-col>
        <b-col md="8" sm="12" class="d-flex flex-column justify-content-center align-items-center">
          <b-badge class="d-flex badge_text">
            <h4 class="title_text font-weight-bold text-center">
              Mohiniyattam
            </h4>
          </b-badge>
          <h5><p class="text-dark font-italic text-justify p-2 pt-4">
            Mohiniyattam, is an Indian classical dance form that developed and
            remained popular in the state of Kerala.
            Kathakali is another classical dance form of Kerala.
            Mohiniyattam dance gets its name from the word Mohini – a historical enchantress avatar
            of the Hindu god Vishnu, who helps the good prevail over evil by developing
            her feminine powers.
            Mohiniyattam's roots, like all classical Indian dances, are in the
            Natya Shastra – the ancient Hindu Sanskrit text on performance arts.
            However, it follows the Lasya style described in Natya Shastra,
            that is a dance which is delicate, eros-filled and feminine.
            It is traditionally a solo dance performed by women after extensive training.
            The repertoire of Mohiniyattam includes music in the Carnatic style,
            singing and acting a play through the dance, where the recitation may be
            either by a separate vocalist or the dancer herself.
            The song is typically in Malayalam-Sanskrit hybrid called Manipravalam.
          </p></h5>
        </b-col>
      </b-row>
      <b-row class="p-3 bordered_box right_aligned_images">
        <b-col md="8" sm="12" class="d-flex flex-column justify-content-center align-items-center">
          <b-badge class="d-flex badge_text">
            <h4 class="title_text font-weight-bold text-center">
              Kathak
            </h4>
          </b-badge>
          <h5><p class="text-dark font-italic text-justify p-2 pt-4" >
            Bharatanatyam, also previously called Sadhir Attam,
            is a major form of Indian classical dance that originated in Tamil Nadu.
            It has flourished in the temples and courts of southern India since ancient times.
            It is one of the widely recognized eight forms of Indian classical dance
            (Kathak, Kuchipudi, Odissi, Kathakali, Mohiniyattam, Manipuri and Sattriya)
            and it expresses South Indian religious themes and spiritual ideas,
            particularly of Shaivism, Vaishnavism and Shaktism.
            Description of Bharatanatyam by 2nd CE is noted in ancient Tamil epic Silappatikaram,
            while temple sculptures of 6th to 9th century CE suggest it was a well refined
            performance art by the mid-1st millennium CE.
            Bharatanatyam is the oldest classical dance tradition in India.
            The dance form was prevalent in ancient Tamil Nadu, and several books have coded
            them such as Natya Shastra.
            Natya Shastra is just a codification by an unknown author &
            believed to be written by bharatha muni as per hindu mythology.
            Further, bharatanatyam is the state dance form of Tamil Nadu.
          </p></h5>
        </b-col>
        <b-col  md="4" sm="12"  class="d-flex">
          <b-img src="~/assets/image/Kathak.jpg" class="w-100 float-right"></b-img>
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
