<template>
    <htmlTree :data="dataFile" />
</template>

<script setup lang="ts">
import dataFile from './data.json'

const dataObject = ref(
    {
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
                                        "children": [
                                            {
                                                "name": "More 1",
                                                "children": []
                                            },
                                            {
                                                "name": "More 2",
                                                "children": []
                                            },
                                            {
                                                "name": "More 3",
                                                "children": []
                                            },
                                            {
                                                "name": "More 4",
                                                "children": []
                                            },
                                            {
                                                "name": "More 5",
                                                "children": []
                                            },
                                            {
                                                "name": "More 6",
                                                "children": []
                                            },
                                            {
                                                "name": "More 7",
                                                "children": []
                                            },
                                            {
                                                "name": "More 8",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Exampler3",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "name": "Some word 4",
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
)

const addUniqueId = (node) => {
    node.id = generateUniqueAlphaNumericString();
    if (node.children && node.children.length > 0) {
        node.children.forEach(child => addUniqueId(child));
    }
}

// add unique id's to each node
addUniqueId(dataFile)

definePageMeta({
    layout: 'chart'
})
</script>