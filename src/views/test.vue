<template>
  <div>
    <p>{{text | toUpperCase }}</p>
    <button @click="showComponent">show me</button>
    <div v-if="show">
      <List></List>
    </div>
  </div>
</template>
<script>
const List = () => ({
  component: import("../components/List"),
  timeout: 3000
});
export default {
  components: {
    List
  },
  data(){
    return {
      show: false,
      text:'my-home',
    }
  },
    filters: {
      toUpperCase(value){
        return value.toUpperCase();
      }
    },
  methods:{
    showComponent(){
      this.show = !this.show
    }
  }
};
</script> 
