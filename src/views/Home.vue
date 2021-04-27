<template>
<div class="home">

    <Header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></Header>
   <v-form @submit.prevent="submitInfo">
        <Form  v-model="valid"></Form>
        <!-- <academic-back/>
        <job-back/> -->
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
   </v-form>
   
</div>
</template>

<script>

import Form from '../components/safarayaneh/Form.vue'
// import JobBack from '../components/safarayaneh/JobBack.vue';
// import AcademicBack from '../components/safarayaneh/AcademicBack.vue';



export default {
    name: "home",
    components: {
        Form,
        // AcademicBack,
        // JobBack
    },

    data() {

        return {

            valid: true,
            title: 'hello vue',

        }
    },

    methods: {
        updateTitle: function (updatedTitle) {
            this.title = updatedTitle;
        },
        submitInfo(){
            alert('thanks for giving us these information')
        }
    }
};
</script>

<style >
.home {
    min-height: 100%;
    margin: 0 20%;
}
</style>
