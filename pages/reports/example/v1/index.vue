<template>
    <div>
        <CanvasTree :web="webData" :linkedin="linkedinData"/>
    </div>
</template>

<script setup lang="ts">
import webData from './data.json'
import linkedinData from './linkedin.json'

definePageMeta({
    layout: 'chart'
})
</script>