<template>
        <section id="services" class="services-wrapper fix section-padding">

        <div class="container">
            <div class="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
                <div class="block-contents">
                    <div class="section-title wow fadeInUp" data-wow-duration="1s">
                        <h1>Visualize your content with a birds eye view</h1>
                        <p>See every aspect of your marketing efforts in one place</p>
                    </div>
                </div>
            </div>

            <div class="row text-center text-lg-start mt-50">

                <div class="col-md-6 col-xl-4 col-12">
                    <div class="service-box-item">
                        <div class="icon">
                            <img src="/images/icons/arrow.svg" alt="">
                        </div>
                        <div class="content">
                            <h4>Every channel</h4>
                            <p>See all your marketing channels globally</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xl-4 col-12">
                    <div class="service-box-item">
                        <div class="icon">
                            <img src="/images/icons/grid.svg" alt="">
                        </div>
                        <div class="content">
                            <h4>Every piece of content</h4>
                            <p>See all of the pages, ads and emails live</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-xl-4 col-12">
                    <div class="service-box-item">
                        <div class="icon">
                            <img src="/images/icons/path.svg" alt="">
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
                        @click="store.$patch({ modal: true })"
                        :colour="'purple'"
                        :icon="'fal fa-play-circle'"
                    >Demo</BaseButton>
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
@import './../style/_variables.scss';
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