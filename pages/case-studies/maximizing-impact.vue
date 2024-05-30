<template>
    <section class="section-padding section-bg" id="case-study">
        <div class="container">
            <div class="col-12">
                <div class="block-contents fw500">
                    <div class="section-title">
                        <h2>Maximizing impact and gaining clarity with NEVAM CX</h2>
                    </div>
                    <div :class="`section-content ${getValue('mb-100', 'mb-50')}`">
                        <p>Terry and Ryan, co-founders of the growing scale-up <a class="website-link" aria-label="Contact us page" href="https://cashflowco.com.au" target="_blank">"The Cashflow Co."</a> and hosts of their own podcast <a class="website-link" aria-label="Contact us page" href="https://open.spotify.com/show/4fh8xSyibogGPOgwswvIUa" target="_blank">"Wealth, Time, Freedom"</a> approached NEVAM CX with a pressing issue. They knew they had a problem. they had built so many layers to the business to where it is, they didn't realize the complexities and interdependencies that were created as a result. This affected their alignment and ability to effectively onboard and communicate to team members how it all fitted together. As result, they were missing opportunities. They realized they needed a solution that could provide clarity and streamline operations as they grew to maximize impact of time.</p>
                    </div>
                    <div :class="`section-content ${getValue('mb-50', 'mb-25')}`">
                        <FullwidthImageBlock :image="store.mode == 'desktop' ? '/images/case-studies/cashflowco/logo-banner.png' : '/images/case-studies/cashflowco/logo-mobile.png'" />
                    </div>
                    <div :class="`section-content ${getValue('', 'mb-25')}`">
                        <BlockQuote>The Cashflow Co. is a <big>financial</big> coaching media business, that hosts a <big>podcast</big> and runs online <big>courses</big></BlockQuote>
                    </div>
                    <div :class="`section-content ${getValue('mb-100', 'mb-30')}`">
                        <FullwidthImageBlock :image="store.mode == 'desktop' ? '/images/case-studies/cashflowco/terry-ryan-banner.png' : '/images/case-studies/cashflowco/terry-ryan-mobile.png'" />
                    </div>
                    <table class="table" v-if="store.mode == 'desktop'">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="heading">Client:</div>
                                    <div class="content">The Cashflow Co.</div>
                                </td>
                                <td>
                                    <div class="heading">Industry:</div>
                                    <div class="content">Finance, Media, Education</div>
                                </td>
                                <td>
                                    <div class="heading">Scope:</div>
                                    <div class="content">All media channels (x 8)</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="heading">Website:</div>
                                    <div class="content">https://cashflowco.com.au</div>
                                </td>
                                <td>
                                    <div class="heading">Engagement:</div>
                                    <div class="content">2 weeks</div>
                                </td>
                                <td>
                                    <div class="heading">Scope limitations:</div>
                                    <div class="content">None</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="heading">Location:</div>
                                    <div class="content">Remote (Australia)</div>
                                </td>
                                <td>
                                    <div class="heading">Key people:</div>
                                    <div class="content">Terry, Ryan</div>
                                </td>
                                <td>
                                    <div class="heading">Technologies:</div>
                                    <div class="content">Miro, Fireflies.ai, Nevam CX</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="table text-nowrap" v-if="store.mode == 'mobile'">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="heading">Client:</div>
                                    <div class="heading">Industry:</div>
                                    <div class="heading">Scope:</div>
                                    <div class="heading">Website:</div>
                                    <div class="heading">Engagement:</div>
                                    <div class="heading">Limitations:</div>
                                    <div class="heading">Location:</div>
                                    <div class="heading">Key people:</div>
                                    <div class="heading">Technologies:</div>
                                </td>
                                <td>
                                    <div class="content">The Cashflow Co.</div>
                                    <div class="content">Finance, Media, Education</div>
                                    <div class="content">All media channels (x 8)</div>
                                    <div class="content">https://cashflowco.com.au</div>
                                    <div class="content">2 weeks</div>
                                    <div class="content">None</div>
                                    <div class="content">Remote (Australia)</div>
                                    <div class="content">Terry, Ryan</div>
                                    <div class="content">Miro, Fireflies.ai, Nevam CX</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="section-title mt-50">
                        <h2>What we analysed:</h2>
                    </div>
                    <div class="section-content">
                        <p>Over the years, Cashflow Co. had setup multiple media channels: 2 personal LinkedIn accounts (Terry & Ryan), 1 LinkedIn business page, Instagram, TikTok, Facebook, and 2 Podcast channels (Spotify + Apple). Now that's a lot of channels to manage! Their conversion ratio's were ok, nothing incredible, but they didn't even know where to start. They needed clarity & direction in this minefield of channels & endless possible customer journeys.</p>
                    </div>
                    <div class="d-flex justify-content-between mt-50 circles-1" v-if="store.mode == 'desktop'">
                        <Circle :content="'22'" :description="'Unique webpages'"/>
                        <Circle :content="'3'" :description="'Email campaigns'"/>
                        <Circle :content="'6'" :description="'Social channels'"/>
                        <Circle :content="'2'" :description="'Podcast channels'"/>
                    </div>
                    <div class="d-flex justify-content-around circles-1" v-if="store.mode == 'mobile'">
                        <Circle :content="'22'" :description="'Unique webpages'"/>
                        <Circle :content="'3'" :description="'Email campaigns'"/>
                    </div>
                    <div class="d-flex justify-content-around circles-1" v-if="store.mode == 'mobile'">
                        <Circle :content="'6'" :description="'Social channels'"/>
                        <Circle :content="'2'" :description="'Podcast channels'"/>
                    </div>
                    <div :class="`section-title ${getValue('mt-150', 'mt-80')}`">
                        <h2>Why they approached us:</h2>
                    </div>
                    <div class="section-content">
                        <p>Terry and Ryan wear multiple hats and were growing rapidly. As they onboarded new members they found documentation was light and it took time to bring team members up to speed. Meanwhile, new products were needing to launch and they questioned whether they were maximizing every opportunity for conversion across their entire landscape. They were seeking a solution to prioritize tasks and align their efforts for maximum impact.</p>
                    </div>
                    <div :class="`section-content ${getValue('mt-120 mb-120', 'mt-80 mb-80')}`">
                        <CtaBlock :colour="'green'" :text="'Demystify your marketing funnel:'" />
                    </div>
                    <div :class="`section-title ${getValue('mt-80', 'mt-50')}`">
                        <h2>Reservations & concerns:</h2>
                    </div>
                    <div :class="`section-content ${getValue('mb-100', 'mb-80')}`">
                        <p>Its hard to slow down and Terry and Ryan expressed reservations about the time commitment and effort required for the implementation process. Additionally they weren't positive on the whether the results would truly address their needs. Luckily Brittany our CEO was a client of theirs and trust had formed. We also made sure sessions worked around their schedule in bite sized chunks so it wasn't feeling like it lost them a days work.</p>
                    </div>
                    <div :class="`section-content ${getValue('mb-25', 'mb-80')}`">
                        <QuoteTypeA :image="'/images/case-studies/cashflowco/terry.png'" :name="getValue('Terry Condon', 'Terry <br>Condon')">Our businesses are like a maze and NEVAM CX makes it incredibly clear where in the maze I am losing customers and how to eliminate them</QuoteTypeA>
                    </div>
                    <div class="section-content">
                        <FullwidthImageBlock :image="getValue('/images/case-studies/cashflowco/square-blocks.png', '/images/case-studies/cashflowco/grid-mobile.png')" />
                    </div>
                    <div :class="`section-title ${getValue('mt-100', 'mt-70')}`">
                        <h2>Solution:</h2>
                    </div>
                    <div class="section-content">
                        <p>Where the value really came in was designing their end to end experience by product. As they were about to create a new product and upgrade their community portal, it was a great time to map it out. Together we found opportunities for simplifying the website content, streamlining the lead process and adding additional flows for different personas. In our last session, Terry and Ryan were able to take the reigns and really manage the process themselves.</p>
                    </div>
                    <div class="section-content mt-70 mb-70 opacity-75" v-if="store.mode == 'mobile'">
                        <FullwidthImageBlock :image="'/images/case-studies/cashflowco/social-posts-grid.png'" />
                    </div>
                    <div :class="`section-title ${getValue('mt-80', 'mt-50')}`">
                        <h2>Impact:</h2>
                    </div>
                    <div class="section-content">
                        <p>After going through our process, Terry and Ryan had many 'ah ha' moments. On reflection they admitted if they hadn't invested, it was costing them more money and the couldn't afford not to. Cashflow Co since the date of this case study has now released their new community portal, updated their website, implemented a SEO strategy, changed many email automations, released a new app for their product Money mentorship as well as nearly completed build for their new product. Not to mention continued with business as usual and regular podcasts!</p>
                    </div>
                    <div class="d-flex justify-content-between mt-50 mb-150 circles-2" v-if="store.mode == 'desktop'">
                        <Circle :content="'31'" :description="'Webpage content improvements'"/>
                        <Circle :content="'15'" :description="'Social post link changes'"/>
                        <Circle :content="'24'" :description="'SEO updates made'"/>
                        <Circle :content="'9'" :description="'Podcast meta data updates'"/>
                        <Circle :content="'12'" :description="'Email campaign flow updates'"/>
                    </div>
                    <div class="d-flex justify-content-around circles-2" v-if="store.mode == 'mobile'">
                        <Circle :content="'31'" :description="'Webpage content improvements'"/>
                        <Circle :content="'15'" :description="'Social post link changes'"/>
                    </div>
                    <div class="d-flex justify-content-around circles-2" v-if="store.mode == 'mobile'">
                        <Circle :content="'24'" :description="'SEO updates made'"/>
                        <Circle :content="'9'" :description="'Podcast meta data updates'"/>
                    </div>
                    <div class="d-flex justify-content-around mb-100 circles-2" v-if="store.mode == 'mobile'">
                        <Circle :content="'12'" :description="'Email campaign flow updates'"/>
                    </div>
                    <div class="section-content mt-150 pt-50 opacity-75" v-if="store.mode == 'desktop'">
                        <FullwidthImageBlock :image="'/images/case-studies/cashflowco/social-posts-grid.png'" />
                    </div>
                    <div class="section-content mt-100 mb-50" v-if="store.mode == 'desktop'">
                        <QuoteTypeB :image="'/images/case-studies/cashflowco/ryan.png'" :name="'Ryan Monaghan'">Going through this process made me realise that we were losing opportunities in our funnel</QuoteTypeB>
                    </div>
                    <div class="section-content mb-150" v-if="store.mode == 'mobile'">
                        <QuoteTypeC :image="'/images/case-studies/cashflowco/ryan.png'" :name="'Ryan <br>Monaghan'">Going through this process made me realise that we were losing opportunities in our funnel</QuoteTypeC>
                    </div>
                    <div :class="`section-content ${getValue('mt-120', 'mt-50')}`">
                        <CtaBlock :colour="'green'" :text="'Looking for the gaps in your funnel?'" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { baseStore } from '@/stores'
