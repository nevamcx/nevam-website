<template>
    <footer class="footer-wrapper footer-2 alt-footer-style" id="footer">
        <div class="footer-widgets-wrapper">
            <div class="container">
                <div class="row">
                    <div v-if="store.mode == 'desktop'" class="col-xl-4">
                        <div class="single-footer-widget wow fadeInLeft">
                            <div class="about-us-widget">
                                <a 
                                    @click.prevent="store.mode == 'mobile' ? navigateTo('/?m-footer-logo') : navigateTo('/?d-footer-logo')"
                                    class="footer-logo d-block"
                                >
                                    <img src="/images/logo.svg" alt="Logo image">
                                </a>
                                <p>We are on a mission to organise the world of digital marketing channels in one place, with one login.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 offset-xl-2 mb-5">
                        <div class="single-footer-widget wow fadeInLeft" data-wow-delay=".4s">
                            <div class="widget-title">
                                <h5>Company</h5>
                            </div>
                            <ul>
                                <li><a @click.prevent="store.mode == 'mobile' ? navigateTo('/about?m-footer-link') : navigateTo('/about?d-footer-link')">About</a></li>

                                <li><a @click.prevent="store.mode == 'mobile' ? navigateTo('/contact?m-footer-link') : navigateTo('/contact?d-footer-link')">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-2 offset-xl-0 mb-5">
                        <div class="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
                            <div class="widget-title">
                                <h5>Legal</h5>
                            </div>
                            <ul>
                                <li><a @click.prevent="store.mode == 'mobile' ? navigateTo('/terms-conditions?m-footer-link') : navigateTo('/terms-conditions?d-footer-link')">Terms & conditions</a></li>

                                <li><a @click.prevent="store.mode == 'mobile' ? navigateTo('/privacy-policy?m-footer-link') : navigateTo('/privacy-policy?d-footer-link')">Privacy policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-2 offset-xl-0">
                        <div class="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
                            <div class="widget-title">
                                <h5>Social</h5>
                            </div>
                            <ul>
                                <li><a href="https://www.instagram.com"><i class="fab fa-instagram social-icon"></i>Instagram</a></li>

                                <li><a href="https://www.facebook.com"><i class="fab fa-facebook social-icon"></i>Facebook</a></li>

                                <li><a href="https://www.linkedin.com"><i class="fab fa-linkedin social-icon"></i>LinkedIn</a></li>

                                <li><a href="https://www.youtube.com"><i class="fab fa-youtube social-icon"></i>YouTube</a></li>

                                <li><a href="https://www.twitter.com"><i class="fab fa-twitter social-icon"></i>Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom-wrapper">
            <div v-if="store.mode == 'mobile'" class="container">
                <div class="address footer-bottom-text">
                    <p><i class="icon fal fa-copyright"></i> 2023 Nevam CX. All Rights Reserved.</p>
                </div>
            </div>
            <div class="container footer-border">
                <div class="footer-bottom-content">
                    <div v-if="store.mode == 'desktop'" class="left">
                        <div class="address footer-bottom-text">
                            <p><i class="icon fal fa-copyright"></i> 2023 Nevam CX. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="footer-bottom-text wow fadeInUp" data-wow-delay=".2" data-wow-duration="1s">
                            <p>Made with <i class="icon far fa-heart"></i> in Sydney, Australia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { baseStore } from "@/stores"
const store = baseStore()
</script>

<style lang="scss">
@import './../style/_variables.scss';
@import './footer.scss';
#footer {
    .icon {
        margin-left: 5px;
        margin-right: 5px;
    }
    .social-icon {
        margin-right: 15px;
    }
}
.desktop-mode {
    #footer {
        .footer-widgets-wrapper {
            padding-bottom: 100px;
        }
        .footer-bottom-content {
            padding: 10px 0px 35px 0px;
            display: flex;
            justify-content: space-between;
        }
    }
}
.mobile-mode {
    #footer {
        padding: 20px 15px;

        .footer-widgets-wrapper {
            padding-bottom: 150px;
        }
        .address {
            padding-bottom: 10px;
    
            p {
                text-align: center;
                font-size: 14px !important;
            }
        }
        .footer-bottom-content {
            padding-top: 0px;
            padding-bottom: 5px;
    
            p,a {
                text-align: center;
                font-size: 14px !important;
            }
        }
    }
}
</style>