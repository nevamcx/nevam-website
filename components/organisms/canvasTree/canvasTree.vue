@ -1,47 +0,0 @@
<template>
    <div class="chart">
        <div class="zoom-buttons">
            <div class="bigger" @click="orgChart.zoomIn()">Zoom in</div>
            <div class="smaller" @click="orgChart.zoomOut()">Zoom out</div>
            <div class="reset" @click="orgChart.zoomReset()">Zoom reset</div>
        </div>
        <div id="d3-chart-container"></div>
    </div>
</template>

<script setup lang="ts">
import { d3Chart } from './classes/d3Chart'
import { ref } from 'vue'

const props = defineProps({
    data: {
        type: Object,
        default: () => {},
    }
})

const orgChart = ref(null)

onMounted(() => {
    return new d3Chart().draw(props.data)
})
</script>

<style scoped>
.chart {
    background-color: #eeeeee;
}
</style>

<style>
.orgChart.hidden {
    display: none;
}
.canvas-grabbing {
    cursor: grabbing;
}
.zoom-buttons {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 50px;
    padding: 20px;
}
</style>