<template>
    <section id="product-hero" class="content-block section-padding section-bg">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-8 order-1 left">
                    <div class="block-contents ms-xl-3 mt-lg-0">
                        <div class="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                            <h1>When to reach out:</h1>
                        </div>
                        <table>
                            <tr class="list-item" v-for="(item, itemIndex) in items" :key="itemIndex">
                                <td class="circle">
                                    <div class="number">
                                        {{ itemIndex + 1 }}
                                    </div>
                                </td>
                                <td class="text">{{ item }}</td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="col-4 order-2 right">
                    <div class="block-img wow fadeInLeft" data-wow-duration="1.1s">
                        <img src="/images/report.png" alt="A placeholder image" class="image-radius">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const items = [
    "don't know what your customer experience looks like",
    "aren't sure where or why you are losing customers",
    "don't trust your data or don't know what to do with it",
    "you're rebranding and need to make sure you cover all of your basis",
    "launching a new product and want to make it as effective as possible",
    "are thinking about implementing new software",
    "need support with priority and alignment on what to focus on"
]
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
    }
}
</style>