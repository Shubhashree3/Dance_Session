<template>
  <div class="main_template" id="dance">
    <b-container fluid>
      <!--slide-->
      <div style="min-height: 30vh;"></div>
      <SessionCarousal/>
      <b-row class="p-4" id="aboutUs">
        <b-col cols="6" class="d-flex flex-column justify-content-center">
          <b-badge class="d-flex badge_text">
            <h4 class="title_text font-weight-bold text-center">
              BHARAMAR DANCE ACADEMY
            </h4>
          </b-badge>
          <p class="text-danger font-italic text-justify p-2" style="font-weight: bold;">
            With an aim to provide quality dance training and making dance available to all,
            BHRAMARA dance classes run throughout the year at multiple locations
            for students from ages four to eighty four providing them with training in various
            classical dance styles by Shubhashree’s expert faculty.
            The classes give them an opportunity to learn indian classical dance,
            express themselves creatively and perform on stage.
            Classes are available for kids(4 to 6 years),
            juniors(7 to 11 years) and adults(12 years onwards).
          </p>
        </b-col>
        <b-col cols="6" class="d-flex">
          <b-img src="~/assets/image/dance7.png" class="w-100 float-right"></b-img>
        </b-col>
      </b-row>
      <!--card-->
      <b-row class="p-3">
        <b-col class="d-flex flex-wrap justify-content-center">
          <b-badge class="d-flex badge_text">
            <h1 class="title_text  text-center justify-content-center">
              Book Your Free Session Now
            </h1>
          </b-badge>
        </b-col>
      </b-row>
      <!--card view for all sessions-->
      <b-row>
        <CardView type='user' @book-session = "showModal"/>
      </b-row>
    </b-container>

    <b-modal
      :title="activeSession.name+` Registration form`"
      ref="my-modal"
      hide-footer
      header-bg-variant="danger"
      header-text-variant="light"
      footer-bg-variant="danger">
    <form ref="form">
      <b-form-group
        label="Name"
        label-for="name-input"
        :state="userState"
        invalid-feedback="Name is required">
        <b-form-input
          id="name-input"
          v-model="user.username"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Mobile Number"
        label-for="mobno-input"
        invalid-feedback="Mobile no is required">
        <b-form-input
          id="mobno-input"
          v-model="user.mobNo"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group
        label="Email"
        label-for="email-input"
        :state="emailState"
        invalid-feedback="Email id is required">
        <b-form-input
          id="email-input"
          v-model="user.email"
          required>
        </b-form-input>
      </b-form-group>
    </form>
    <div>
      <label>
        <b>Note: </b>
        All the registered participants needs to reach {{activeSession.location}}
        at 15 minutes prior to session time({{activeSession.time}})
      </label>
    </div>
    <div>
    <b-button
      class=" ml-2 mt-3 float-right"
      variant="outline-primary"
       @click="handleSubmit">
      Submit
    </b-button>
    <b-button
      id="toggle-btn"
      class=" mt-3 float-right"
      variant="outline-danger"
       @click="resetModal">
      Cancel
    </b-button>
    </div>
    </b-modal>
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
</style>
<script type="text/javascript">
export default {
  layout: 'sessionLayout',
  data() {
    return {
      user: {
        username: '',
        mobNo: 0,
        email: null,
      },
      activeSession: 0,
      userState: null,
      emailState: null,
    };
  },
  methods: {
    checkFormValidity() {
      if (this.user.username === '') {
        this.userState = false;
        return false;
      }
      if (this.user.email === '') {
        this.emailState = false;
        return false;
      }
      return true;
    },
    resetModal() {
      this.user = {
        username: '',
        mobNo: 0,
        email: null,
      };
      this.$refs['my-modal'].hide();
    },
    handleOk(bvModalEvt) {
      bvModalEvt.preventDefault();
      this.handleSubmit();
    },
    handleSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.$store.dispatch('addToSubmittedUser', { user: this.user, sessionid: this.activeSession.id });
      this.$refs['my-modal'].hide();
    },
    showModal(session) {
      this.resetModal();
      this.activeSession = (session);
      this.$refs['my-modal'].show();
    },
  },
};
</script>
