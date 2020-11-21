<template>
<div>
    <p>Copyright 2017 {{ title }}</p>
</div>
</template>

<script>
import {
    bus
} from '../main';

export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            copyright: 'Copy Right'
        }
    },
    created() {
        bus.$on('titleChanged', (data) => {
            this.title = data;
        })
    }
}
</script>
