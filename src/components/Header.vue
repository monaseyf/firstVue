<template>
  <div>
    <v-app-bar color="secondary light" dense dark>
      <v-toolbar-title>stock trader</v-toolbar-title>
      <v-btn to="stock"> stock </v-btn>

      <v-btn to="portfolio"> portfolio </v-btn>
      <v-spacer></v-spacer>
      <div>
        <v-btn @click="randomizePrice"> End Day </v-btn>
      </div>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn min-width="200" icon v-bind="attrs" v-on="on">
            save and Load
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title @click="saveDate">Save</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title @click="loadData">Load</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-title>Funds: {{ funds | currency }}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  computed: {
    //   ...mapGetters([
    //   'stocks',
    //   'stockPortfolio',
    //   'funds'
    // ]),
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: 'loadData'
    }),

    randomizePrice() {
      this.randomizeStocks();
    },
    saveDate() {
      const data = {
        funds: this.$store.getters.funds,
        stocks: this.$store.getters.stocks,
        stockPortfolio: this.$store.getters.stockPortfolio,
      };
      console.log(data);
      alert("I am here");
      this.$http.put("data.json", data);
    },
    loadData() {
      console.log(this.fetchData);
      this.fetchData();
    },
  },
};
</script>