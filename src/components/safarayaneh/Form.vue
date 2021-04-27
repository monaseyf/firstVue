<template>
    <v-main >
      <div class="myForm">
       <v-row>
         <v-col> 
           <h5 class="myTitle">اطلاعات فردی</h5>
           
           </v-col>
       </v-row>
    <v-form 
     ref="form"
    v-model="formValidity"> 

          <v-row>
            <v-col class="col-lg-12">
               
                <v-row>
                  <v-col class="col-lg-4 col-md-6 col-sm-12">
                      <v-text-field 
                      label="نام و نام خانوادگی " 
                      @keypress="isLetter($event)"
                      required
                      :rules="TextRules"
                     v-model= name
                      reverse>
                      </v-text-field>
                      <v-text-field 
                      type="text" 
                      label="محل تولد"
                      @keypress="isLetter($event)"
                        :rules="TextRules"
                      required
                       reverse> 
                       </v-text-field>
                      <v-text-field 
                      type="email" 
                      label="آدرس ایمیل"
                      :rules="emailRules"
                      required
                       reverse> </v-text-field>  
                  </v-col>
                   
                  <v-col class="col-lg-4 col-md-6 col-sm-12">
                    <v-text-field
                    type="text"
                    maxlength="10"
                     label="کد ملی" 
                    @keypress="isNumber($event)"
                     required 
                     v-model="nationalCode"
                     :rules="nationalCodeRules"
                     reverse></v-text-field>
               
                    <v-text-field 
                    @keypress="isLetter($event)"
                      :rules="TextRules" 
                      label="شغل درخواستی" 
                      reverse> </v-text-field>

                    <v-text-field 
                    @keypress="isLetter($event)" 
                    label="آدرس"
                    :rules="TextRules"
                    required
                    reverse> </v-text-field>  
                  </v-col>

                  <v-col class="col-lg-4 col-md-6 col-sm-12">

                    <v-text-field 
                      :rules="TextRules"
                       label="متولد" 
                       type="date" 
                       reverse>
                      
                    </v-text-field>

                    <v-text-field 
                    type="tel" 
                    label="تلفن"
                     @keypress="isNumber($event)"
                    maxlength="11"
                    reverse> </v-text-field>

                     <v-select
                      :items="items"
                      label="وضعیت تاهل"
                      solo
                      :rules="TextRules"
                      reverse
                       required 
                    ></v-select>

                    
                  </v-col>
                    
                </v-row>   
            </v-col>
        </v-row>
  </v-form> 
   <academic-back/> 
   <job-back/>    
       <v-btn 
        @click="submitInfo" 
        class="myButton" 
        :disabled="!formValidity"
        color="info">ثبت نهایی</v-btn>
        <v-spacer></v-spacer>
        </div>
        <!-- <dashboard/> -->
    </v-main>
</template>
<script>

import AcademicBack from './AcademicBack.vue'
import JobBack from './JobBack.vue'
import {eventBus} from '../../main';
// import Dashboard from './Dashboard.vue'



export default {
  components: { 
    AcademicBack,
    JobBack,
    // Dashboard 
    },
    data(){
      return{
           name:'',
           nationalCode:'',
           formValidity: false,
            items: ['مرد', 'زن'],
           emailRules: [
            value => !!value || 'پر کردن ایمیل اجباری است'],

          nationalCodeRules:[
            value =>  !!value || 'پر کردن کد ملی اجباری است',
          ],
          TextRules:[
             value => !!value || 'این فیلد اجباری است'
          ]
        }
    },
//     computed:{
//     studentName:{

//     get() {
//       return this.$store.state.studentName
//     },
//     set (value) {
//       this.$store.commit('setStudentName',value)
//     }
//     }

//  },

  methods:{
      submitInfo(){
          this.$refs.form.validate()
           if(this.name !== ''){
         eventBus.$emit('myName', this.name);
        } else if 
            (this.nationalCode !== ''){
         eventBus.$emit('mynationalCode', this.nationalCode);
        }
   
      },
       isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z]+$/.test(char)) return true;
      else e.preventDefault();
    },

  }
}
</script>
<style>

.myTitle{
  /* justify-content: space-between; */
  /* background-color: rgb(201, 201, 201); */
  border-radius: 0.5rem;
  border:1px solid rgb(201, 201, 201);
  font-size: 1.5rem;
  float: right;
    padding: 10px 20px;
}
.theme--light.v-btn.v-btn--has-bg{
  background-color:transparent;
}
/* .myForm{
  background-color:rgb(239 239 239); 
} */
</style>