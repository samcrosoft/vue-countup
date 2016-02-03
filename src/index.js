/**
 * Created by Adebola on 03/02/2016.
 */
import VueCountUpComponent from './VueCountUp.vue';

/*
 * expose the install method
 */
export function install(Vue) {
    /*
     * Set the component to the Vue object
     */
    Vue.component('vuecountup', VueCountUpComponent);
}
