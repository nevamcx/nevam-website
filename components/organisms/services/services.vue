<template>
        <section 
            id="services" 
            class="services-wrapper fix section-padding"
            :width="store.mode == 'mobile' ? 330 : 1421"
            :height="store.mode == 'mobile' ? 1227 : 618"
            style="width: 100%; height: auto;"
        >

        <div class="container">
            <div class="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
                <div class="block-contents">
                    <div class="section-title wow fadeInUp" data-wow-duration="1s">
                        <p>Everything all in one place</p>
                        <h1>It’s Google Maps for your customer experience</h1>
                    </div>
                </div>
            </div>

            <div class="row text-center text-lg-start mt-50">

                <div class="col-md-6 col-xl-3 col-12">
                    <div class="service-box-item">
                        <div class="icon">
                            <img src="/images/icons/grid.svg" alt="Arrow pointing image">
                        </div>
                        <div class="content">
                            <h4>Every channel</h4>
                            <p>See all your marketing channels globally</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xl-3 col-12">
                    <div class="service-box-item">
                        <div class="icon">
                            <img src="/images/icons/arrow.svg" alt="Grid blocks image">
                        </div>
                        <div class="content">
                            <h4>Every touchpoint</h4>
                            <p>See all the pages, ads and emails live</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xl-3 col-12">
                    <div class="service-box-item">
                        <div class="icon">
                            <img src="/images/icons/papers.svg" alt="Grid blocks image">
                        </div>
                        <div class="content">
                            <h4 class="long-text">Every piece of content</h4>
                            <p>See all the creatives and copy across your campaigns</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xl-3 col-12">
                    <div class="service-box-item">
                        <div class="icon">
                            <img src="/images/icons/path.svg" alt="Curved path line image">
                        </div>
                        <div class="content">
                            <h4>Every pathway</h4>
                            <p>See the possible pathways you really provide</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="custom-center-item">
                    <BaseButton
                        @click.prevent="navigateTo(config.public.calendly, { external: true })"
                        :colour="'blue'"
                        :icon="'fal fa-phone'"
                    >Book a Call</BaseButton>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { baseStore } from '@/stores'
const store = baseStore()
const config = useRuntimeConfig()
</script>

<style lang="scss">
@import '~/assets/style/_variables.scss';
#services {
    background-color: $white3;

    .service-box-item {
        background-color: $white;
        -webkit-box-shadow: 0px 4px 80px rgba(8, 15, 30, 0.06);
        box-shadow: 0px 4px 80px rgba(8, 15, 30, 0.06);
        border-radius: 10px;
        padding: 40px;
        margin-top: 30px;
    }

    .service-box-item .content p {
        font-size: 16px;
        line-height: 24px;
    }

    .service-box-item .content a {
        text-transform: capitalize;
        color: $grayDark;
        margin-top: 30px;
        display: block;
        font-weight: 600;
        font-size: 16px;
    }

    .custom-center-item {
        width: auto;
        margin-left: auto;
        margin-right: auto;
        
    }
}

.desktop-mode {
    #services {
        padding: 100px 100px;

        .base-button {
            margin-top:  50px;
        }

        .service-box-item {
            .icon {
                margin-bottom: 50px;
            }
        }

        .long-text {
            width: 250px;
        }
    }
}
.mobile-mode {
    #services {
        padding: 50px 15px;

        h1 {
            margin-top: 30px;
        }

        .base-button {
            margin-top:  70px !important;
        }

        .service-box-item {
            .icon {
                margin-bottom: 20px;
            }
        }
    }
}
</style>