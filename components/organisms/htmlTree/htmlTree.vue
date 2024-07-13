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

<style scoped>
#tree::-webkit-scrollbar {
    display: none;
}

#tree {
    width: 100%;
    height: 100%;
    padding: 50px;
    background-color: #eee;
    z-index: 99999999;
    position: relative;
    overflow: scroll;
}

#tree > :first-child {
    margin-left: 0px;
}
</style>
