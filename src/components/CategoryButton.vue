<template>
  <a v-bind:href="`/${nameCat}`" class="relative region-btn w-full h-48 overflow-hidden rounded object-cover">
    <img v-bind:src="`/${nameCat}.jpg`" v-bind:alt="nameCat" class="category-image"/>
    <div class="overlay absolute bg-mist-blue-opac flex items-center justify-center h-full">
      <h3 class="text-open-sans text-white text-lg capitalize">{{nameCat}}</h3>
    </div>
  </a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class extends Vue {
  @Prop({ required: true }) name!: string;

  nameCat: string = this.name;
  srcCat: string = '../assets/images/' + this.name + '.jpg';
}
</script>