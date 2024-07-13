<template>
    <div>
        <CanvasTree :data="data"/>
    </div>
</template>

<script setup lang="ts">
import data from './data.json'

definePageMeta({
    layout: 'chart'
})
</script>