import { mapActions } from 'vuex'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
  //   onLogin(){
  //     console.log(this.username + ':' + this.password);
  // },
    
    ...mapActions(['login']),

    onLogin() {
      this.login({ username: this.username, password: this.password })
        .then(() => {
          this.$router.push({path: this.$route.query.redirect || '/'})
        })
    }
  }
}


