<template>
  <v-col md="4" sm="6">
    <v-card>
      <v-card-title class="portfolio-header"
        >{{ stock.name }}
        <small> (Quantity {{ stock.quantity }} | Price{{ stock.price }})</small>
      </v-card-title>
      <v-card-text>
        <input placeholder="Quantity" type="number" v-model="quantity" />
        <v-btn
          @click="sellStock"
          color="blue"
          :disabled="insufficientStock || quantity <= 0"
          >Sell
        </v-btn>
      </v-card-text>
    </v-card>
  </v-col>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    ...mapActions({
      sellStockOrder: "sellStock",
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      if (this.quantity <= this.stock.quantity) {
        this.sellStockOrder(order);
      }
      else {
        alert('nothing')
      }
      alert("you have sold" + this.quantity);
      this.quantity = 0;
    },
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientStock() {
      return this.quantity > this.stock.quantity;
    },
  },
};
</script>

<style scoped>
.portfolio-header {
  background-color: lightskyblue;
}
</style>