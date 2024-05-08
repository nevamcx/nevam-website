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
                                    class="footer-logo d-block" aria-label="Navigate to home page"
                                >
                                    <img src="/images/logo-black.webp" alt="Company logo">
                                </a>
                                <p>We are on a mission to organise the world of digital marketing in one place, with one login.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 offset-xl-4 mb-5">
                        <div class="single-footer-widget wow fadeInLeft" data-wow-delay=".4s">
                            <div class="widget-title">
                                <h5>Company</h5>
                            </div>
                            <ul>
                                <li><a @click.prevent="store.mode == 'mobile' ? navigateTo('/about?m-footer-link') : navigateTo('/about?d-footer-link')" aria-label="About us page">About</a></li>

                                <li><a @click.prevent="store.mode == 'mobile' ? navigateTo('/contact?m-footer-link') : navigateTo('/contact?d-footer-link')" aria-label="Contact us page">Contact</a></li>

                                <li><a @click.prevent="store.mode == 'mobile' ? navigateTo('/faqs?m-footer-link') : navigateTo('/faqs?d-footer-link')" aria-label="FAQ page">FAQs</a></li>

                                <li><a @click.prevent="store.mode == 'mobile' ? navigateTo('/privacy?m-footer-link') : navigateTo('/privacy?d-footer-link')" aria-label="Privacy policy page">Privacy policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-2 offset-xl-0">
                        <div class="single-footer-widget wow fadeInLeft" data-wow-delay=".6s">
                            <div class="widget-title">
                                <h5>Social</h5>
                            </div>
                            <ul>
                                <li><a href="https://www.instagram.com/nevamcx" aria-label="Instagram page"><i class="fab fa-instagram social-icon"></i>Instagram</a></li>

                                <li><a href="https://www.facebook.com/nevamcx" aria-label="Facebook page"><i class="fab fa-facebook social-icon"></i>Facebook</a></li>

                                <li><a href="https://www.linkedin.com/company/nevam-cx" aria-label="LinkedIn page"><i class="fab fa-linkedin social-icon"></i>LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom-wrapper">
            <div v-if="store.mode == 'mobile'" class="container">
                <div class="address footer-bottom-text">
                    <p><i class="icon fal fa-copyright"></i> 2023 NEVAM CX. All Rights Reserved.</p>
                </div>
            </div>
            <div class="container footer-border">
                <div class="footer-bottom-content">
                    <div v-if="store.mode == 'desktop'" class="left">
                        <div class="address footer-bottom-text">
                            <p><i class="icon fal fa-copyright"></i> 2023 NEVAM CX. All Rights Reserved.</p>
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
@import '~/assets/style/_variables.scss';
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