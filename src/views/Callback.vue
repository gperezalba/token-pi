<template>
  <div>
    <h1>This is a callback page</h1>
    <div v-if="profile">
      <div>
        <div>
          <img :src="profile.picture">
        </div>
        <div>
          <h2>{{ profile.name }}</h2>
          <p>{{ profile.email }}</p>
        </div>
      </div>

      <div>
        <pre>{{ JSON.stringify(profile, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: this.$auth.profile
    };
  },
  methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || "/callback");
      this.profile = data.profile;
    }
  },
  created() {
    this.$auth.handleAuthentication();
  }
};
</script>
