<template>
    <h1>This is a callback page</h1>
</template>

<script>
export default {
  methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || "/callback");
    }
  },
  created() {
    this.$auth.handleAuthentication();
  }
};
</script>
