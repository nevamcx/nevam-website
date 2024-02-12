<template>
    <NuxtLayout>
        <section class="error-404-wrapper section-padding" id="page-404">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3 text-center">
                        <div class="error-content">
                            <div id="big-letters">
                                <h1>404</h1>
                            </div>
                            <h1 class="mt-5 mb-3">Oops! Page not found.</h1>
                            <p>It appears the page you were looking for couldn't be found. Try going to Home Page by using the button below.</p>
                            <BaseButton
                                :fullWidth="store.mode == 'mobile' ? true : false" 
                                @click.prevent="store.mode == 'mobile' ? navigateTo('/?m-error') : navigateTo('/?d-error')"
                                :colour="'black-invert'"
                            >Back to home</BaseButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup>
import { baseStore } from '@/stores'
const store = baseStore()
</script>

<style lang="scss">
@import './style/_variables.scss';
.desktop-mode {
    #page-404 {
        padding-top: 50px;
        padding-bottom: 100px;

        .base-button {
            margin: 30px auto 30px auto;
        }

        #big-letters h1 {
            font-size: 240px;
            color: $grayDark;
        }
    }
}
.mobile-mode {
    #page-404 {
        padding-top: 50px;
        padding-bottom: 100px;

        #big-letters h1 {
            font-size: 140px;
            color: $grayDark;
        }
    }
}
</style>