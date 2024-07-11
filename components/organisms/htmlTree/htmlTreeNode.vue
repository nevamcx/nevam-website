<template>

    <div class="node">

        <span class="text">{{ props.node.name }}</span>

        <div class="children" v-if="props.node.children && props.node.children.length">

            <htmlTreeNode v-for="(child, childIndex) in props.node.children" :node="child" />

        </div>

    </div>

</template>

<script setup lang="ts">
    const props = defineProps({
        node: {
            type: Object,
            default: () => { }
        }
    })
</script>

<style scoped>
.children {
    padding: 5px 0 5px 20px;
}

.children:not(:first-child) {
    margin-left: 170px;
}

.children:not(:first-child):after {
    content: "";
    width: 20px;
    border-top: 1px solid #ccc;
    position: absolute;
    left: 150px;
    top: 50%;
    margin-top: 1px;
}

.node {
    position: relative;
    min-height: 42px;
    display: block;
}

.node:before {
    content: "";
    height: 100%;
    border-left: 1px solid #ccc;
    position: absolute;
    left: -20px;
}

.node:first-child:after {
    height: 10px;
    border-radius: 10px 0 0 0;
}

.node:first-child:before {
    width: 10px;
    height: 50%;
    top: 50%;
    margin-top: 1px;
    border-radius: 10px 0 0 0;
}

.node:after {
    content: "";
    width: 20px;
    transition: border 0.5s;
    border-top: 1px solid #ccc;
    position: absolute;
    left: -20px;
    top: 50%;
    margin-top: 1px;
}

.node:last-child:before {
    width: 10px;
    height: 50%;
    border-radius: 0 0 0 10px;
}

.node:last-child:after {
    height: 10px;
    border-top: none;
    transition: border 0.5s;
    border-bottom: 1px solid #ccc;
    border-radius: 0 0 0 10px;
    margin-top: -9px;
}

.node:only-child:after {
    width: 10px;
    height: 0px;
    margin-top: 1px;
    border-radius: 0px;
}

.node:only-child:before {
    display: none;
}

.node span {
    border: 1px solid #ccc;
    display: block;
    min-width: 150px;
    padding: 5px 10px;
    line-height: 20px;
    text-align: center;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -15px;
    color: #666;
    font-family: arial, verdana, tahoma;
    font-size: 14px;
    display: inline-block;
    border-radius: 5px;
    transition: all 0.5s;
}

.node span:hover,
.node span:hover+.children .node span {
    background: #e6e6e6;
    color: #000;
    border-color: #a6a6a6;
}

.node span:hover+.children .node::after,
.node span:hover+.children .node::before,
.node span:hover+.children::before,
.node span:hover+.children .children::before {
    border-color: #a6a6a6;
}
</style>