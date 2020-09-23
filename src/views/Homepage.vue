<template>
    <section class="mb-8">
        <div v-bind:class="showIntro ? '' : 'intro-block-an'" class="hidden md:flex intro-block w-screen bg-grey relative z-40 pt-10">
            <div class="container px-8 mx-auto">
                <h1 v-bind:class="[introTextVisible ? 'show-intro-text' : '']" class="intro-text font-open-sans text-3xl text-black-light">Welcome to Countrypedia, the site to acquire knowledge on countries on this blue planet! After your visit, you will destroy your friends at a game of country trivia.</h1>
                <div v-if="showIntro" v-bind:class="[introTextVisible ? 'show-scroll-text' : '']" class="opacity-0 mt-2 flex">
                    <p class="text-md mr-4 text-black-light">Scroll down to go to the homepage</p>
                    <img src="../assets/images/arrow-down.png" class="h-10 w-auto self-end" />
                </div>
            </div>
        </div>
        <div class="mt-32 md:mt-16 container mx-auto h-full px-4 md:px-8">
            <div class="w-full flex flex-col md:flex-row mb-10 md:mb-0">
                <h1 class="inline-block w-2/3 font-open-sans text-black-light text-lg font-bold mb-6 uppercase leading-none">European countries</h1>
                <div class="w-3/4 md:w-1/2 lg:w-1/3 flex md:justify-end">
                    <v-select v-model="selected" class="bg-white h-8 w-11/12 relative z-10" :placeholder="'Sort countries'" :options="['Descending alphabetical', 'Most letters']" :searchable="false" />
                </div>
            </div>
            <LoadingGif v-if="isLoading"></LoadingGif>
            <div v-else class="w-auto flex justify-between flex-wrap">
                <div v-for="(item, index) in getEuropeanCountries" :key="index" class="w-full md:w-45% lg:w-3/10 mb-10 h-max-full">
                    <router-link :to="'/country/' + item" class="country-card w-full bg-stone-blue hover:opacity-75 rounded shadow-md p-8 flex">
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
export default class Homepage extends Vue {
    selected: string = "";
    showIntro: boolean = true;
    introTextVisible: boolean = false;

    get getEuropeanCountries(): Array<string> {
        // Store the state with all the European countries inside a new variable
        const arrayCountries: Array<any> = this.$store.getters
            .allEuropeanCountries;
        const tenCountries = [] as Array<string>;
        // Looping for 10 items and storing them in a new array
        for (let i = 0; i < 10; i++) {
            tenCountries.push(arrayCountries[i].name);
        }
        //   The filter is called with the tencountries as argument. Return a new array that is sorted based on what is selected in the filter
        const arrayOfNames = this.filterNames(tenCountries) as Array<string>;
        return arrayOfNames;
    }
    get isLoading(): boolean {
        // Getter return the isLoading state
        return this.$store.getters.loadingInProgress;
    }

    scrollFunc(): void {
        // Function keeps track of the scrolling event. If the user scrolls when the intro header is showed, the intro
        if (window.scrollY > 0) {
            this.showIntro = false;
            // Scrolls to the top of the page else you will not end up at the start of the page when you scroll down.
            window.scrollTo(0, 0);
            // Deletes the eventlistener else the functions will gets called everytime you scroll
            window.removeEventListener("scroll", this.scrollFunc, false);
        }
    }
    setBodyClasses(): void {
        // Blocks ability to scroll down when intro header is showed else you will scroll down before the animations are done. After the settimeout is done the classes are removed so you can scroll down again.
        const bodyEl: HTMLBodyElement | null = document.querySelector("body");
        if (bodyEl !== null) {
            bodyEl.classList.add("h-full", "overflow-hidden");
            setTimeout(() => {
                bodyEl.classList.remove("h-full", "overflow-hidden");
            }, 3000);
        }
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
            const sortedArrayWords = countries.sort(function (a, b) {
                return b.length - a.length;
            });
            name = sortedArrayWords;
        } else {
            name = countryNames;
        }
        return name;
    }

    created() {
        window.scrollTo(0, 0);
        this.setBodyClasses();
        window.addEventListener("scroll", this.scrollFunc);
        this.introTextVisible = true;
    }
}
</script>