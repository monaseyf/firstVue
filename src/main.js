import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import store  from './store/store'
import VueResource from 'vue-resource'
 /*  eslint-disable */

Vue.config.productionTip = false

Vue.use(require('vue-jalali-moment'));

Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-stock-trader-41fc9-default-rtdb.asia-southeast1.firebasedatabase.app/'

Vue.filter('currency', (value) => {
	return '$' + value.toLocaleString();
});
export const eventBus = new Vue(); 
  
new Vue({
	 store,
	vuetify,
	router,

	render: h => h(App)
}).$mount('#app')
