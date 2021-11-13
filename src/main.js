import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false;

if ('serviceWork' in navigator) {
  window.addEventListener('load', ()=>{
    navigator.serviceWork.regiser('service-work.js').then(registration=>{
      console.log('SW registered:', registration);
    }).catch(registrationError=>{
      console.log('SW registered failed', registrationError);
    })
  })
}

new Vue({
  render: h => h(App),
}).$mount('#app')
