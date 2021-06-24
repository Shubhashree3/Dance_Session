<template>
  <b-navbar toggleable="lg" class="pt-0">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav  >
      <b-navbar-nav >
        <b-nav-item href="/danceInfo">Dance</b-nav-item>
        <b-nav-item href="/#aboutUs" >About Us</b-nav-item>
        <b-nav-item-dropdown text="Faculties" right >
          <b-dropdown-item href="/faculty">Purvi Sheth</b-dropdown-item>
          <b-dropdown-item href="/faculty">Sonal Sagthiya</b-dropdown-item>
          <b-dropdown-item href="/faculty">Swati Daithankar</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <NuxtLink
            class="btn btn-outline-danger text-capitalize "
            to="/joinUs">
            Register For Regular Sessions
          </NuxtLink>
          <NuxtLink
            class="btn btn-outline-danger ml-2 text-capitalize "
            to="#footer">
            Contact Us
          </NuxtLink>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style type="text/css">
.nav {
  background: crimson important;
}

.nav-link {
  color: crimson !important;
}
</style>
