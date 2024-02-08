<template>
    <section v-if="props.status" id="spinner">
        <div class="spinner-white-background"></div>
        <div class="spinner-container">
            <div class="spinner-shape"></div>
            <h5 class="spinner-text">Processing. . .</h5>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    status: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss">
@import './../style/_variables.scss';
section #spinner {
    z-index: 9999999;
}

#spinner {

    .spinner-white-background {
        background: $black;
        opacity: 0.8;
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 120;
    }

    .spinner-container {
        position: fixed;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        opacity: 1;
        z-index: 1000;
        text-align: center;
    }

    .spinner-shape {
        border-radius: 50%;
        animation: spin .92s infinite linear;
        border: 8px solid #e1e1e1;
        border-left: 8px solid $blueMain;
        width: 110px;
        height: 110px;
        margin: auto;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spinner-text {
        margin-top: 20px;
        color: $white;
    }
}
</style>