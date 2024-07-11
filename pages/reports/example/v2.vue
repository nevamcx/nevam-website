<template>
    <htmlTree :data="data" />
</template>

<script setup lang="ts">
// import data from './data.json'

const data = {
    "name": "Root",
    "children": [
        {
            "name": "Some word",
            "children": [
                {
                    "name": "Example 1",
                    "children": [
                        {
                            "name": "Some word 2",
                            "children": []
                        }
                    ]
                },
                {
                    "name": "Example 2",
                    "children": [
                        {
                            "name": "Some word 3",
                            "children": [
                                {
                                    "name": "Exampler1",
                                    "children": []
                                },
                                {
                                    "name": "Exampler2",
                                    "children": []
                                },
                                {
                                    "name": "Exampler3",
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

definePageMeta({
    layout: 'chart'
})
</script>