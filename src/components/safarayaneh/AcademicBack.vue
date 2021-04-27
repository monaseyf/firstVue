<template>
    <v-main >
       <v-form>
    <v-row>
        <v-col class="col-lg-12 col-md-6 col-sm-12">
        <h5 class="myTitle">
          سوابق تحصیلی</h5>
             <v-btn @click="Increase(input,inputValue)">
                  <v-img width="40px" height="40px" src="../../assets/plus.png"/>
          </v-btn>
        </v-col>
    <v-col class="col-lg-12 col-md-6 col-sm-12">
      
       <!--s<select v-model="selected">
          <option v-for="item in  items" :key="item.id" v-bind:value="{ item }">
          {{item}}
          </option>
        </select>
         <h2>{{selected.item}}</h2> -->
            
  
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
             <th class="text-right">
              حذف
            </th>
            <th class="text-right">
             رشته  
            </th>
             <th class="text-right">
              معدل
            </th>
             <th class="text-right">
              آدرس
            </th>
            <th class="text-right">
              مقطع تحصیلی 
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
           v-for="(input, index) in inputValue"
          :key="`inputValue-${index}`" :v-model="input.text">
          <td> 
              <v-btn @click="remove(index,inputValue)">
              <v-img width="40px" height="40px" src="../../assets/minus1.png"/>
              </v-btn>
              
              </td>
            <td><v-text-field ></v-text-field></td>
            <td><v-text-field ></v-text-field></td>
            <td><v-text-field ></v-text-field></td>
            <td>
           
              <v-select
                reverse
               :items="items"
                label="مقطع تحصیلی">
              </v-select>
              </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-col>
    </v-row>
</v-form>
    </v-main>
</template>
<script>
export default {
    data(){
        return{
           selected: ['لطفا یک مورد را انتخاب کنید'],
      items: [
        'دبیرستان',
        'کاردانی',
        'کارشناسی',
        'کارشناسی ارشد',
      ],

            academicLevel: [
        {
          name: 'دبیرستان',
        },
        {
          name: 'کاردانی',
         
        },
        {
         name: 'کارشناسی',

        },
        {
          name: 'کارشناسی ارشد',

        }
      ],
      inputValue: [{ text: "" }],
    
        }
    },
    methods:{
      Increase(value, fieldType){
      fieldType.push({ value: "" });
      },
      remove(index, fieldType){
        fieldType.splice(index, 1);
       },

    }
}
</script>
<style >
select{
  border: 1px solid black;
  /* border-radius: 1rem; */
}

</style>