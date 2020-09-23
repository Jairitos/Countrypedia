<template>
    <section id="regions" class="w-auto -mx-2 flex flex-wrap">
        <div v-for="(cat, index) in categories" :key="index" class="w-3/10 flex m-2">
            <CategoryButton :name="cat"></CategoryButton>
        </div>
    </section>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Region extends Vue {

    categories: object = {
        europe: "europe",
        asia: "asia",
        americas: "americas",
        africa: "africa",
        oceania: "oceania",
    }
} 
</script>