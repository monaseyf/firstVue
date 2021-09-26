<template>
    <div>
      <v-card>
          <v-card-title>
              Trade or View your Portfolio
          </v-card-title>
          <v-card-text>
              You may save and load data
          </v-card-text>
            <v-card-text>
              click on 'end day' to begin a new day!
          </v-card-text>
          <v-card-subtitle>
              Your Funds:  {{ funds | currency }}
          </v-card-subtitle>
      </v-card>
      <div>
          <ul>
              <li v-for="item in myNewArray" :key="item">{{ item }}</li>
          </ul>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        myArray : [1,2,3,4]
        }
    },
    computed: {
        funds(){
            return this.$store.getters.funds
        },
        myNewArray(){
            return this.myArray.map(item => item * 2)
        }
    }
}
</script>