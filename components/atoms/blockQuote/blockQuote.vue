<template>
    <section class="block-quote">
        <span class="inverted-comma before"></span>
        <slot />
        <span class="inverted-comma after"></span>
    </section>
</template>

<style lang="scss">
@import '~/assets/style/_variables.scss';

.block-quote {
    padding: 100px 100px !important;
    font-size: 40px;
    line-height: 1.2;
    text-align: center;
}
big {
    font-weight: 600;
}

.inverted-comma {
    height: 80px;
    width: 80px;
    background-repeat: no-repeat;
    background-image: url('/images/inverted-comma.svg');
    color: $grayLight;
}
.desktop-mode {
    .inverted-comma {
        &.before {
            position: absolute;
            transform: scaleX(-1) scaleY(-1);
            margin-left: -90px;
            margin-top: -60px;
        }
        &.after {
            position: absolute;
            right: 0px;;
        }
    }
}
</style>