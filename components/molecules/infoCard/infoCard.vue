<template>
    <section 
        id="info-card" 
        :class="{
            'info': props.type == 'info',
            'warn': props.type == 'warn',
            'error': props.type == 'error'
        }">
        <i class="icon far fa-info-circle"></i>
        <span class="heading">{{ props.heading }}</span>
        <div class="text">{{ props.text }}</div>
    </section>
</template>

<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'info'
    },
    heading: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss">
@import './../../../style/_variables.scss';
#info-card {

    padding: 15px;
    margin-top: 30px;
    margin-bottom: 20px;
    border-radius: 2px;

    .icon {
        font-size: 30px;
    }

    &.info {
        color: $blue;
        background-color: $blueLight;
        border-left: 7px solid $blue;
        border-top: 0.5px solid $blue;
        border-right: 0.5px solid $blue;
        border-bottom: 0.5px solid $blue;
    }
    &.warn {
        color: $info;
        background-color: $yellowLight1;
        border-left: 7px solid $info;
        border-top: 0.5px solid $info;
        border-right: 0.5px solid $info;
        border-bottom: 0.5px solid $info;
    }
    &.error {
        color: $red;
        background-color: $redLight;
        border-left: 7px solid $red;
        border-top: 0.5px solid $red;
        border-right: 0.5px solid $red;
        border-bottom: 0.5px solid $red;
    }
}

.desktop-mode {
    #info-card {

        .heading {
            font-size: 20px;
            font-weight: 500;
            position: relative;
            bottom: 6px;
            left: -10px;
        }

        .text {
            font-size: 17px;
            margin-top: 5px;
            margin-left: 50px;
            line-height: 20px;
        }
    }
}
.mobile-mode {
    #info-card {

        .heading {
            font-size: 18px;
            font-weight: 500;
            position: relative;
            bottom: 6px;
            left: -15px;
        }

        .text {
            font-size: 15px;
            margin-top: 10px;
            line-height: 20px;
        }
    }
}
</style>