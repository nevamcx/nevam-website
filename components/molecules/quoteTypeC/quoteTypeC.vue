<template>
    <section class="quote-type-c">
        <BlockQuote><slot/></BlockQuote>
        <ProfileImage :image="props.image" />
        <div class="name" v-html=props.name></div>
    </section>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        default: '',
    },
    name: {
        type: String,
        default: '',
    }
})
</script>

<style lang="scss">
@import '~/assets/style/_variables.scss';

.quote-type-c {
    text-align: center;
    font-size: 28px;
    line-height: 1.2;

    .block-quote {
        font-size: 30px;
    }

    .name {
        font-size: 25px;
        font-weight: bold;
        color: $black;
        letter-spacing: 10px;
        text-transform: uppercase;
        margin-top: 20px;
        margin-bottom: -60px;
    }
}

.mobile-mode {
    .quote-type-c {
        .circle {
            margin-top: initial !important;
        }
        .name {
            margin-bottom: -50px;
        }
    }
}
</style>