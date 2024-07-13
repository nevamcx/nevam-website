<template>
  <div id="tree">
    <htmlTreeNode :node="props.data" />
  </div>
</template>

<script setup lang="ts">
import { baseStore } from "@/stores";
import { subscribe, unsubscribe } from '@/events/events'
const store = baseStore();

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const verticalDistanceCalc = (elementOneID, elementTwoID) => {
    const element1 = document.getElementById(elementOneID) // child
    const element2 = document.getElementById(elementTwoID) // parent
    if(element1 && element2) {
        const rect1 = element1.getBoundingClientRect()
        const rect2 = element2.getBoundingClientRect()
        const distance = rect2.top - rect1.top
        return distance
    }
}

const drawVerticalLines = (redraw) => {
    const elements = document.querySelectorAll('.card')
    Array.from(elements).forEach((element) => {
        // get ids
        const id = element['id']
        const parentId = element.getAttribute("parent-id")
        // inject pseudo style
        const style = document.createElement('style')
        const distance = verticalDistanceCalc(id, parentId)
        // remove existing style
        const childStyleTags = element.getElementsByTagName('style')
        Array.from(childStyleTags).forEach((style) => {
            style.remove()
        })
        // set new style
        style.innerHTML = `#${id}::before {
            position: absolute;
            top: ${distance + 60}px;
            height: ${distance * -1}px;
        }`

        element.appendChild(style)
    })
}

onMounted(async () => {
    drawVerticalLines()
})

onBeforeMount(async () => {
	subscribe('triggerDrawVerticalLines', () => drawVerticalLines())
})

onBeforeUnmount(async () => {
	unsubscribe('triggerDrawVerticalLines', () => drawVerticalLines())
})
</script>

<style>
body {
    background-color: #eee;
}

.children {
    width: 250px;
    margin-top: 50px;
    margin-left: 300px;
}

.card {
    position: relative;
    padding: 10px;
    height: 120px;
    border-radius: 15px;
}

.card.open {
    height: 500px !important;
}

.card::before {
    z-index: -10;
    position: absolute;
    left: -175px;
    width: 175px;
    /* top: -130px; */
    /* height: 190px; */
    border-left-color: #bbb;
    border-left-style: solid;
    border-left-width: 3px;
    border-bottom-color: #bbb;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    border-bottom-left-radius: 15px;
    content: "";
}

.card.first-child::before {
    z-index: -10;
    top: -50px !important;
    height: 110px !important;
}
</style>
