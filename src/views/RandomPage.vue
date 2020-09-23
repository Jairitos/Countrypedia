<template>
    <section class="mt-32 container mx-auto px-4 md:px-8">
        <BreadCrumbs :route="routeUrl"></BreadCrumbs>
        <div class="w-full flex flex-col md:flex-row">
            <h1 class="inline-block w-full md:w-2/3 font-open-sans text-black-light text-lg font-bold mb-6 uppercase leading-none">Random Country</h1>
        </div>
        <button @click="generateRandomNumber" type="button" class="btn py-2 px-2 text-center rounded bg-white border-2 border-stone-blue hover:bg-stone-blue hover:text-white focus:outline-none">Random Country</button>
        <LoadingGif v-if="isLoading"></LoadingGif>
        <div v-else>

            <CountryCard :dataCountry="showRandomCountry" class="w-full lg:w-1/2 flex flex-col bg-autumn-brown p-5 md:p-10 rounded shadow-md font-open-sans text-black-light relative mt-10 mb-16"></CountryCard>
        </div>
    </section>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class RandomPage extends Vue {
    randomNumber: number = 0;
    routeUrl: string = this.$route.name as string;
    // This getter will regulated which country in the array will be shown with the usage of a random number.
    get showRandomCountry() {
        const allCountries: Array<any> = this.$store.getters.allCountries;
        const number: number = this.randomNumber;
        return allCountries[number];
    }
    get isLoading() {
        return this.$store.getters.loadingInProgress;
    }

    generateRandomNumber() {
        // Generated a random number when you click on button linked to this method. This will change the random number and will result in the showing of a different country.
        this.randomNumber = Math.floor(
            Math.random() * this.$store.getters.allCountries.length
        );
    }
}
</script>
