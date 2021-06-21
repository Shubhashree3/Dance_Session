<template>
  <b-row class="p-3">
    <b-col class="row d-flex justify-content-center ">
      <b-card
        v-for="session in sessions"
        :key="session.id"
        class="text-center mb-3 col-md-3 col-sm-6 text-uppercase zoomOnHover"
        :header="session.name">
        <b-card-img
          class="dance_card_img"
          :src="require(`~/assets/image/${session.img}`)"
          alt="Card image" >
        </b-card-img>
        <b-card-text  class="d-flex flex-column dance_card_text">
          <label class=" text-capitalize">
            Location :<span class="m-1 mt-0 mb-0">{{session.location}}</span>
          </label>
          <label class="text-capitalize">
            Date :<span class="m-1 mt-0 mb-0">{{session.date}}</span>
          </label>
        </b-card-text>
        <b-card-footer v-if="type == 'admin'" class="d-flex flex-column ">
          <label>Time :{{(session.time)}}{{type}}</label>
          <b-button  variant="outline-danger" @click="deleteSessions(session.id)">Delete Session
          </b-button>
          <NuxtLink
            class="btn btn-outline-danger text-capitalize col-12 mt-2"
            :to="`session/`+session.id">
            View Registered User
          </NuxtLink>
        </b-card-footer>
        <b-card-footer v-if="type!='admin'" class="d-flex flex-column">
            <label>Time :{{(session.time)}}{{type}}</label>
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
</template>
<script>
export default {
  created() {
    this.$store.dispatch('fetchSessions');
  },
  props: [
    'type',
  ],
  computed: {
    sessions() {
      return this.$store.state.sessions;
    },
  },
  methods: {
    deleteSessions(id) {
      this.$store.dispatch('deleteSessions', id);
    },
    showModal(session) {
      this.$emit('book-session', session);
    },
  },
};
</script>
