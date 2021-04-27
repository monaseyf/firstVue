import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import store  from './store/store'

Vue.config.productionTip = false


Vue.use(require('vue-jalali-moment'));

export const eventBus = new Vue(); 

new Vue({
	store: store,
	vuetify,
	router,
	render: h => h(App)
}).$mount('#app')
