<template>
    <section id="about">

        <section class="top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mb-5">
                        <div class="block-contents">
                            <div class="mission"><TextUnderline :colour="'pink'">Our mission</TextUnderline> is to organise the world of <TextUnderline :colour="'green'">digital marketing</TextUnderline> in one place</div>
                            <div class="section-content">
                                <p>
                                    After years of marketing and consulting with top tier brands we thought a tool would exist by now that made it easier for marketers to see everything they had online, in one place. The problem kept looming with every client and personally, they just couldn’t identify problems in their experience because each tool only looked at 1 piece of the puzzle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div v-if="store.mode == 'mobile'" class="col-lg-4 col-xl-4 offset-xl-1 pe-xl-3 col-12 align-center">
                        <div class="outside-shape" >
                            <img src="/images/britt.webp" alt="Brittany Fox image" class="inside-shape">
                        </div>
                    </div>
                    <div class="col-lg-7 col-xl-7 mt-lg-0">
                        <div class="block-contents">
                            <div class="text-1">
                                <h2 class="name d-inline">Brittany Fox</h2>
                                <a href="https://www.linkedin.com/in/brittanynfox" aria-label="Navigate Brittany's LinkedIn" target="_blank" class="linkedin d-inline"><i class="fab fa-linkedin social-icon"></i></a>
                            </div>
                            <div class="text-2">
                                <h4 class="name d-inline">Founder, CEO</h4>
                            </div>
                            <p>
                                Ex-Consulting Marketing SME, Brittany has spent the last 6 years identifying problems in major enterprise clients customer experiences and then designing and executing the ideal digital omni-channel experience. This included everything from people and processes to the technical builds and optimisation follow through.
                            </p>
                            <p class="mt-3">
                                She can come in at any stage of of your brands digital journey and stitch together the actions required to create the ideal end to end customer experience that is data and content led. 
                            </p>
                        </div>
                    </div>

                    <div v-if="store.mode == 'desktop'" class="col-lg-4 col-xl-4 offset-xl-1 pe-xl-3 col-12 order-2 order-lg-2 align-center">
                        <div class="outside-shape" >
                            <img src="/images/britt.webp" alt="Brett Spradbury image" class="inside-shape">
                        </div>
                    </div>

                </div>
                <div class="big-space"></div>
                <div class="row align-items-center">
                    <div class="col-lg-4 col-xl-4 mt-lg-0 align-center">
                        <div class="outside-shape" >
                            <img src="/images/brett.webp" alt="Brett Spradbury image" class="inside-shape">
                        </div>
                    </div>
                    <div class="col-lg-7 col-xl-7 offset-xl-1 pe-xl-3 col-12">
                        <div class="block-contents">
                            <div class="text-1">
                                <h2 class="name d-inline">Brett Spradbury</h2>
                                <a href="https://www.linkedin.com/in/brett-spradbury" aria-label="Navigate Brett's LinkedIn" target="_blank" class="linkedin d-inline"><i class="fab fa-linkedin social-icon"></i></a>
                            </div>
                            <div class="text-2">
                                <h4 class="name d-inline">Founder, CTO</h4>
                            </div>
                            <p>
                                From corporates to startups, to agencies & everything in between, Brett has worked on some great tech that has always been customer focused. His mantra is user first, tech second, so that we can always deliver exactly what is needed.</p>

                            <p class="mt-3">
                                Brett has a strong interest in new tech trends and is always trying to find new ways to solve old problems, so that our platform has the best experience for our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script setup>
import { baseStore } from "@/stores"
const store = baseStore()
</script>

<style lang="scss">
@import '~/assets/style/_variables.scss';
#about {
    .top {
        background-color: $white3;

        .mission {
            font-size: 34px;
            margin-bottom: 40px;
            color: #000;
        }
    }

    .text-1 .linkedin i {
        font-size: 30px;
        margin-left: 30px;
        position: relative;
        bottom: 2px;
    }

    .text-2 h4 {
        color: $grayDark;
    }

    .outside-shape {
        position: relative;
        background: #000000;
        clip-path: circle(50% at 50% 50%);
    }
    .inside-shape {
        position: absolute;
        background: white;
        clip-path: circle(50% at 50% 50%);
    }
    .big-space {
        margin-top: 125px;
        margin-bottom: 125px;
    }
}

.desktop-mode {
    #about {
        .top, .bottom {
            padding: 100px 100px;
        }
        .outside-shape {
            width: 400px;
            height: 400px;
        }
        .inside-shape {
            width: 392px;
            top: 4px;
            left: 4px;
        }
        .text-1 {
            margin-bottom: 10px;
        }
        .text-2 {
            margin-bottom: 40px;
        }
    }
}
.mobile-mode {
    #about {
        .top, .bottom {
            padding: 50px 15px;
        }
        .mission {
            line-height: 50px;
        }
        .outside-shape {
            width: 300px;
            height: 300px;
        }
        .inside-shape {
            width: 292px;
            top: 4px;
            left: 4px;
        }
        i.social-icon {
            bottom: 0px !important;
            margin-left: 25px;
        }
        .text-1 {
            margin-top: 30px;
        }
        .text-2 {
            margin-bottom: 10px;
        }
    }
}
</style>