<template>
  <div class="main_template" id="dance">
    <b-container class="dance_container" fluid>
      <!--card-->
      <div style="min-height: 10vh;"></div>
      <b-row class="d-flex flex-row justify-items-around p-3">
        <b-col>
          <b-badge class >
            <h1 class="text-capitalize title_text" >Manage your Sessions </h1>
          </b-badge>
        </b-col>
        <b-col class="">
          <NuxtLink to="session">
            <b-button class=" float-right" variant="outline-primary" size="lg">
              View All Users
            </b-button>
        </NuxtLink>
          <b-button
            class=" float-right mr-2"
            @click="showModal"
            variant="outline-primary"
            size="lg"
            v-b-modal.modal-prevent-closing>
            Add Session
          </b-button>
        </b-col>

      </b-row>
      <CardView type='admin'/>
      <b-modal
        ref="my-modal"
        id="modal-prevent-closing"
        hide-footer title="Add Session"
        header-bg-variant="danger"
        header-text-variant="light"
        footer-bg-variant="danger"  >
        <form ref="form" >
          <b-form-group
            label="Id"
            label-for="id-input"
            :state="idState"
            invalid-feedback="id is required"
            >
            <b-form-input
              id="id-input"
              v-model="session.id"
              required>
            </b-form-input>
            </b-form-group>
              <b-form-group
              label="Image"
              label-for="img-input"
              :state="imgState"
              invalid-feedback="Image is required"
              >
              <b-form-input
                id="img-input"
                v-model="session.img"
                required>
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="Time"
              label-for="time-input"
              invalid-feedback="Time is required">
              <b-form-input
                id="time-input"
                v-model="session.time"
                required>
              </b-form-input>
            </b-form-group>

            <b-form-group
              label="Location"
              label-for="location-input"
              :state="locationState"
              invalid-feedback="location is required">
              <b-form-input
                id="location-input"
                v-model="session.location"
                required>
              </b-form-input>
            </b-form-group>

            <b-form-group
            label="Date"
            label-for="date-input"
            invalid-feedback="date is required">
            <b-form-input
              id="date-input"
              v-model="session.date"
              required>
            </b-form-input>
            </b-form-group>

            <b-form-group
              label="Name"
              label-for="name-input"
              :state="dateState"
              invalid-feedback="name is required">
              <b-form-input
                id="name-input"
                v-model="session.name"
                required>
              </b-form-input>
            </b-form-group>
          </form>
        <b-button
          class=" ml-2 mt-3 float-right"
          variant="outline-primary"
           @click="handleAdd">
          Add
        </b-button>
        <b-button
          id="toggle-btn"
          class=" mt-3 float-right"
          variant="outline-danger"
           @click="resetModal">
          Cancel
        </b-button>
      </b-modal>
      <div class="pt-3"></div>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'sessionLayout',

  data() {
    return {
      session:
        {
          id: '',
          img: '',
          time: '',
          location: '',
          name: '',
          date: '',
        },
      idState: null,
      imgState: null,
      locationState: null,
      dateState: null,
    };
  },
  methods: {
    checkFormValidity() {
      if (this.session.id === '') {
        this.idState = false;
        return false;
      }
      if (this.session.img === '') {
        this.imgState = false;
        return false;
      }
      if (this.session.location === '') {
        this.locationState = false;
        return false;
      }
      if (this.session.date === '') {
        this.dateState = false;
        return false;
      }
      return true;
    },
    resetModal() {
      this.session = {
        id: '',
        img: '',
        time: '',
        location: '',
        name: '',
        date: '',
      };
      this.$refs['my-modal'].toggle('#toggle-btn');
    },

    handleAdd(bvModalEvt) {
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.addSessions();
    },
    showModal() {
      this.resetModal();
      this.$refs['my-modal'].show();
    },
    addSessions() {
      if (!this.checkFormValidity()) {
        return;
      }
      this.$store.dispatch('addToSessions', this.session);
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing');
      });
    },
    deleteSessions(id) {
      this.$store.dispatch('deleteSessions', id);
    },
  },
};
</script>
<style type="text/css">
  .dance_container {
    padding-top: 8%;
  }
</style>
