<template>
    <section class="hero-welcome-wrapper" id="hero">
        <div class="single-slide">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
                        <div class="hero-contents">
                            <h1>Identify problems in your digital customer experience</h1>
                            <p>with recommendations on how to fix them</p>
                            <div class="cta-button">

                                <BaseButton
                                    @click="store.$patch({ modal: true })"
                                    :colour="'black-invert'"
                                    :icon="'fal fa-play-circle'"
                                >Demo</BaseButton>

                                <BaseButton
                                    :colour="'purple'"
                                >Join waitlist</BaseButton>

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
</script>

<style lang="scss">
@import './hero.scss';
</style>