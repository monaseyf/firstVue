<template>
    <div >
       
         <v-card v-for="item in Arch" :key="item.id" >
                <v-card-title >
                    {{item.title}}
                </v-card-title>
                <v-card-text >
                    ID: {{item.id}}
                    <br/>
                    Age: {{item.date}}
                   
                </v-card-text>
                </v-card>       
    </div>
</template>
<script>
export default {
    props:['Arch'],

    data() {
            return {
               
            }
        },
}
</script>