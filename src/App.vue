<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Token-Pi</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" class="mr-2">Home</v-btn>
      <v-btn to="/about" class="mr-2">About</v-btn>
      <v-btn @click.prevent="login" class="mr-2" v-if="!isAuthenticated">Login</v-btn>
      <v-btn to="/callback" class="mr-2" v-if="isAuthenticated">Profile</v-btn>
      <v-btn to="/buy" class="mr-2" v-if="isAuthenticated">Buy</v-btn>
      <v-btn to="/transact" class="mr-2" v-if="isAuthenticated">Transact</v-btn>
      <v-btn to="/sell" class="mr-2" v-if="isAuthenticated">Sell</v-btn>
      <v-btn @click.prevent="logout" class="mr-2" v-if="isAuthenticated">Logout</v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      isAuthenticated: false
    };
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }
  }
}
</script>
