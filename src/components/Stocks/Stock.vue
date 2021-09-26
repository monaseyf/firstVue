<template>
  <v-col md="4" sm="6">
    <v-card>
      <v-card-title class="stock-header"
        >{{ stock.name }}
        <span>{{ stock.price }}</span>
      </v-card-title>
      <v-card-text>
        <input placeholder="Quantity" type="number" v-model="quantity" />
        <v-btn @click="buyStock" color="green" 
        :disabled="insufficientFunds || quantity<= 0"
          >{{insufficientFunds ? 'insufficient Funds' : 'Buy'}}</v-btn
        >
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.stock.price * this.quantity > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      //  console.log(!Number.isInteger(this.quantity));
      this.$store.dispatch("buyStock", order);
      console.log(this.$store.getters.secondStocks);
    },
  },
};
</script>
<style scoped>
.stock-header {
  background-color: lightgreen;
}
</style>