<template>
    <section class="mt-32 container mx-auto h-full px-4 md:px-8">
        <div>
            <bread-crumbs :route="routeUrl" />
            <div class="w-full flex flex-col md:flex-row mb-10 md:mb-0">
                <div
                    class="inline-block w-2/3 font-open-sans text-black-light text-lg font-bold mb-6 uppercase leading-none"
                >
                    <slot name="country"></slot>
                </div>
                <div class="w-3/4 md:w-1/2 lg:w-1/3 flex md:justify-end">
                    <!-- <v-select
                        v-model="selected"
                        class="bg-white h-8 w-11/12 relative z-10"
                        :placeholder="'Sort countries'"
                        :options="['Descending alphabetical', 'Most letters']"
                        :searchable="false"
                    /> -->

                    <select-component
                        class="bg-white h-8 w-11/12 relative z-10"
                        @add:selectedOption="changeOptionSelected"
                    />
                </div>
            </div>
            <loading-gif v-if="isLoading" />
            <div v-else class="w-auto flex flex-wrap -mx-4">
                <div
                    v-for="(country, id) in getAllCountries"
                    :key="id"
                    class="w-full md:w-1/2 lg:w-1/3 mb-10 h-40 px-4"
                >
                    <router-link
                        :id="id"
                        :to="'europe/country/' + country"
                        class="country-card w-full bg-stone-blue h-full hover:opacity-75 rounded shadow-md p-8 flex items-center"
                    >
                        <h2 class="text-white font-opens-sans text-base">
                            {{ country }}
                        </h2>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>


<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class RegionView extends Vue {
    selected = "";
    routeUrl = this.$route.name;
    
    changeOptionSelected(option: string) {
        this.selected = option;
    }
    get getAllCountries(): Array<string> {
        // Store the state with all the European countries inside a new variable
        const arrayCountries: Array<{
            name: string;
            region: string;
        }> = this.$store.getters.allCountries;
        const countriesRegion = arrayCountries.filter((item) => {
            if (item.region === this.routeUrl) {
                return item;
            }
        });
        const arrayOfNames = this.filterNames(
            countriesRegion.map((item) => item.name)
        );
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
            const sortedArrayWords = countries.sort(
                (a, b) => b.length - a.length
            );
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