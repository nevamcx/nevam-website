<template>
    <section id="support" class="content-block section-padding section-bg">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-8 col-xl-8 mt-lg-0 order-1 order-lg-1">
                    <div class="block-contents ms-xl-3 mt-lg-0">
                        <div class="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <h1>Expert support. Guaranteed.</h1>
                        </div>
                        <p>Our solution: we provide a solution that will audit your end to end, find the problems across your entire experience and co-design your future state or desired campaigns. We offer ongoing support and insights that keep your report up to date and your business consistently optimizing.</p><p> It's a little different from your typical Software as a Service. We want to solve your problems and build a solution around your needs, and not build software you have to squeeze into.</p>
                    </div>
                    <BaseButton
                        v-if="store.mode == 'desktop'"
                        @click.prevent="navigateTo('/contact')"
                        :colour="'blue'" 
                        :fullWidth="store.mode == 'mobile' ? true : false"
                    >See how it works</BaseButton>
                </div>

                <div class="col-lg-3 col-xl-3 offset-xl-1 pe-xl-3 col-12 order-2 order-lg-2">
                    <div class="block-img wow fadeInLeft" data-wow-duration="1.1s">
                        <img src="/images/tech-support.jpg" alt="Tech support group of people" class="image-radius">
                    </div>
                </div>
            </div>
            <BaseButton
                v-if="store.mode == 'mobile'"
                @click.prevent="navigateTo('/contact')"
                :colour="'blue'" 
                :fullWidth="store.mode == 'mobile' ? true : false"
            >See how it works</BaseButton>
        </div>
    </section>
</template>

<script setup>
import { baseStore } from "@/stores"
const store = baseStore()
</script>

<style lang="scss">
@import '~/assets/style/_variables.scss';
#support {
    background-color: $white3;

    .block-contents p {
        margin-bottom: 15px;
    }

    img {
        width: 100%;
        height: auto;
        -webkit-clip-path: circle(50% at 50% 50%);
        clip-path: circle(50% at 50% 50%);
    }
}
.desktop-mode {
    #support {
        padding: 100px 100px;

        .block-contents {
            margin-bottom: 30px;
        }
    }
}
.mobile-mode {
    #support {
        padding: 50px 15px;

        img {
            margin-top: 30px;
        }
    }
}
</style>