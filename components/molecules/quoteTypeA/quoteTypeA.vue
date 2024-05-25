<template>
    <section class="quote-type-a">
        <ProfileImage :image="props.image" />
        <div class="name">{{ props.name }}</div>
        <BlockQuote><slot/></BlockQuote>
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

<style scoped lang="scss">
@import '~/assets/style/_variables.scss';

.quote-type-a {
    text-align: center;
    font-size: 28px;
    line-height: 1.2;

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

.block-quote {
    font-size: 30px;
}
</style>