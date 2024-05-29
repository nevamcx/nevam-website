<template>
    <section :class="`cta-block ${props.colour}`">
        <div class="text">{{ props.text }}</div>
        <BaseButton
            @click.prevent="navigateTo(config.public.calendly, { external: true })"
            :colour="'white'"
            :icon="'fal fa-phone'"
        >Book a Call</BaseButton>
    </section>
</template>

<script setup>
const config = useRuntimeConfig()
const props = defineProps({
    text: {
        type: String,
        default: ''
    },
    colour: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
@import '~/assets/style/_variables.scss';

.desktop-mode {
    .cta-block {
        .text {
            margin-bottom: 30px;
        }
    }
}

.cta-block {
    text-align: center;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    padding: 50px;

    .text {
        font-size: 30px;
        font-weight: 500;
        line-height: 1.3;
        color: $white;
    }

    &.blue {
        background-color: $blue;
    }
    &.green {
        background-color: $cco-green-1;
    }
}
</style>