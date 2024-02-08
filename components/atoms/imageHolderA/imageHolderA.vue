<template>
    <section id="image-holder-a">
    <div :class="{
        'top-clip' : true,
        'blue' : props.topColour == 'blue',
        'white' : props.topColour == 'white'
    }"></div>
    <img :src="props.src" :alt="props.alt">
    <div :class="{
        'bottom-clip' : true,
        'blue' : props.bottomColour == 'blue',
        'white' : props.bottomColour == 'white'
    }"></div>
    </section>
</template>

<script setup>
const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    alt: {
        type: String,
        default: ''
    },
    topColour: {
        type: String,
        default: '#000'
    },
    bottomColour: {
        type: String,
        default: '#000'
    }
})
</script>

<style lang="scss">
@import './imageHolderA.scss';
</style>