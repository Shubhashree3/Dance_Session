<template>
  <div class="main_template" id="dance">
    <b-container fluid>
      <div style="min-height: 30vh;"></div>
      <b-row class="p-4">
        <b-col class="d-flex flex-wrap justify-content-center">
          <b-badge class="d-flex badge_text">
            <h1 class="title_text  text-center justify-content-center">
              You Can Register To Any Of Below Sessions
            </h1>
          </b-badge>
        </b-col>

      </b-row>
      <b-row>
        <b-col md="12">
        <PaymentCard/>
        </b-col>
      </b-row>

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

.badge_text {
  background-color: crimson;
  color: azure;
  max-width: max-content;
}

* {
  box-sizing: border-box;
}

.columns {
  float: left;
  width: 33.3%;
  padding: 8px;
}

.price {
  list-style-type: none;
  border: 1px solid #eee;
  margin: 0;
  padding: 0;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.price:hover {
  box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.2);
}

.price .header {
  background-color: #111;
  color: white;
  font-size: 25px;
}

.price li {
  border-bottom: 1px solid #eee;
  padding: 20px;
  text-align: center;
}

.price .grey {
  background-color: #eee;
  font-size: 20px;
}

.button {
  background-color: #04aa6d;
  border: none;
  color: white;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
}

@media only screen and (max-width: 600px) {
  .columns {
    width: 100%;
  }
}
</style>
<script type="text/javascript">
export default {
  layout: 'sessionLayout',
};
</script>
