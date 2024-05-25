<template>
    <figure class='fullwidth-image-block'>
        <img :src="props.image"/>
    </figure>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        default: '',
    }
})
</script>

<style>
.fullwidth-image-block {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
}
</style>