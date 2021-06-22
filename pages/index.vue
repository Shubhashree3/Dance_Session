<template>
  <div class="main_template" id="dance">
    <b-container fluid>
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
