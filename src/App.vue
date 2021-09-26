<template>
  <v-app>
    <Header></Header>
    <v-main>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      links: [
        {
          label: "stock",
          url: "/Stock",
        },
        {
          label: "portfolio",
          url: "/Portfolio",
        },
        {
          label: "stock trader",
          url: "/",
        },
      ],
      items: ["Foo", "Bar"],
    };
  },
  created() {
    this.$store.dispatch["initStock"];
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>

<style>
  @import './css/general.css';
</style>
