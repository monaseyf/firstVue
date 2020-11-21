<template>
<header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
</header>
</template>

<script>
import {
    bus
} from '../main';
export default {

    props: {
        title: {
            type: String,
            required: true
        }
    },

    data() {
        return {

        }
    },

    methods: {
        changeTitle: function () {
            // this.$emit('changeTitle', 'hello mona')
            this.title = 'hello mobin';
            bus.$emit('titleChanged', 'hello mobin')
        }
    }
}
</script>
