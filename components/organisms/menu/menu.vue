<template>
    <header class="header-1 style-2" id="main-menu">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-2 col-sm-5 col-md-4 col-6">
                    <div class="logo">
                        <a @click.prevent="store.mode == 'mobile' ? navigateTo('/?m-logo') : navigateTo('/?d-logo')">
                            <img src="/images/logo-white.png" alt="Logo">
                        </a>
                    </div>
                </div>
                <div v-if="store.mode == 'desktop'" class="col-lg-10 text-end p-lg-0 d-none d-lg-flex justify-content-end align-items-center">
                    <!-- desktop menu -->
                    <div class="menu-wrap">
                        <div class="main-menu">
                            <ul>
                                <li><a @click.prevent="navigateTo('/')">Home</a></li>
                                <li><a @click.prevent="navigateTo('/about')">About</a></li>
                                <li><a @click.prevent="navigateTo('/blog')">Blog</a></li>
                                <li><a @click.prevent="navigateTo('/faqs')">FAQs</a></li>
                                <li><a @click.prevent="navigateTo('/contact')">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="header-right-element">
                        <BaseButton 
                            style="margin-left: 20px;"
                            @click.prevent="navigateTo('/book-call?d-header')"
                            :colour="'black'"
                        >Book a Call</BaseButton>
                    </div>
                </div>
                <div
                    v-if="store.mode == 'mobile'"
                    class="d-block d-lg-none col-sm-1 col-md-8 col-6"
                    @click.prevent="toggleMenu()"
                >
                    <!-- mobile menu -->
                    <div class="mobile-nav-wrap">
                        <div id="hamburger"><i class="fal fa-bars"></i></div>
                        <div :class="menuState ? 'show' : ''" class="mobile-nav">
                            <button type="button" aria-label="Close navigation" class="close-nav">
                                <i class="fal fa-times"></i>
                            </button>
                            <nav class="sidebar-nav">
                                <ul class="metismenu" id="mobile-menu">
                                    <li><a @click.prevent="navigateTo('/')">Home</a></li>
                                    <li><a @click.prevent="navigateTo('/about')">About</a></li>
                                    <li><a @click.prevent="navigateTo('/blog')">Blog</a></li>
                                    <li><a @click.prevent="navigateTo('/faqs')">FAQs</a></li>
                                    <li><a @click.prevent="navigateTo('/contact')">Contact</a></li>
                                </ul>
                                <BaseButton
                                    @click.prevent="navigateTo('/book-call?m-header')"
                                    colour="purple"
                                    :icon="'fal fa-phone'"
                                    :fullWidth="true"
                                >Book a Call</BaseButton>
                            </nav>
                        </div>
                    </div>
                    <div :class="menuState ? 'active' : ''" class="overlay"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { baseStore } from "@/stores"
import { publish } from '@/events/events'

const store = baseStore()
var menuState = ref(false)

const toggleMenu = async () => {
    publish('mobileMenuOpened', {
        status: true
    })
    menuState.value = !menuState.value
}
</script>

<style lang="scss">
@import './../style/_variables.scss';
@import './menu.scss';
.mobile-mode {
    #main-menu {
        a.base-button {
            padding: 15px 40px;
        }
    }
}
</style>
