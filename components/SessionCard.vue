<template>
  <div>
    <b-row class="p-3">
      <b-col class="row d-flex justify-content-center">
        <b-card
          v-for="session in sessions"
          :key="session.id"
          :header="session.name"
          class="text-center mb-3 col-md-3 col-sm-6  text-uppercase zoomOnHover">
          <b-card-img
            class="dance_card_img"
            :src="require(`~/assets/image/${session.img}`)"
            alt="Card image" >
            </b-card-img>

          <b-card-text class="d-flex flex-column dance_card_text">
            <label class=" text-capitalize">Location :
              <span class="m-1 mt-0 mb-0">{{session.location}}</span>
            </label>
            <label class="text-capitalize">Date :
              <span class="m-1 mt-0 mb-0 ">{{session.date}}</span>
            </label>
          </b-card-text>

          <b-card-footer class="d-flex flex-column">
            <label>Time :{{(session.time)}}</label>
            <b-button
              class="col-sm-12 col-md-12"
              @click="showModal(session)"
              variant="outline-danger">
              Book Now
            </b-button>
          </b-card-footer>

        </b-card>
      </b-col>
    </b-row>

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

<script>
export default {
  created() {
    this.$store.dispatch('fetchSessions');
  },

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
  computed: {
    sessions() {
      return this.$store.state.sessions;
    },
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
