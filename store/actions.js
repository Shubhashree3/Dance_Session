export default {
	
	fetchSessions(store){
		this.$axios.$get('sessions')
		.then((sessions)=>{
			store.commit('setSessions',sessions);
		})
	},
	addToSessions(store,newSession) {
		this.$axios.$post('sessions',newSession)
		.then(()=>{
			store.dispatch('fetchSessions');
		})
	},
	deleteSessions(store,id) {
		this.$axios.$delete('sessions/'+id)
		.then(()=>{
			store.dispatch('fetchSessions');
		})
	},
	addToSubmittedUser(store,data){
		var user = data.user;
		user.session_id = data.sessionid
		this.$axios.$get('submittedUsers?_sort=id&_order=desc&_limit=1')
		.then((result)=>{
			user.id = result[0].id +1
		})

		this.$axios.$post('submittedUsers',user)
		.then(()=>{
			store.dispatch('fetchSubmittedUsers');
		})
	},
	fetchSubmittedUsers(store){
		this.$axios.$get('submittedUsers')
		.then((submittedUsers)=>{
			store.commit('setSubmittedUsers',submittedUsers);
		})
	}

}
