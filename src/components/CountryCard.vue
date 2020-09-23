<template>
    <div v-if="country !== undefined">
        <div class="flex justify-between mb-4">
            <h1 class="block font-open-sans text-base font-bold uppercase leading-none">{{country.name}}</h1>
            <img class="block h-10 w-16" v-bind:src="country.flag" v-bind:alt="'Flag of' + country.name">
        </div>
        <div>
            <p class="my-4"><span class="font-medium mr-2">Capital:</span> {{country.capital}}</p>
            <p class="my-4"><span class="font-medium mr-2">Region</span> {{country.region}}</p>
            <p class="my-4"><span class="font-medium mr-2">Subregion: </span> {{country.subregion}}</p>
            <p class="my-4"><span class="font-medium mr-2">Population: </span> {{country.population}}</p>
            <p class="my-4"><span class="font-medium mr-2">Timezone:</span> {{country.timezones[0]}}</p>
            <p class="my-4"><span class="font-medium mr-2">Currencies:</span> {{country.currencies[0].name}}</p>
            <p class="my-4"><span class="font-medium mr-2">Language(s):</span> <span class="inline-block mr-1" v-for="(lang, index) in country.languages" :key="index">{{lang.name}}<span v-show="index < country.languages.length - 1">,</span></span>
            </p>
            <p class="my-4"><span class="font-medium mr-2">Calling codes:</span> {{country.callingCodes[0]}}</p>
        </div>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class extends Vue {
    @Prop({ required: true }) dataCountry!: object;
    country: object = {};
    // This function will set the country variable to the dataCountry prop when the component is created. This will create a template with the passed information.
    setCountry() {
        this.country = this.dataCountry;
    }
    // Here the dataCountry will be watched so the component is reactive. When the prop changes the country variable gets updated with the new value;
    @Watch("dataCountry")
    setNewRandomCountry(newDataCountry: object) {
        this.country = newDataCountry;
    }

    created() {
        this.setCountry();
    }
}
</script>