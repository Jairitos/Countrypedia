<template>
   <section class="mt-32 container mx-auto h-full px-4 md:px-8">
        <div>
            <BreadCrumbs :route="routeUrl"></BreadCrumbs>
            <div class="w-full flex flex-col md:flex-row mb-10 md:mb-0">
                <h1
                    class="inline-block w-2/3 text-open-sans haha text-lg font-bold mb-6 uppercase leading-none"
                >{{routeUrl}}</h1>
                <div class="w-3/4 md:w-1/2 lg:w-1/3 flex md:justify-end">
                    <v-select
                        v-model="selected"
                        class="bg-white h-8 w-11/12 relative z-10"
                        :placeholder="'Sort countries'"
                        :options="['Descending alphabetical', 'Most letters']"
                        :searchable="false"
                    />
                </div>
            </div>
            <LoadingGif v-if="isLoading"></LoadingGif>
            <div v-else class="w-auto flex justify-between flex-wrap">
                <div
                    v-for="(item, index) in getEuropeanCountries"
                    :key="index"
                    class="w-full md:w-45% lg:w-3/10 mb-10 h-40"
                >
                    <router-link
                        :to="'europe/country/' + item"
                        class="country-card w-full bg-stone-blue h-full hover:opacity-75 rounded shadow-md p-8 flex items-center "
                    >
                        <h2 class="text-white font-opens-sans text-base">{{item}}</h2>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>


<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import "vue-select/dist/vue-select.css";

@Component
export default class RegionView extends Vue {
    selected: string = "";
    routeUrl: string = this.$route.name as string;

    get getEuropeanCountries(): Array<string> {
        // Store the state with all the European countries inside a new variable
        const arrayCountries: Array<any> = this.$store.getters.allCountries;
        const countriesRegion: Array<any> = arrayCountries.filter((item) => {
            if(item.region === this.routeUrl) {
                return item;
            }
        })
        const arrayOfNames = this.filterNames(countriesRegion.map(item => item.name)) as Array<string>;
        return arrayOfNames;
    }
    get isLoading(): boolean {
        // Getter return the isLoading state
        return this.$store.getters.loadingInProgress;
    }

    filterNames(countryNames: Array<string>) {
        // Function is responsible for regulating the filter functionality. It checks which option is selected in the v-select element. Based on the selected option a certain part will be ran.
        let name = [] as Array<string>;
        if (this.selected === "Descending alphabetical") {
            // Reverses the order of the names in the array. The names are already in alphabetical order
            const countries = countryNames;
            name = countries.sort((a, b) => a.localeCompare(b)).reverse();
        } else if (this.selected === "Most letters") {
            // This executes a block that is responsible of checking which items has the most letters.
            const countries = countryNames;
            // This sort method checks the string length of the elements in the array and sort them based on that length.
            const sortedArrayWords = countries.sort((a, b) => b.length - a.length);
            name = sortedArrayWords;
        } else {
            name = countryNames;
        }
        return name;
    }
}
</script>

<style lang="scss">
    .haha {
        color: red;
    }
</style>