<template>
    <section class="hero">
        <header class="uui-section_heroheader01">
            <div class="uui-page-padding">
                <div class="uui-container-large">
                    <div class="uui-padding-vertical-xhuge">
                        <div class="w-layout-grid uui-heroheader01_component">
                            <div class="uui-heroheader01_content">
                                <h1 class="uui-heading-xlarge">Identify the problems in your digital customer experience</h1>
                                <div class="uui-space-small"></div>
                                <div class="uui-max-width-medium">
                                    <div class="uui-text-size-xlarge">with recommendations on how to fix them.</div>
                                </div>
                                <div class="uui-space-large"></div>

                                <div class="uui-button-row is-reverse-mobile-landscape">
                                    <div class="uui-button-wrapper max-width-full-mobile-landscape">
                                            
                                        <Button
                                            @click="openModal()"
                                            :action="'#'"
                                            :classes="{
                                                'w-lightbox': true,
                                                'white-button': true
                                            }"
                                            :icon="'/images/demo-icon.svg'"
                                        >
                                        Demo</Button>

                                    </div>

                                    <Button
                                        :action="'/join-waitlist'"
                                        :classes="{
                                            'purple-button': true
                                        }"
                                    >
                                    Join waitlist</Button>

                                </div>
                            </div>
                            <div class="uui-heroheader01_image-wrapper"><img src="/images/image-01.jpeg" loading="lazy"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, (max-width: 1439px) 45vw, 608px"
                                    srcset="/images/image-01-p-500.jpeg 500w, /images/image-01-p-800.jpeg 800w, /images/image-01-p-1080.jpeg 1080w, /images/image-01.jpeg 1440w"
                                    alt="Header image" class="uui-heroheader01_image">
                                <div class="uui-heroheader01_fileupload-image-wrapper hide-mobile-landscape"><img
                                        src="/images/file-upload-01.png" loading="lazy" alt="Upload UI element"
                                        class="uui-heroheader01_fileupload-image1"><img src="/images/file-upload-02.png"
                                        loading="lazy" alt="Upload UI element" class="uui-heroheader01_fileupload-image2">
                                </div><img src="/images/Line-Pattern-Header-1.1.svg" loading="lazy" alt=""
                                    class="uui-heroheader01_pattern-image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </section>

    <section>
        <section class="uui-section_testimonial17">
            <div class="uui-page-padding">
                <div class="uui-container-large">
                    <div class="uui-padding-vertical-xhuge">
                        <div class="uui-max-width-large">
                            <h2 class="uui-heading-medium">We’ve helped hundreds of global companies</h2>
                            <div class="uui-space-xsmall"></div>
                            <div class="uui-text-size-large">Case studies from some of our amazing customers who are
                                building faster.
                            </div>
                        </div>
                        <div data-delay="4000" data-animation="slide" class="uui-testimonial18_component w-slider"
                            data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false"
                            data-autoplay-limit="0" data-nav-spacing="6" data-duration="500" data-infinite="false">
                            <div class="uui-testimonial18_mask w-slider-mask">
                                <div class="uui-testimonial18_slide w-slide">
                                    <div class="uui-testimonial18_content background-color-primary600">
                                        <div class="uui-testimonial18_logo-wrapper"><img src="/images/layers-white.svg"
                                                loading="lazy" alt="Testimonial logo" class="uui-testimonial17_logo"></div>
                                        <div class="uui-testimonial18_content-wrapper">
                                            <div class="uui-heading-small text-color-white">Layers</div>
                                            <div class="uui-space-xsmall"></div>
                                            <div class="uui-text-size-medium text-color-white">“Untitled has saved us
                                                thousands of hours of
                                                work. We’re able to spin up projects faster.”</div>
                                            <div class="uui-space-small"></div>
                                            <div class="uui-space-medium"></div>
                                            <div class="uui-button-row">
                                                <a href="#" class="uui-button-link is-alternate w-inline-block">
                                                    <div>Read case study</div>
                                                    <div class="uui-button-icon w-embed"><svg width="20" height="20"
                                                            viewbox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5.83301 14.1668L14.1663 5.8335M14.1663 5.8335H5.83301M14.1663 5.8335V14.1668"
                                                                stroke="currentColor" stroke-width="1.67"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uui-testimonial18_slide w-slide">
                                    <div class="uui-testimonial18_content background-color-blue600">
                                        <div class="uui-testimonial18_logo-wrapper"><img src="/images/circooles-white.svg"
                                                loading="lazy" alt="Testimonial logo" class="uui-testimonial17_logo"></div>
                                        <div class="uui-testimonial18_content-wrapper">
                                            <div class="uui-heading-small text-color-white">Circooles</div>
                                            <div class="uui-space-xsmall"></div>
                                            <div class="uui-text-size-medium text-color-white">“Love the simplicity of the
                                                service and the
                                                prompt customer support.”</div>
                                            <div class="uui-space-small"></div>
                                            <div class="uui-space-medium"></div>
                                            <div class="uui-button-row">
                                                <a href="#" class="uui-button-link is-alternate w-inline-block">
                                                    <div>Read case study</div>
                                                    <div class="uui-button-icon w-embed"><svg width="20" height="20"
                                                            viewbox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5.83301 14.1668L14.1663 5.8335M14.1663 5.8335H5.83301M14.1663 5.8335V14.1668"
                                                                stroke="currentColor" stroke-width="1.67"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uui-testimonial18_slide w-slide">
                                    <div class="uui-testimonial18_content background-color-indigo600">
                                        <div class="uui-testimonial18_logo-wrapper"><img src="/images/catalog-white.svg"
                                                loading="lazy" alt="Testimonial logo" class="uui-testimonial17_logo"></div>
                                        <div class="uui-testimonial18_content-wrapper">
                                            <div class="uui-heading-small text-color-white">Catalog</div>
                                            <div class="uui-space-xsmall"></div>
                                            <div class="uui-text-size-medium text-color-white">“Untitled has saved us
                                                thousands of hours of
                                                work. We’re able to spin up projects faster.”</div>
                                            <div class="uui-space-small"></div>
                                            <div class="uui-space-medium"></div>
                                            <div class="uui-button-row">
                                                <a href="#" class="uui-button-link is-alternate w-inline-block">
                                                    <div>Read case study</div>
                                                    <div class="uui-button-icon w-embed"><svg width="20" height="20"
                                                            viewbox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5.83301 14.1668L14.1663 5.8335M14.1663 5.8335H5.83301M14.1663 5.8335V14.1668"
                                                                stroke="currentColor" stroke-width="1.67"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uui-testimonial18_slide w-slide">
                                    <div class="uui-testimonial18_content background-color-pink600">
                                        <div class="uui-testimonial18_logo-wrapper"><img src="/images/quotient-white.svg"
                                                loading="lazy" alt="Testimonial logo" class="uui-testimonial17_logo"></div>
                                        <div class="uui-testimonial18_content-wrapper">
                                            <div class="uui-heading-small text-color-white">Quotient</div>
                                            <div class="uui-space-xsmall"></div>
                                            <div class="uui-text-size-medium text-color-white">“We’ve been using Untitled to
                                                kick start every
                                                new project and can’t work without it.”</div>
                                            <div class="uui-space-small"></div>
                                            <div class="uui-space-medium"></div>
                                            <div class="uui-button-row">
                                                <a href="#" class="uui-button-link is-alternate w-inline-block">
                                                    <div>Read case study</div>
                                                    <div class="uui-button-icon w-embed"><svg width="20" height="20"
                                                            viewbox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5.83301 14.1668L14.1663 5.8335M14.1663 5.8335H5.83301M14.1663 5.8335V14.1668"
                                                                stroke="currentColor" stroke-width="1.67"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uui-testimonial18_slide w-slide">
                                    <div class="uui-testimonial18_content background-color-lightblue600">
                                        <div class="uui-testimonial18_logo-wrapper"><img src="/images/hourglass-white.svg"
                                                loading="lazy" alt="Testimonial logo" class="uui-testimonial17_logo"></div>
                                        <div class="uui-testimonial18_content-wrapper">
                                            <div class="uui-heading-small text-color-white">Hourglass</div>
                                            <div class="uui-space-xsmall"></div>
                                            <div class="uui-text-size-medium text-color-white">“Love the simplicity of the
                                                service and the
                                                prompt customer support.”</div>
                                            <div class="uui-space-small"></div>
                                            <div class="uui-space-medium"></div>
                                            <div class="uui-button-row">
                                                <a href="#" class="uui-button-link is-alternate w-inline-block">
                                                    <div>Read case study</div>
                                                    <div class="uui-button-icon w-embed"><svg width="20" height="20"
                                                            viewbox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5.83301 14.1668L14.1663 5.8335M14.1663 5.8335H5.83301M14.1663 5.8335V14.1668"
                                                                stroke="currentColor" stroke-width="1.67"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="uui-testimonial18_slide w-slide">
                                    <div class="uui-testimonial18_content background-color-orange600">
                                        <div class="uui-testimonial18_logo-wrapper"><img src="/images/command-r-white.svg"
                                                loading="lazy" alt="Testimonial logo" class="uui-testimonial17_logo"></div>
                                        <div class="uui-testimonial18_content-wrapper">
                                            <div class="uui-heading-small text-color-white">Command+R</div>
                                            <div class="uui-space-xsmall"></div>
                                            <div class="uui-text-size-medium text-color-white">“Love the simplicity of the
                                                service and the
                                                prompt customer support.”</div>
                                            <div class="uui-space-small"></div>
                                            <div class="uui-space-medium"></div>
                                            <div class="uui-button-row">
                                                <a href="#" class="uui-button-link is-alternate w-inline-block">
                                                    <div>Read case study</div>
                                                    <div class="uui-button-icon w-embed"><svg width="20" height="20"
                                                            viewbox="0 0 20 20" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M5.83301 14.1668L14.1663 5.8335M14.1663 5.8335H5.83301M14.1663 5.8335V14.1668"
                                                                stroke="currentColor" stroke-width="1.67"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="uui-testimonial18_arrow left w-slider-arrow-left">
                                <div class="uui-button-icon w-embed"><svg width="24" height="24" viewbox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="CurrentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg></div>
                            </div>
                            <div class="uui-testimonial18_arrow w-slider-arrow-right">
                                <div class="uui-button-icon w-embed"><svg width="24" height="24" viewbox="0 0 24 24"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="CurrentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg></div>
                            </div>
                            <div class="uui-testimonial18_slide-nav w-slider-nav w-round"></div>
                            <div class="slide-nav-styling-embed w-embed"></div>
                        </div>
                        <section class="rl_banner7_component">
                            <div class="rl-padding-global">
                                <div class="rl_banner7_content-wrapper">
                                    <div class="rl_banner7_content">

                                        <!-- <Button /> -->

                                    </div>
                                    <a href="#" class="rl_banner7_close-button w-inline-block"></a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </section>

    <div class="waves---section-medium">
        <div class="waves---main-container w-container">
            <div class="waves-master-cta-2">
                <div class="waves-content-cta-2">
                    <h1 class="waves---heading-2-no-margins">I’m a beautifully written heading</h1>
                    <div class="waves---paragraph-big">Nam pretium turpis et arcu. Vivamus elementum semper nisi.</div><img
                        src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                        loading="lazy" alt="">
                    <div class="waves---mg-top-16">

                        <!-- <Button /> -->

                    </div>
                    <div class="waves---mg-top-32">
                        <div class="waves---master-checks-horizontal">
                            <div class="waves---single-check-item"><img src="/images/Check-White.svg" loading="lazy" alt=""
                                    class="waves---check-icon">
                                <div class="waves---paragraph-small">Important feature</div>
                            </div>
                            <div class="waves---single-check-item"><img src="/images/Check-White.svg" loading="lazy" alt=""
                                    class="waves---check-icon">
                                <div class="waves---paragraph-small">Important feature</div>
                            </div>
                            <div class="waves---single-check-item"><img src="/images/Check-White.svg" loading="lazy" alt=""
                                    class="waves---check-icon">
                                <div class="waves---paragraph-small">Important feature</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="cf-hero-section-2">
        <div class="cf-1140px-wrapper">
            <div class="home-left-wrapper">
                <h1 class="cf-64px-heading">We Support through the entire process, no self serve trailheads you will never
                    do.
                    Ask us directly.</h1>
                <p class="cf-18px-paragraph header-2">I’m Will Burner, a product designer based in Berlin. I create
                    user-friendly interfaces for fast-growing startups.<a
                        href="https://portfoliouikit.webflow.io/contact-page"><strong><br></strong></a>
                </p>

                <!-- <Button /> -->

            </div>
            <div class="cf-image-review-container"><img src="/images/image-hero.png" loading="eager"
                    sizes="(max-width: 696px) 90vw, (max-width: 767px) 627px, (max-width: 991px) 72vw, (max-width: 1279px) 45vw, 570px"
                    srcset="/images/image-hero-p-500.png 500w, /images/image-hero.png 627w" alt=""
                    class="cf-hero-right-image">
                <div class="cf-hero-testimonial-contain"><img src="/images/Stars-2.svg" loading="lazy" alt=""
                        class="cf-black-review-stars">
                    <p class="cf-testimonial-text---italic">“Will is a true professional and master of his craft.”</p>
                    <p class="cf-testimonial-name-position">Alex Tachov, Founder, Poise</p>
                </div>
                <div class="cf-hero-layer-blur"></div>
            </div>
        </div>
    </div>

    <section class="team-circles">
        <div class="container">
            <h2 class="centered-heading">How can we help your business?</h2>
            <p class="centered-subheading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt
                sagittis eros. Quisque quis euismod lorem.</p>
            <div class="team-grid">
                <div id="w-node-e6254258-90d4-d304-cda3-671848f41311-de641447" class="team-card"><img
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a55c612aae2_portfolio%202%20-%20wide.svg"
                        loading="lazy" alt="" class="team-member-image">
                    <div class="team-member-name">Full Name</div>
                    <div class="team-member-position">Role at C<br>‍Previously: Company 1, Company 2</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-e6254258-90d4-d304-cda3-671848f4131c-de641447" class="team-card"><img
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a55c612aae2_portfolio%202%20-%20wide.svg"
                        loading="lazy" alt="" class="team-member-image">
                    <div class="team-member-name">Full Name</div>
                    <div class="team-member-position">Role at Company<br>Previously: Company 1, Company 2</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-e6254258-90d4-d304-cda3-671848f41326-de641447" class="team-card"><img
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a55c612aae2_portfolio%202%20-%20wide.svg"
                        loading="lazy" alt="" class="team-member-image">
                    <div class="team-member-name">Full Name</div>
                    <div class="team-member-position">Role at Company<br>Previously: Company 1, Company 2</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-e6254258-90d4-d304-cda3-671848f41330-de641447" class="team-card"><img
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a55c612aae2_portfolio%202%20-%20wide.svg"
                        loading="lazy" alt="" class="team-member-image">
                    <div class="team-member-name">Full Name</div>
                    <div class="team-member-position">Role at Company<br>Previously: Company 1, Company 2</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-e6254258-90d4-d304-cda3-671848f4133a-de641447" class="team-card"><img
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a55c612aae2_portfolio%202%20-%20wide.svg"
                        loading="lazy" alt="" class="team-member-image">
                    <div class="team-member-name">Full Name</div>
                    <div class="team-member-position">Role at Company<br>Previously: Company 1, Company 2</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-e6254258-90d4-d304-cda3-671848f41344-de641447" class="team-card"><img
                        src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a55c612aae2_portfolio%202%20-%20wide.svg"
                        loading="lazy" alt="" class="team-member-image">
                    <div class="team-member-name">Full Name</div>
                    <div class="team-member-position">Role at Company<br>Previously: Company 1, Company 2</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { baseStore } from './../../store/index'
const store = baseStore()

const openModal = () => {
    store.$patch({ modal: true })
}
</script>