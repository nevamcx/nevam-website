<template>
    <a :class="{
        'base-button' : true,
        'red' : props.colour == 'red',
        'red-invert' : props.colour == 'red-invert',
        'black' : props.colour == 'black',
        'black-invert' : props.colour == 'black-invert',
        'purple' : props.colour == 'purple',
        'purple-invert' : props.colour == 'purple-invert',
        'full-width' : props.fullWidth == true,
    }"
        :type="props.submit ? 'submit' : ''"
    >
        <i v-if="icon !== ''" :class="`${props.icon} icon`"></i>
        <slot />
    </a>
</template>

<script setup>
const props = defineProps({
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
@import './../../../style/_variables.scss';
a.base-button {
    text-transform: capitalize;
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

/* purple */
.purple {
    background-color: $purple;
    color: $white !important;
    border: 2px solid $purple;
}
.purple:hover {
    filter: brightness(0.8);
}
.purple-invert {
    background-color: $white;
    color: $purple !important;
    border: 2px solid $purple;
}
.purple-invert:hover {
    opacity: 0.6;
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
    background-color: $lightGrey;
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
  margin-right: 10px;
}
</style>