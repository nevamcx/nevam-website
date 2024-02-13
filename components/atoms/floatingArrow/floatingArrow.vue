<template>
    <div class="floating-arrow">
        <img :class="{
            left: props.direction == 0,
            right: props.direction == 1,
        }" src="/images/floating-arrow.svg" alt="">
    </div>
</template>

<script setup>
const props = defineProps({
    direction: {
        type: Number,
        default: 0
    }
})
</script>

<style scoped lang="scss">
.floating-arrow {

    text-align: center;
    

    img {
        position: relative;
        z-index: 1000;
        width: 230px;
        height: auto;
    }

    .left {
        transform: rotate(67deg) scaleY(-1);
    }

    .right {
        transform: rotate(67deg) scaleY(1);
    }
}
.desktop-mode {
    .floating-arrow {
        margin-top: -41px;
    }
}
.mobile-mode {
    .floating-arrow {
        margin-top: 20px;
    }
}
</style>