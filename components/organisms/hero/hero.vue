<template>
    <section 
        class="hero-welcome-wrapper" 
        id="hero"
        :width="store.mode == 'mobile' ? 355 : 1621"
        :height="store.mode == 'mobile' ? 824 : 833"
        style="width: 100%; height: auto;"
    >
        <div class="single-slide">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
                        <div class="hero-contents">
                            <h1 v-if="store.mode == 'desktop'"><TextEffect :id="1" :words="words"/> <br>your way to better customer journeys</h1>

                            <h1 v-if="store.mode == 'mobile'"><TextEffect :id="1" :words="words"/> <br>your way to better customer journeys</h1>

                            <p>Empower your team to review, empathize, and enhance every touchpoint of your customer experience.</p>
                            <div class="cta-button">

                                <BaseButton
                                    @click.prevent="navigateTo(config.public.calendly, { external: true })"
                                    :colour="'blue'"
                                    :icon="'fal fa-phone'"
                                >Book a Call</BaseButton>

                            </div>
                            <div class="tri-arrow">
                                <img src="/images/arrow.svg" alt="Line arrow pointing to button">
                            </div>
                        </div>
                    </div>
                    <div v-if="store.mode == 'desktop'" class="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
                        <img src="/images/hero.jpg" alt="Image of person using keyboard" class="desktop-image">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { baseStore } from '@/stores'
const store = baseStore()
const config = useRuntimeConfig()

const words = [
    { text: 'Navigate' },
    { text: 'Collaborate' },
    { text: 'Optimize' }
]
</script>

<style lang="scss">
@import './hero.scss';
.desktop-mode {
    #hero {
        h1 {
            font-size: 80px;
            margin-top: 30px;
        }

        .text-effect-wrapper {
            position: absolute;

            .text-effect {
                bottom: initial;
                margin-left: 0.1px;
            }

            .input-cursor {
                bottom: 5px;
                margin-left: 15px;
                height: 80px;
                width: 8px;
                background-color: #777777;
                display: inline;
                position: absolute;
            }
        }
    }
}
.mobile-mode {
    #hero {
        h1 {
            font-size: 50px;
            margin-top: 10px;
        }

        .text-effect-wrapper {
            position: relative;
            display: -webkit-inline-box;

            .text-effect {
                bottom: initial;
            }

            .input-cursor {
                bottom: 3px;
                margin-left: 15px;
                height: 60px;
                width: 7px;
                background-color: #777777;
                display: inline;
                position: absolute;
            }
        }
    }
}
</style>