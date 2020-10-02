import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import storeData from './store/index';
import './assets/styles/app.scss';

Vue.config.productionTip = false;
// Registration of all the components and packages. Most components are getting dynamically imported so they will only be imported when they are needed.
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.component('v-select', () => import('vue-select'));
Vue.component('country-related', () => import('./components/CountryRelated.vue'));
Vue.component('footer-component', () => import('./components/Footer.vue'));
Vue.component('navigation', () => import('./components/Nav.vue'));
Vue.component('country-card', () => import('./components/CountryCard.vue'));
Vue.component('modal', () => import('./components/Modal.vue'));
Vue.component('home-button', () => import('./components/HomeButton.vue'));
Vue.component('bread-crumbs', () => import('./components/BreadCrumbs.vue'));
Vue.component('loading-gif', () => import('./components/LoadingGif.vue'));
Vue.component('region', () => import('./components/Region.vue'));
Vue.component('category-button', () => import('./components/CategoryButton.vue'));
Vue.component('region-overview', () => import('./components/RegionOverview.vue'));
Vue.component('select-component', () => import('./components/Select.vue'));
Vue.component('delete-svg', () => import('./components/DeleteSvg.vue'));

// Use of Vue router to define all the different paths and which components has to be loaded
const routes = [
    { path: '/', component: () => import('./views/HomeTwo.vue'), name: 'HomeTwo' },
    { path: '/europe', component: () => import('./views/Europe.vue'), name: 'Europe' },
    { path: '/asia', component: () => import('./views/Asia.vue'), name: 'Asia' },
    { path: '/americas', component: () => import('./views/Americas.vue'), name: 'Americas' },
    { path: '/africa', component: () => import('./views/Africa.vue'), name: 'Africa' },
    { path: '/oceania', component: () => import('./views/Oceania.vue'), name: 'Oceania' },
    { path: '/europe/country/:id', component: () => import('./views/CountryDetail.vue'), name: 'Country detail' },
    { path: '/random-country', component: () => import('./views/RandomPage.vue'), name: 'Random country'}
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// The store data gets imported and used to create a new Vuex store.
const store = new Vuex.Store(storeData as object);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
