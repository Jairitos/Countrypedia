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
                <h1 class="inline-block w-2/3 text-open-sans text-black-light text-lg font-bold mb-6 uppercase leading-none">Regions</h1>
            </div>
            <div class="w-full">
               <region />
            </div>
        </div>
    </section>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Homepage extends Vue {
    showIntro: boolean = true;
    introTextVisible: boolean = false;

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
            bodyEl.classList.add("no-scroll");
            setTimeout(() => {
                bodyEl.classList.remove("no-scroll");
            }, 3000);
        }
    }

    created() {
        window.scrollTo(0, 0);
        this.setBodyClasses();
        window.addEventListener("scroll", this.scrollFunc);
        this.introTextVisible = true;
    }
}
</script>