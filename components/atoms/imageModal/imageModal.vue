<template>
    <div id="image-modal">
        <img :src="`/images/reports/examples/v1/${props.image}`"
    </div>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        default: ''
    }
})

console.log('image: ', props.image)
</script>

<style scoped>
#image-modal {
    position: absolute;
    height: 100vh;
    background-color: #aaa;
    width: 700px;
    right: 0;
    box-shadow: -19px 0px 50px 5px #555;
    overflow: scroll;
}
</style>