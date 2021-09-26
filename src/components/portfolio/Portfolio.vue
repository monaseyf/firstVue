<template>
    <v-row>
        <OneStock v-for="stock in stocks" :key="stock.id" :stock="stock"></OneStock>
    </v-row>
</template>
<script>
import OneStock  from './OneStock.vue'
import {mapGetters} from 'vuex'
export default {
    components: {
     OneStock
    },
    computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        })
    },
}
</script>