<template>
  <div class="main_template" id="dance">
    <Header/>
    <b-container fluid class="dance_container">
      <b-row class="data">
          <b-col cols="10" offset="1"><h1>{{session.name}} || Location: {{session.location}} || Date: {{session.date}}|| Time: {{session.time}}</h1></b-col>
        <b-col cols="10" offset="1" class=" d-flex ">
          <b-table bordered striped hover light table-variant="danger" :items="submitedUsers" class="text-center" :fields="fields"></b-table>
        </b-col>
      </b-row>
      <div v-if="submitedUsers.length<=5" class="footer_length"></div>
      <Footer/>
    </b-container>
  </div>
</template>


<script>
  export default {
    created(){
     this.$store.dispatch('fetchSubmittedUsers')
     this.$store.dispatch('fetchSessions')
   },

    data() {
      return{
        fields: ['username', 'mobNo', 'email']
      }
    },
    computed:{
      submitedUsers(){
        var users = this.$store.state.submittedUsers
        if(typeof(this.$route.params.id)=='undefined')
        {
          return users
        }
        else
        {
          return users.filter((user)=> user.session_id == this.$route.params.id)
        }
      },
      session(){
        if(typeof(this.$route.params.id)=='undefined')
        {
          return {name:"All Sessions", location:"Multiple Locations",date:"-- ",time:"-- "}
        }
        else
        {
          var sessions = this.$store.state.sessions.filter((session)=> session.id == this.$route.params.id)
          if(sessions.length == 1)
          {
            return sessions[0]
          }
          else
          {
            return {name:"Invalid Session id", location:"--",date:"-- ",time:"-- "}
          }
        }
      }
    }
  }        
</script>
<style type="text/css">
  .dance_container{
    padding-top: 10%;
  }
  .footer_length{
    min-height: 30vh;
  }
</style>