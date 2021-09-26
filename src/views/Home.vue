<template>
  <div class="home">
    <Header
      v-bind:title="title"
      v-on:changeTitle="updateTitle($event)"
    ></Header>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
  },

  data() {
    return {
      valid: true,
      title: "hello vue",
    };
  },

  methods: {
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle;
    },
  },
};
</script>

<style >
.home {
  min-height: 100%;
  margin: 0 20%;
}
</style>
