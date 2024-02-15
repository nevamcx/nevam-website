<template>
    <span :class="`text-underline text-underline-${props.colour}`">
        <slot></slot>
    </span>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    colour: {
        type: String,
        default: '',
    }
})

onMounted(() => {

    // adapted from: https://codepen.io/Wking/pen/BdmpVx
    const elements = Array.from(document.querySelectorAll(`.text-underline-${props.colour}`))

    let colourString = ''

    const greenString = 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)' // temptingAzure
    const pinkString = 'linear-gradient(120deg, #fa709a 0%, #fee140 100%)' // trueSunset
    const purpleString = 'linear-gradient(120deg, #bbc8ff 0%, #764ba2 100%)' // plumPlate

    if (props.colour == 'green') {
        colourString = greenString
    }
    if (props.colour == 'pink') {
        colourString = pinkString
    }
    if (props.colour == 'purple') {
        colourString = purpleString
    }

    const addBackground = (elements, color) => {
        elements.forEach(element => {
            element.style.backgroundImage = color
        })
    }

    addBackground(elements, colourString)
})
</script>

<style scoped>
.desktop-mode .text-underline {
    background-repeat: no-repeat;
    background-size: 100% 10px;
    background-position: 0 97%;
    padding-bottom: 0px;
}
.mobile-mode .text-underline {
    background-repeat: no-repeat;
    background-size: 100% 7px;
    background-position: 0px 93%;
    padding-bottom: 1px;
}
</style>