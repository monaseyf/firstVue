<template>
   <div>
      
     <ArchChild v-bind:Arch="Arch"></ArchChild>
  
   </div>
</template>

<script>

import ArchChild from './ArchChild.vue';

export default {

    components:{
       'ArchChild':ArchChild, 
    },

    data() {
            return {
                Arch: [
                        { id: 1, title: `final Project`, date: 2019, },
                        { id: 2, title: `Iranian Art Musuem`, date: 2018, },
                        { id: 3, title: `Residential Complex`, date: 2019,},
                    ],
                   
            }
        },
}
</script>