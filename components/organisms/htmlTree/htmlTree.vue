<template>
    <div id="tree">
        <htmlTreeNode :node="props.data" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    data: {
        type: Object,
        default: () => {}
    }
})
</script>

<style scoped>
#tree {
    display: inline-block;
    padding: 10px;
}

#tree * {
    box-sizing: border-box;
}
</style>