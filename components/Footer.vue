<template>
  <b-row class="p-2  border-top border-2 border-danger rounded">
    <b-col cols="12" class="align-items-center d-flex flex-row justify-content-around">
      <h1 class="h1_text">Festival Of Dance</h1>
      <b-img src="~/assets/logo.png" class="w-25"></b-img>
      <div class="d-flex flex-column align-items-center">
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
      <h5>@copyright 2021</h5>
      <h5>Bhramara Dance Academy</h5>
      <h5>Email: info@bda.com</h5>
    </b-col>
  </b-row>  
</template>
<style type="text/css">
  .h1_text{
    text-shadow:3px 3px;
  }
</style>