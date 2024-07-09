<template>
    <div>
        <CanvasTree :data="Data" />
    </div>
</template>

<script setup lang="ts">
import Data from './data.json'

definePageMeta({
    layout: 'chart'
})
</script>