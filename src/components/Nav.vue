<template>
    <div class="relative">
        <!-- Modal pops up when you click on the category button inside of the menu. -->
        <Modal :isModalVisible="showModal" @interface="toggleModal"></Modal>
        <nav id="#main-nav" class="hidden md:flex text-black h-20 items-center px-8 shadow-md bg-mist-blue fixed top-0 left-0 w-full z-20">
            <HomeButton></HomeButton>
            <ul class="w-3/4 flex h-full font-open-sans text-white">
                <li class="h-full">
                    <button @click="toggleModal" type="button" class="h-full hover:bg-stone-blue flex px-8 items-center focus:outline-none btn">Categories</button>
                </li>
                <li>
                    <router-link to="/random-country" class="h-full hover:bg-stone-blue flex px-8 items-center btn">Random Country</router-link>
                </li>
            </ul>
        </nav>
        <!-- Mobile navigation with hamburger menu and home button -->
        <nav id="mobile-nav" class="flex md:hidden text-black h-20 px-8 shadow-md bg-mist-blue fixed top-0 left-0 z-20 w-full justify-between">
            <HomeButton></HomeButton>
            <button type="button" class="focus:outline-none" @click="toggleMenu">
                <svg class="w-6 h-6 skewed-icon" fill="#FFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" /></svg>
            </button>
        </nav>
        <!-- When you click on the hamburger icon. This menu will open with the different links to different pages -->
        <nav v-bind:class="isMobileMenuOpen ? 'menu-open' : ''" class="menu-content-hidden fixed bg-stone-blue top-0 z-40">
            <div class="h-20 flex justify-end items-center px-8 ">
                <button @click="toggleMenu" type="button" class="btn-icon-close focus:outline-none">
                    <svg class="w-8 h-8 rotate-icon" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" stroke="#FFF" stroke-width="4" fill="#FFF" />
                    </svg>
                </button>
            </div>
            <ul class="w-full flex flex-col items-center h-full text-white">
                <li class="w-full">
                    <a href="/" class="h-full hover:bg-mist-blue flex p-8 justify-center text-3xl btn">Homepage</a>
                </li>
                <li class="w-full">
                    <button type="button" @click="toggleModal" class="h-full w-full hover:bg-mist-blue flex p-8 justify-center text-3xl btn">Categories</button>
                </li>
                <li class="w-full">
                    <a href="/random-country" class="h-full hover:bg-mist-blue flex p-8 justify-center text-3xl btn">Random</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Nav extends Vue {
    isMobileMenuOpen: boolean = false;
    showModal: boolean = false;

    toggleMenu(): void {
        // The toggleMenu function is called when you click on the hamburger menu. The isMobileMenuOpen variable is given a new value. It gets the value opposite of the current value. If it is true, it opens up the mobile menu and if it is false, it closes the mobile menu.
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
        const bodyEl: HTMLBodyElement | null = document.querySelector("body");
        // The body element gets a classlist of no scroll. This class disables the scrolling functionality when the mobile menu is open.
        if (bodyEl !== null) {
            bodyEl.classList.toggle("no-scroll");
        }
    }
    toggleModal() {
        // This toggleModal functions gets called when you click on the category button. The value of showmodal variable is given a new value, the opposite of the current value. This function regulated the opening and closing of the modal.
        this.showModal = !this.showModal;
    }
}
</script>