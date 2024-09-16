<template>
    <section id="support" class="content-block section-padding section-bg">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-8 col-xl-8 mt-lg-0 order-1 order-lg-1">
                    <div class="block-contents ms-xl-3 mt-lg-0">
                        <div class="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <h1>A word from Britt</h1>
                        </div>
                        <p>The Customer Experience shouldn’t be chaos! Right now, different teams work on different platforms, across various channels, chasing a multitude of metrics—all in the name of creating a better experience. But here's the catch: nobody can truly own it. Why? Because there are blind spots everywhere.</p>
                            
                        <p>We’re tired of seeing businesses struggle through this mess manually. It's time to change the game. Our mission is to empower teams to break down the silos, illuminate the blind spots, and create a seamless, unified customer experience. No more band-aid solutions — let’s redefine what’s possible together!</p>
                        
                        Brittany Fox<br>
                        Founder of Nevam CX
                    </div>
                    <BaseButton
                        v-if="store.mode == 'desktop'"
                        @click.prevent="navigateTo(config.public.calendly, { external: true })"
                        :colour="'blue'" 
                        :fullWidth="store.mode == 'mobile' ? true : false"
                    >See how it works</BaseButton>
                </div>

                <div class="col-lg-3 col-xl-3 offset-xl-1 pe-xl-3 col-12 order-2 order-lg-2">
                    <div class="block-img wow fadeInLeft" data-wow-duration="1.1s">
                        <img src="/images/britt.webp" alt="Brittany Fox image" class="image-radius">
                    </div>
                </div>
            </div>
            <BaseButton
                v-if="store.mode == 'mobile'"
                @click.prevent="navigateTo(config.public.calendly, { external: true })"
                :colour="'blue'" 
                :fullWidth="store.mode == 'mobile' ? true : false"
            >See how it works</BaseButton>
        </div>
    </section>
</template>

<script setup>
import { baseStore } from "@/stores"
const store = baseStore()
const config = useRuntimeConfig()
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