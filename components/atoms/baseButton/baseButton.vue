<template>
    <a 
        :id="props.id !== '' ? props.id : null" 
        :class="{
            'base-button' : true,
            'red' : props.colour == 'red',
            'red-invert' : props.colour == 'red-invert',
            'black' : props.colour == 'black',
            'black-invert' : props.colour == 'black-invert',
            'blue' : props.colour == 'blue',
            'blue-invert' : props.colour == 'blue-invert',
            'white' : props.colour == 'white',
            'full-width' : props.fullWidth == true,
            'more-icon-spacing': props.fullWidth == true
        }"
        :aria-label="`${slot} button`"
        :type="props.submit ? 'submit' : ''"
    >
        <slot />
        <i v-if="icon !== ''" :class="`${props.icon} icon`"></i>
    </a>
</template>

<script setup>
import { useSlots } from 'vue'
const slots = useSlots()
const slot = slots.default()[0].children

const props = defineProps({
    id: {
        type: String,
        default: ''
    },
    colour: {
        type: String,
        default: ''
    },
    fullWidth: {
        type: Boolean,
        default: false
    },
    submit: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: ''
    }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/_variables.scss';
a.base-button {
    text-decoration: none;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 500;
    min-width: 170px;
    max-width: 250px;
    text-align: center;
    display: inline-block;
    color: $white;
    /* ios safari bug */
    appearance: none;
    -webkit-appearance: none;
}
a.base-button {
    border-radius: 50px;
}

/* red */
.red {
    background-color: $red;
    color: $white !important;
    border: 2px solid $red;
}
.red:hover {
    opacity: 0.6;
}
.red-invert {
    background-color: $white;
    color: $red !important;
    border: 2px solid $red;
}
.red-invert:hover {
    opacity: 0.6;
}

/* blue */
.blue {
    background-color: $blue;
    color: $white !important;
    border: 2px solid $blue;
}
.blue:hover {
    filter: brightness(0.8);
}
.blue-invert {
    background-color: $white;
    color: $blue !important;
    border: 2px solid $blue;
}
.blue-invert:hover {
    opacity: 0.6;
}

/* white */
.white {
    background-color: $white;
    color: $black !important;
    border: 2px solid $white;
}
.white:hover {
    filter: brightness(0.8);
}

/* black */
.black {
    background-color: $black;
    color: $white !important;
    border: 2px solid $black;
}
.black:hover {
    opacity: 0.8;
}
.black-invert {
    background-color: $white;
    color: $black !important;
    border: 2px solid $black;
}
.black-invert:hover {
    background-color: $grayLight;
}

.mobile-mode .base-button {
    margin-top: 40px !important;
}
.full-width {
    width: 100%;
    min-width: initial !important;
    max-width: initial !important;
}

.icon {
    font-size: 25px;
    position: relative;
    top: 3px;
    margin-left: 10px;
}
.more-icon-spacing .icon  {
    margin-left: 25px;
}
</style>