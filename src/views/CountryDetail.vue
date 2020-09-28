<template>
    <section class="mt-24 container mx-auto px-4 md:px-8 mb-20">
        <bread-crumbs :route="routeUrl" />
        <loading-gif v-if="isLoading" />
        <div v-else>
            <div v-for="data in getCountry" :key="data.id">
                <country-card :dataCountry="data" class="w-full lg:w-1/2 flex flex-col bg-autumn-brown p-5 md:p-10 rounded shadow-md font-open-sans relative text-black-light" />
            </div>
            <div class="mt-10">
                <h2 class="font-open-sans text-lg text-black-light font-bold uppercase mb-6">Related countries</h2>
                <country-related :reg="region" />
            </div>
        </div>
    </section>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CountryDetail extends Vue {
    routeUrl: string = this.$route.params.id;
    region: string = "";
    // The getCountry function will filter through the fetched data from the store. It looks a item that corresponds with the id that is passed from the router. If it is a hit, it will make a new array with the filtered item. This wil result in the data gets shown.
    get getCountry() {
        const allCountries: Array<any> = this.$store.getters
            .allCountries;
        const filteredCountry = allCountries.filter((item) => {
            const { name, region } = item; 
            if (name === this.routeUrl) {
                this.region = region;
                return item;
            }
        });
        return filteredCountry;
    }
    // Gets the loading state that regulated the visibility of the loading gif.
    get isLoading() {
        return this.$store.getters.loadingInProgress;
    }
}
</script>