<template>
  <v-row>
    <Stock v-for="item in stocks" :key="item.id" :stock="item"></Stock>
  </v-row>
</template>
<script>
import Stock from './Stock.vue';
export default {
  components: { Stock },
  data() {
    return {
    };
  },
  computed:{
    stocks(){
      return this.$store.getters['stocks']
    }
  }
};
</script>
