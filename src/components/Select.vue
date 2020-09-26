<template>
    <div>
        <div @click="selectDropdown" class="w-full border border-gray-500 rounded h-full">
            <div class="h-full flex items-center justify-between">
                <h2 class="p-4">{{selected}}</h2>
                <button v-show="selected !== 'Sort countries'" @click="clearSelection($event)" type="button" class="pr-4">X</button>
            </div>
            <div v-show="dropdownOpen" class="flex flex-col w-full">
                <input @click="onChange($event)" value="Descending alphabetical" type="text" class="w-full py-2">
                <input @click="onChange($event)" value="Most letters" type="text" class="w-full py-2">
            </div>
        </div>
    </div>
</template>ƒ

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    data() {
        return {
            selected: "Sort countries" as string,
            dropdownOpen: false as boolean,
        };
    },
    methods: {
        emitSelectedOption() {
            this.$emit('add:selectedOption', this.selected);
        },
        onChange(event: any) {
            this.selected = event.target.value;
            this.emitSelectedOption();
        },
        selectDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        clearSelection(event: any) {
            event.stopImmediatePropagation();
            this.selected = "Sort countries";
            this.emitSelectedOption();
        }
    },
});
</script>