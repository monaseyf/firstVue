<template>
<div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <ArchParent/>
     <Ninjas v-bind:ninjas="ninjas"></Ninjas> -->
    <Header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></Header>
    <Footer />
    <About />
    <OtherProjects />
</div>
</template>

<script>
// @ is an alias to /src

// import HelloWorld from "@/components/HelloWorld.vue";
// import ArchParent from '../components/ArchParent.vue';
// import Ninjas from '../components/Ninjas.vue';
// import Header from '../components/Header.vue';
// import Footer from '../components/Footer.vue';
// import About from '../views/About.vue';
 import OtherProjects from '../views/OtherProjects.vue';

export default {
    name: "home",
    components: {
        // HelloWorld,
        // ArchParent,
        // Ninjas,
        // Header,
        // Footer,
        // About,
        OtherProjects,
    },

    data() {

        return {

            ninjas: [{
                    id: 1,
                    name: 'Ryu',
                    speciality: 'Vue Components',
                    show: false
                },
                {
                    id: 2,
                    name: 'Crystal',
                    speciality: 'HTML Wizardry',
                    show: false
                },
                {
                    id: 3,
                    name: 'Hitoshi',
                    speciality: 'Click Events',
                    show: false
                },
                {
                    id: 4,
                    name: 'Tango',
                    speciality: 'Conditionals',
                    show: false
                },
                {
                    id: 5,
                    name: 'Kami',
                    speciality: 'Webpack',
                    show: false
                },
                {
                    id: 6,
                    name: 'Yoshi',
                    speciality: 'Data Diggin',
                    show: false
                }
            ],

            title: 'hello vue',

        }
    },

    methods: {
        updateTitle: function (updatedTitle) {
            this.title = updatedTitle;
        }
    }
};
</script>

<style scoped>
.home {
    min-height: 100%;
}
</style>
