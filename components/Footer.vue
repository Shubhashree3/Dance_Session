<template>
  <b-row class="p-2  border-top border-2 border-danger rounded" id="footer">
    <b-col md="12" class="align-items-center d-flex flex-row justify-content-around">
      <h1 class="h1_text mobile_hide">Festival Of Dance</h1>
      <b-img src="~/assets/image/logo.png" class="w-25"></b-img>
      <div class="d-flex flex-column align-items-center mobile_hide">
        <h3 class="">Know More about dance</h3>
        <div>
          <b-button variant="outline-danger">
            <a href="https://en.wikipedia.org/wiki/Bharatanatyam" style="color: red;">Bharatnatyam</a>
          </b-button>
          <b-button variant="outline-danger">
            <a href="https://en.wikipedia.org/wiki/Mohiniyattam" style="color: red;">Mohiniyattam</a>
          </b-button>
        </div>
      </div>
    </b-col>
    <b-col class="d-flex flex-row justify-content-around align-items-center">
      <h5 class="mobile_small_text">@copyright 2021</h5>
      <h5 class="mobile_small_text">Bhramara Dance Academy</h5>
      <h5 class="mobile_small_text">Email: info@bda.com</h5>
    </b-col>
  </b-row>
</template>
<style type="text/css">
  .h1_text {
    text-shadow: 3px 3px;
  }

  @media only screen and (max-width: 768px) {
    .mobile_hide {
      display: none !important;
    }

    .mobile_small_text {
      font-size: 0.75rem;
    }
  }
</style>
