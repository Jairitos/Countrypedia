<template>
    <div id="app" class="relative min-h-screen flex flex-col justify-between">
        <div>
            <Navigation />
            <router-view />
        </div>
        <Footer />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import "./assets/styles/app.scss";

@Component
export default class App extends Vue {
    fetchCountries() {
        // Functions calls the getEuropeanCountries action that fetches data and sets the state through the corresponding mutator.
        this.$store.dispatch("getCountries");
        this.$store.dispatch("getEuropeanCountries");
    }
    created() {
        // Both Api calls are made and the data will be stored inside of the state.
        this.fetchCountries();
    }
}
</script>