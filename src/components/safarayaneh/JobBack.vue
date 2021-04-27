<template>
    <v-main>
    <v-row>
        <v-col class="col-lg-12">
        <h5 class="myTitle"> سوابق شغلی</h5>
           <v-btn @click="Add(input,inputValue)">
                  <v-img width="40px" height="40px" src="../../assets/plus.png"/>
                </v-btn>
        </v-col>
    </v-row>              

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
             <th class="text-right">
            حذف
            </th>
            <th class="text-right">
            تا تاریخ
            </th>
             <th class="text-right">
           از تاریخ
            </th>
             <th class="text-right">
             شماره تماس و نام مسئول
            </th>
             <th class="text-right">
            نام شرکت
            </th>
            
          </tr>
        </thead>
        <tbody>
          <tr  v-for="(input, index) in inputValue"
          :key="`inputValue-${index}`" :v-model="input.text">
            <td> 
              <v-btn @click="remove(index,inputValue)">
              <v-img width="40px" height="40px" src="../../assets/minus1.png"/>
              </v-btn>
              </td>
            <td><v-text-field ></v-text-field></td>
            <td> <v-text-field ></v-text-field></td>
            <td><v-text-field ></v-text-field></td>
            <td><v-text-field ></v-text-field></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    </v-main>
</template>
<script>
export default {
    data(){
        return{
           inputValue: [{ text: "" }],
        }
    },
     methods:{
      Add(value, fieldType){
      fieldType.push({ value: "" });
      },
     remove(index, fieldType){
        fieldType.splice(index, 1);
       }
    }
}
</script>
<style scoped>

</style>