import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase' 
Vue.config.productionTip = false

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCiEkfc-a7If3cgqNHTjGHO12IxduD6Hj8",
  authDomain: "my-first-project-fea0b.firebaseapp.com",
  databaseURL: "https://my-first-project-fea0b.firebaseio.com",
  projectId: "my-first-project-fea0b",
  storageBucket: "my-first-project-fea0b.appspot.com",
  messagingSenderId: "69160221817",
  appId: "1:69160221817:web:7a5682842a8311d4dfa8a8",
  measurementId: "G-7RHMKZV30W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


 
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')




