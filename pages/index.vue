<template>

    <Modal v-if="store.$state.modal"/>

    <Hero />

    <ImageHolderA
        v-if="store.mode == 'mobile'"
        :topColour="'white'"
        :bottomColour="'white'"
        :src="'images/hero-1.webp'" 
        :alt="'Image of person using keyboard'"
    />

    <!---------------- THE FOLD ---------------->

    <LoadStyles />

</template>

<script setup>
import { baseStore } from '@/stores'
const store = baseStore()
</script>

<style>
.not-loaded {
    height: 400px;
}
.loaded {
    height: initial;
}
</style>