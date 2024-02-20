<template>
    <section id="product-hero" class="content-block section-padding section-bg">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-lg-7 col-xl-6 mt-lg-0 order-1 order-lg-1">
                    <div class="block-contents ms-xl-3 mt-lg-0">
                        <div class="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <h1>Bring transparency + collaboration to your digital team</h1>
                        </div>
                        <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">NEVAM CX is for digital customer experience professionals, built by them. After years of clients struggling to see the "whole picture" identifying problems and trusting they were executing efficiently. We decided to build the solution that solves these real problems. </p>
                        <p class="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">NEVAM CX is the first tool to take a visual view and bring together every channel your brand markets on, in one place.</p>
                    </div>
                </div>

                <div class="col-lg-5 col-xl-5 offset-xl-1 pe-xl-3 col-12 order-2 order-lg-2">
                    <div class="block-img wow fadeInLeft" data-wow-duration="1.1s">
                        <img src="/images/placeholder.png" alt="" class="image-radius">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

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
}
.desktop-mode {
    #product-hero {
        padding: 100px 100px;
    }
}
.mobile-mode {
    #product-hero {
        padding: 50px 15px;

        img {
            margin-top: 30px;
        }
    }
}
</style>