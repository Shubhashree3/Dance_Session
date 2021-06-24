<template>
  <div>
    <div class="d-flex flex-column main_header align-items-center row">
      <div class="col-12 text-center">
        <b-img src="~/assets/image/logo.png" class="w-25 justify-content-center"></b-img>
      </div>
      <div class="col-12"><DanceNavbar/></div>
    </div>
  </div>
</template>
<style type="text/css">
  .main_header {
    position: fixed;
    z-index: 1000;
    height: auto;
    width: 100%;
    background: #fff;
    border-bottom: 2px solid #ed143d45;
  }
</style>
