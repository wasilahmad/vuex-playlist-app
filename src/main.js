import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Twitter Boostrape 
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faList, faPlus, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faStar, faList, faPlus, faPlusCircle, faTrash)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
