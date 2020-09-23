<template>
    <div v-show="isModalVisible" class="modal-backdrop z-50">
        <div class="bg-white h-1/2 h-1/2 flex flex-col items-center p-10 rounded relative">
            <button @click="closeModal" class="absolute top-4 right-4 focus:outline-none">
                <svg class="w-8 h-8" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M256,33C132.3,33,32,133.3,32,257c0,123.7,100.3,224,224,224c123.7,0,224-100.3,224-224C480,133.3,379.7,33,256,33z    M364.3,332.5c1.5,1.5,2.3,3.5,2.3,5.6c0,2.1-0.8,4.2-2.3,5.6l-21.6,21.7c-1.6,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3L256,289.8   l-75.4,75.7c-1.5,1.6-3.6,2.3-5.6,2.3c-2,0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1,0.8-4.2,2.3-5.6l75.7-76   l-75.9-75c-3.1-3.1-3.1-8.2,0-11.3l21.6-21.7c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l75.7,74.7l75.7-74.7   c1.5-1.5,3.5-2.3,5.6-2.3c2.1,0,4.1,0.8,5.6,2.3l21.6,21.7c3.1,3.1,3.1,8.2,0,11.3l-75.9,75L364.3,332.5z" stroke="#FFF" stroke-width="4" fill="#2A2A2A" />
                </svg>
            </button>
            <h2 class="text-lg text-black-light mb-4">Categories is coming soon</h2>
            <p class="text-md text-black-light text-center">Instead go to the random page to go through our collection of Countries</p>
            <a href="/random-country" class="w-40 py-2 bg-mist-blue hover:bg-stone-blue mt-10 rounded text-center text-white btn">Random</a>
        </div>
    </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Modal extends Vue {
    @Prop({ required: true }) isModalVisible!: boolean;
    // Updates the variable in the parent component
    closeModal() {
        this.$emit("interface", this.isModalVisible);
    }
}
</script>