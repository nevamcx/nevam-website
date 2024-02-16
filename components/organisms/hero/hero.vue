<template>
    <section class="hero-welcome-wrapper" id="hero">
        <div class="single-slide">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
                        <div class="hero-contents">
                            <h1 v-if="store.mode == 'desktop'">Identify <TextEffect :id="1" :words="words"/> <br>in your digital customer experience</h1>

                            <h1 v-if="store.mode == 'mobile'">Identify <br><TextEffect :id="1" :words="words"/> <br>in your digital customer experience</h1>

                            <p>with recommendations on how to fix them</p>
                            <div class="cta-button">

                                <BaseButton
                                    :colour="'purple'"
                                    :icon="'fal fa-phone'"
                                >Book a Call</BaseButton>

                            </div>
                            <div class="tri-arrow">
                                <img src="/images/arrow.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div v-if="store.mode == 'desktop'" class="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
                        <img src="/images/hero-1.webp" alt="Image of person using keyboard" class="desktop-image">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { baseStore } from '@/stores'
const store = baseStore()

const words = [
    { text: 'problems' },
    { text: 'insights' },
    { text: 'opportunities' }
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
                margin-left: 25px;
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