<template>
    <div class="button-component">
        <img v-if="props.icon" :src="props.icon" width="24" height="24">
        <a
            :class="updateClasses()"
            type="button"
            role="button"
            :aria-label="`Click to go to ${props.action}`"
            :aria-disabled=false
            :href="props.action"
        ><slot /></a>
    </div>
</template>

<script setup>
const props = defineProps({
    classes: {
        type: Object,
        default: {}
    },
    action: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    icon: {
        type: String,
        default: ''
    }
})

const updateClasses = () => {
    if(props.icon) {
        var newClasses = props.classes
        newClasses['has-icon'] = true
        return newClasses
    }
    else {
        return props.classes
    }
}
</script>

<style scoped lang="scss">
.button-component {
    position: relative;
}

.button-component a {
    /* COLOURS */
    color: #fff;
    background-color: #000;

    /* SIZING */
    min-width: 150px;
    max-width: 180px;
    padding: 15px 25px;
    border: 1px solid #000;

    /* FONT */
    font-weight: bold;
    font-size: 16px;

    /* OTHER */
    text-align: center;
    border-radius: 6px;
    text-decoration: none;
    display: block;
}

.button-component .has-icon {
    padding-right: 0px;
    padding-left: 35px;
}

.button-component img {
    position: absolute;
    bottom: 11px;
    margin-right: 5px;
    height: 30px;
    width: auto;
    left: 27px;
}

.white-button {
    color: #000 !important;
    background-color: #fff !important;
    border: 1px solid #475467;
}

.purple-button {
    background-color: #6941c6 !important;
    border: 1px solid #6941c6 !important;
}

.white-button {
    color: #000 !important;
    background-color: #fff !important;
}

.colourful-button {
    background-image: linear-gradient(to right, #b16cea 20%, #ff5e69 60%, #ff8a56 80%, #ffa84b) !important;
    border-style: solid !important;
    border-width: 1px !important;
    border-image: linear-gradient(to right, #b16cea 20%, #ff5e69 60%, #ff8a56 80%, #ffa84b) 30 !important;
}
</style>