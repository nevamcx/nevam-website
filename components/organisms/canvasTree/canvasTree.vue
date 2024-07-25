<template>
    <ImageModal v-if="store.imageModal" :image="image" v-click-outside="() => (store.imageModal = false)"/>
    <div class="chart">
        <div id="d3-chart-container"></div>
    </div>
</template>

<script setup lang="ts">
import { d3Chart } from './classes/d3Chart'
import { subscribe, unsubscribe } from '@/events/events'
import { baseStore } from '@/stores'
import { vClickOutside } from '@/directives/directives'

const store = baseStore()

const image = ref(null)

const props = defineProps({
    data: {
        type: Object,
        default: () => {},
    }
})

const setImage = (e) => {
    image.value = e
    return store.imageModal = true
}

onMounted(() => {
    return new d3Chart().draw(props.data)
})

onBeforeMount(async () => {
	subscribe('triggerImageModal', (e) => setImage(e.detail.screenshot))
})

onBeforeUnmount(async () => {
	unsubscribe('triggerImageModal', (e) => setImage(e.detail.screenshot))
})
</script>

<style scoped>
.chart {
    background-color: #eeeeee;
}
</style>

<style>
canvas#d3-canvas-hidden {
    display: none;
}
.canvas-grabbing {
    cursor: grabbing;
}
</style>