<template>
   <v-row >
       <v-col class="col-lg-3">
          <v-card
            width="256"
            height="100vh"
            tile>
      <v-navigation-drawer permanent>
        <v-system-bar></v-system-bar>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>
  
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                sysadmin
              </v-list-item-title>
              <v-list-item-subtitle>admin@email.com</v-list-item-subtitle>
            </v-list-item-content>
  
            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
       </v-col>
       <v-col class="col-lg-9 my-10">
           <v-card>
               <v-card-title class="myTitle">بخش اطلاعات فردی
                 
               </v-card-title>
               <v-row>
                   <!--<v-col class="col-lg-12">
                          <v-data-table
                            :headers="headers"
                            :items="countries"
                            :items-per-page="5"
                            class="elevation-1"
                        ></v-data-table> 
                   </v-col>-->
                   <v-col class="col-lg-12">
                     <p>نام و نام خانوادگی <span>{{recievedMessage}}</span></p>   
                   </v-col>
                    <v-col class="col-lg-12">
                     <p>کد ملی <span>{{recievedMessage1}}</span></p>   
                   </v-col>
               </v-row>
           </v-card>
       </v-col>
   </v-row>
</template>

<script>
import {eventBus} from '../../main'; 

export default {
    data(){
        return{
            selectedItem: 0,
            recievedMessage:'',
             recievedMessage1:'',
            items: [
                { text: 'My Files', icon: 'mdi-folder' },
                { text: 'Shared with me', icon: 'mdi-account-multiple' },
                { text: 'Starred', icon: 'mdi-star' },
                { text: 'Recent', icon: 'mdi-history' },
                { text: 'Offline', icon: 'mdi-check-circle' },
                { text: 'Uploads', icon: 'mdi-upload' },
                { text: 'Backups', icon: 'mdi-cloud-upload' },
            ],
            headers: [
                {
                text: 'نام و نام خانوادگی',
                align: 'start',
                sortable: false,
                value: 'name',
                },
                { text: 'کد ملی', value: '' },
                { text: 'محل تولد', value: '' },
                { text: 'آدرس', value: '' },
                { text: 'آدرس ایمیل', value: '' },

      ],

      //        headers: [
      //           {
      //           text: 'Countries',
      //           align: 'start',
      //           sortable: false,
      //           value: 'name',
      //           },
      //           { text: 'SalesRate', value: 'SalesRate' },
      //           { text: 'Number Of Participant', value: 'Participant' },
      //           { text: 'Famous Brand', value: 'Brand' },
      //           { text: 'Year', value: 'year' },

      // ],
      // countries: [
      //   {
      //     name: 'America',
      //     SalesRate: 159,
      //     Participant: 6.0,
      //     Brand: 24,
      //     year: 2019,

      //   },
      //   {
      //     name: 'Canada',
      //     SalesRate: 237,
      //     Participant: 9.0,
      //     Brand: 37,
      //     year: 2020,
 
      //   },
      //   {
      //     name: 'Iran',
      //     SalesRate: 262,
      //     Participant: 16.0,
      //     Brand: 23,
      //     year: 2020,
 
      //   },
      //   {
      //     name: 'Germany',
      //     SalesRate: 305,
      //     Participant: 3.7,
      //     Brand: 67,
      //     year: 2020,

      //   },
      //   {
      //     name: 'Japn',
      //     SalesRate: 356,
      //     Participant: 16.0,
      //     Brand: 49,
      //     year: 2018,

      //   },
      //   {
      //     name: 'China',
      //     SalesRate: 375,
      //     Participant: 0.0,
      //     Brand: 94,
      //     year: 2018,

      //   },
      //   {
      //     name: 'India',
      //     SalesRate: 392,
      //     Participant: 0.2,
      //     Brand: 98,
      //     year:2019,

      //   },
      //   {
      //     name: 'Italy',
      //     SalesRate: 408,
      //     Participant: 3.2,
      //     Brand: 87,
      //     year: 2020,

      //   },
      //   {
      //     name: 'France',
      //     SalesRate: 452,
      //     Participant: 25.0,
      //     Brand: 51,
      //     year: 2018,

      //   },
      //   {
      //     name: 'Poland',
      //     SalesRate: 518,
      //     Participant: 26.0,
      //     Brand: 65,
      //     year: 2020,

      //   },
      // ],
        }
    },
    created() {
          eventBus.$on('myName', this.eventHandlerMethod)
           console.log('show me my name')
           eventBus.$on('mynationalCode', this.eventHandlerMethod)
           console.log('show me my national code')
        },
        methods:{
          eventHandlerMethod (name,nationalCode) {

             this.recievedMessage = name;
             this.recievedMessage1 = nationalCode;
             console.log('what is happening?')

        }
        }
        
}
</script>
<style scoped>

</style>