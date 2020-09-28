<template>
    <div>
        <div
            class="country-filter w-full border border-gray-500 rounded bg-white overflow-hidden"
        >
            <div
                class="selected-filter-container h-full flex items-center justify-between p-2 cursor-pointer"
                @click="selectDropdown"
                v-click-outside="handleFocusOut"
            >
                <label class="cursor-pointer" :class="[selected === 'Sort countries' ? 'text-gray-500 opacity-75'  : '']" v-html="selected"></label>
                <div class="flex">
                    <button
                    v-show="selected !== 'Sort countries'"
                    @click="clearSelection($event)"
                    type="button"
                    class="focus:outline-none"
                >
                    <delete-svg class="w-4 h-4 red-delete-icon" />
                </button>
                <img src="../assets/images/arrowhead.png" class="arrowhead ml-6 w-3 h-auto" :class="dropdownOpen ? 'rotate' : '' " />
                </div>
            </div>
            <div v-show="dropdownOpen" class="flex flex-col w-full rounded">
                <input
                    @click="onChange($event)"
                    type="text"
                    value="Descending alphabetical"
                    :disabled="selected === 'Descending alphabetical'"
                    class="option w-full p-2 hover:bg-mist-blue cursor-pointer focus:outline-none"
                />
                <input
                    @click="onChange($event)"
                    :disabled="selected === 'Most letters'"
                    type="text"
                    value="Most letters"
                    class="option w-full p-2 hover:bg-mist-blue cursor-pointer focus:outline-none"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

Vue.directive("click-outside", {
    bind: function (el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            // here I check that click was outside the el and his childrens
            if (!(el == event.target || el.contains(event.target))) {
                // and if it did, call method provided in attribute value
                vnode.context[binding.expression](event);
            }
        };  
        document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unbind: function (el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
    },
});

export default Vue.extend({
    data() {
        return {
            selected: "Sort countries" as string,
            dropdownOpen: false as boolean,
        };
    },
    methods: {
        emitSelectedOption() {
            this.$emit("add:selectedOption", this.selected);
        },
        onChange(event: any) {
            this.clearActiveClass();
            this.selected = event.target.value;
            event.target.classList.add("active");
            this.emitSelectedOption();
        },
        selectDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        clearSelection(event: any) {
            event.stopImmediatePropagation();
            this.selected = "Sort countries";
            this.dropdownOpen = false;
            this.clearActiveClass();
            this.emitSelectedOption();
        },
        clearActiveClass() {
            const options = document.querySelectorAll(".option") as NodeListOf<
                HTMLBodyElement
            >;
            for (const option of options) {
                option.classList.remove("active");
            }
        },
        handleFocusOut() {
            this.dropdownOpen = false;
        },
    },
});
</script>