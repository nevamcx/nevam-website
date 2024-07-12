<template>
  <div id="tree">
    <htmlTreeNode :node="props.data" />
  </div>
</template>

<script setup lang="ts">
import { baseStore } from "@/stores";
const store = baseStore();

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const addDepth = async () => {
  const elements = document.querySelectorAll('.card')
  var count = 0;
  Array.from(elements).forEach((element) => {
    element.classList.add(`depth-${count}`);
    count = count + 1;
  });
};

const verticalDistanceCalc = (elementOneID, elementTwoID) => {
    const element1 = document.getElementById(elementOneID)
    const element2 = document.getElementById(elementTwoID)
    if(element1 && element2) {
        const rect1 = element1.getBoundingClientRect()
        const rect2 = element2.getBoundingClientRect()
        const distance = rect2.bottom - rect1.bottom
        return distance
    }
}

const drawVerticalLines = () => {
    const elements = document.querySelectorAll('.card')
    Array.from(elements).forEach((element) => {
        // get ids
        const id = element['id']
        const parentId = element.getAttribute("parent-id")

        // inject style line
        const style = document.createElement('style')

        const distance = verticalDistanceCalc(id, parentId)
        console.log('distance: ', distance)

        // top: ${distance / 1.55 - 60}px;
        // height: ${distance * -1 / 1.35 + 60}px;

        style.innerHTML = `#${id}::before {
            position: absolute;
            top: ${distance + 60}px;
            height: ${distance * -1}px;
        }`
        element.appendChild(style)
    })
}

onMounted(async () => {
    await addDepth()
    drawVerticalLines()
});
</script>

<style>
body {
    background-color: #eee;
}

.children {
    width: 250px;
    margin-top: 50px;
    margin-left: 150px;
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
    top: -50px !important;
    height: 110px !important;
}
</style>
