<template>
    <section class="quote-type-b">
        <div class="left">
            <ProfileImage :image="props.image" />
        </div>
        <div class="right">
            <BlockQuote><slot/></BlockQuote>
            <div class="name">{{ props.name }}</div>
        </div>
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

.quote-type-b {
    display: flex;
    font-size: 28px;
    line-height: 1.2;

    .block-quote {
        font-size: 30px;
        padding: initial !important;
        text-align: initial !important;
    }
    
    .left {
        width: 30%;
        padding: 70px;
    
        .circle {
            margin-top: initial;
            height: auto !important;
        
            img {
                width: 100% !important;
            }
        }
    }

    .right {
        width: 70%;
        align-content: center;
        margin-left: 40px;

        .name {
            font-size: 25px;
            font-weight: bold;
            color: $black;
            letter-spacing: 10px;
            text-transform: uppercase;
            margin-top: -50px;
        }
    }
}
</style>