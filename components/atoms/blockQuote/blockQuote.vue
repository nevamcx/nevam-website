<template>
    <section class="block-quote">
        <span class="inverted-comma before"></span>
        <slot />
        <span class="inverted-comma after"></span>
    </section>
</template>

<style lang="scss">
@import '~/assets/style/_variables.scss';

.desktop-mode {
    .block-quote {
        padding: 100px 100px !important;
        font-size: 40px;
        line-height: 1.2;
        text-align: center;
    }
    .inverted-comma {
        &.before {
            position: absolute;
            transform: scaleX(-1) scaleY(-1);
            margin-left: -90px;
            margin-top: -60px;
        }
        &.after {
            margin-left: auto;
            display: block;
        }
    }
}
.mobile-mode {
    .block-quote {
        padding: 10px 10px !important;
        font-size: 25px;
        line-height: 1.4;
        text-align: center;
    }
    .inverted-comma {
        &.before {
            transform: scaleX(-0.8) scaleY(-0.8);
            margin-left: -25px;
            margin-top: -10px;
            display: block;
        }
        &.after {
            margin-left: auto;
            display: block;
        }
    }
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
</style>