import { timeStamp } from '@/composables/dateTime'
const config = useRuntimeConfig()
const store = baseStore()

useHead({    
    meta: [
        { 
            property: 'og:image', 
            content: 'https://nevamcx.com/images/case-studies/cashflowco/terry-ryan-banner.png'
        },
        { 
            property: 'og:url', 
            content: 'https://nevamcx.com/case-studies/maximizing-impact'
        },
        { 
            property: 'article:published_time', 
            content: timeStamp()
        },
        { 
            property: 'article:author', 
            content: config.public.author
        }
    ],
    title: 'Maximizing impact & gaining clarity'
})

const getValue = (desktopValue, mobileValue) => {
    if(store.mode == 'mobile') {
        return mobileValue
    }
    if(store.mode == 'desktop') {
        return desktopValue
    }
}
</script>

<style lang="scss">
@import '~/assets/style/_variables.scss';

.desktop-mode #case-study {
    padding: 100px 100px;
}

#case-study {
    padding-bottom: 0px !important;
    table {
        td {
            width: 33.333333%;
            color: $grayDark;
        }
        tr {
            height: 120px;
        }
        .heading {
            font-weight: 600;
        }
    }
    .circles-2 {
        .content {
            color: $grayDark;
            border: 6px solid #dde11b;
        }
    }
}

.mobile-mode {
    #case-study {
        padding: 50px 15px;
        table {
            font-size: 16px;
            line-height: 2.2;
        }
    }
}
</style>