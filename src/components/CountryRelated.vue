<template>
    <div v-if="this.$store.getters.allCountries.length > 0" class="flex flex-wrap justify-between">
        <div v-for="(country, index) in getCountries" :key="index" class="w-full lg:w-31%">
            <country-card :dataCountry="country" class="related-country w-full mb-10 lg:mb-0 bg-stone-blue text-white font-open-sans rounded shadow-md p-5 md:p-10 flex flex-col" />
        </div>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class CountryRelated extends Vue {
    @Prop({ required: true }) reg!: string;
    region: string = this.reg;

    get getCountries() {
    // This function gets all the countries from the state and filter through them to get items that are matching the criteria. If the region of the items are similar to the region given via the props, those items will be stored inside of a new array.
        const countries: Array<any> = this.$store.getters.allCountries;
        const threeRelatedCountries = [] as Array<object>;
        const filteredCountries: Array<object> = countries.filter((item) => {
            if (item.region === this.region) {
                return item;
            }
        });
        // Afterwards, 3 items will be selected by the means of this loop. Everytime re-render, 3 different items with related regions will be taken from the filtered array
        for (let i = 0; i < 3; i++) {
            threeRelatedCountries.push(
                filteredCountries[
                    Math.floor(Math.random() * filteredCountries.length)
                ]
            );
        }
        return threeRelatedCountries;
    }
}
</script>