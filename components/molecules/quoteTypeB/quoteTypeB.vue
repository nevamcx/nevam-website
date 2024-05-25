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

<style scoped lang="scss">
@import '~/assets/style/_variables.scss';
.block-quote {
    font-size: 30px;
    padding: initial !important;
    text-align: initial !important;
}

.quote-type-b {
    display: flex;
    font-size: 28px;
    line-height: 1.2;
    
    .left {
        width: 33.33%;
        padding: 100px;
    
        .circle {
            margin-top: initial;
            height: initial;
        
            img {
                width: initial;
                margin-left: -50px;
            }
        }
    }

    .right {
        width: 66.66%;
        align-content: center;
        margin-left: -50px;

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
}
</style>