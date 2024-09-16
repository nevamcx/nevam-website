<template>
    <section id="product-hero" class="content-block section-padding section-bg">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-12 order-1 left">
                    <div class="block-contents ms-xl-3 mt-lg-0">
                        <div class="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <h2 :style="store.mode == 'desktop' ? 'width: 700px;' : ''">Empowering Everyone In Your Business to Delight Customers</h2>
                        </div>

                        <div class="row text-center text-lg-start mt-50">

                            <div class="col-md-6 col-xl-3 col-12">
                                <div class="service-box-item">
                                    <div class="content">
                                        <h4>For Marketers</h4>
                                        <p>Optimize your campaigns and track their impact with detailed reports and insights</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3 col-12">
                                <div class="service-box-item">
                                    <div class="content">
                                        <h4>For Product Teams</h4>
                                        <p>Understand user interactions and improve product features based on real data</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3 col-12">
                                <div class="service-box-item">
                                    <div class="content">
                                        <h4>For Tech & Design</h4>
                                        <p>Collaborate seamlessly with other teams to create cohesive and engaging customer experiences</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-xl-3 col-12">
                                <div class="service-box-item">
                                    <div class="content">
                                        <h4>For Leadership</h4>
                                        <p>Gain a high-level view of performance and progress to make informed strategic decisions</p>
                                    </div>
                                </div>
                            </div>

                        </div>

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
@import '~/assets/style/_variables.scss';
#product-hero {
    background-color: $white;

    .block-contents p {
        margin-bottom: 15px;
    }

    img {
        width: 100%;
        height: auto;
    }

    .circle {
        border-radius: 50%;
        border: 2px solid #000;
        color: #000;
        width: 40px;
        height: 40px;
        display: inline-block;
        text-align: center;
        margin-right: 20px;
        font-size: 20px;
    }

    .number {
        display: block;
        position: relative;
        bottom: -2px;
    }

    .section-title {
        margin-bottom: 30px;
    }
}
.desktop-mode {
    #product-hero {
        padding: 100px 100px;

        tr.list-item {
            display: inline-flex;
            margin-bottom: 10px;
        }

        .section-title {
            margin-bottom: 100px;
        }


    }
}
.mobile-mode {
    #product-hero {
        padding: 50px 15px;

        img {
            margin-top: 30px;
        }

        .right {
            display: none;
        }
        .left {
            width: 100%;
        }

        .service-box-item {
            text-align: left;
        }
    }
}
</style>