<template>
    <div class="row testimonial-row">
        <div :class="getClassesA()">
            <img 
                :src="props.image"
                :alt="`Picture of our client - ${props.name}`"
                class="image-radius"
                :class="{
                    image: true,
                    round: store.mode == 'mobile'
                }"
            />
        </div>
        <div :class="getClassesB()">

            <div class="text-1">
                <h2 :class="`name d-inline ${props.longName ? 'smaller-font' : ''}`">{{ props.name }}</h2>
                <a :href="props.linkedin" target="_blank" class="linkedin d-inline" :aria-label="`LinkedIn profile for ${props.name}`"><i class="fab fa-linkedin social-icon"></i></a>
            </div>

            <div class="text-2">
                <h4 class="name d-inline">{{ props.role }},&nbsp&nbsp</h4>
                <h4 class="name d-inline">{{ props.company }}</h4>
            </div>

            <span class="inverted-comma before"></span>
            <div class="description" v-html="props.description"></div>
            <span class="inverted-comma after"></span>

        </div>
    </div>
</template>

<script setup>
import { baseStore } from '@/stores'
const store = baseStore()

const props = defineProps({
    name: {
        type: String,
        default: ''
    },
    longName: {
        type: Boolean,
        default: false
    },
    company: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: ''
    },
    linkedin: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    position: {
        type: String,
        default: ''
    },
})

const getClassesA = () => {
    if(store.mode == 'desktop' && props.position == 'left') {
        return 'col-xl-5 pe-lg-0 col-lg-5 col-12 order-1'
    }
    if(store.mode == 'desktop' && props.position == 'right') {
        return 'col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5 order-2'
    }
    if(store.mode == 'mobile') {
        return 'col-xl-5 pe-lg-0 col-lg-5 col-12'
    }
}

const getClassesB = () => {
    if(store.mode == 'desktop' && props.position == 'left') {
        return  'col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5 order-2'
    }
    if(store.mode == 'desktop' && props.position == 'right') {
        return 'col-xl-5 pe-lg-0 col-lg-5 col-12 order-1'
    }
    if(store.mode == 'mobile') {
        return 'col-xl-6 col-lg-7 offset-xl-1 col-12 ps-lg-5 pe-xl-5'
    }
}
</script>

<style lang="scss">
@import '~/assets/style/_variables.scss';
.testimonial-card {

    .text-1 .linkedin i {
        font-size: 30px;
        margin-left: 30px;
        position: relative;
        bottom: 2px;
    }

    .text-2 h4 {
        color: $grayDark;
    }

    .description {
        display: inline;
    }

    .inverted-comma {

        height: 80px;
        width: 80px;
        
        background-repeat: no-repeat;
        background-image: url('/images/inverted-comma.svg');
        color: $grayLight;
    }

    img.image {

        &.round {
            -webkit-clip-path: circle(50% at 50% 50%);
            clip-path: circle(50% at 50% 50%);
        }
    }
}
.desktop-mode {

    .testimonial-card {

        .testimonial-row {
            margin-top: 30px;
            margin-bottom: 150px;
        }
        .text-1 {
            margin-bottom: 10px;
        }
        .text-2 {
            margin-bottom: 70px;
        }
        .inverted-comma {

            &.before {
                position: absolute;
                transform: scaleX(-1) scaleY(-1);
                margin-left: -90px;
                margin-top: -60px;
            }

            &.after {
                position: relative;
                float: right;
                top: -5px;
            }
        }
        img {
            width: 500px;
            height: auto;
        }
    }
}
.mobile-mode {

    .testimonial-card {

        .testimonial-row {
            margin-top: 50px;
            margin-bottom: 70px;
        }
        i.social-icon {
            bottom: 0px !important;
            margin-left: 20px;
        }
        .text-1 {
            margin-top: 30px;
        }
        .text-2 {
            margin-bottom: 10px;
        }
        .smaller-font {
            font-size: 26px;
        }
        .inverted-comma {

            &.before {
                transform: scaleX(-0.8) scaleY(-0.8);
                margin-left: -25px;
                margin-top: -10px;
                display: block;
            }

            &.after {
                position: relative;
                float: right;
                top: -5px;
            }
        }
    }
}
</style>