<template>
    <section class="callout">
        <div class="container">
            <div class="heading">
                <h2 v-if="!props.effect" v-html="props.heading"></h2>
                <h2 v-else><span v-html="props.effectPre"></span><TextEffect :id="props.effectID" :words="props.effectWords"/><span v-html="props.effectPost"></span></h2>
            </div>
            <div v-html="props.text" class="text"></div>
            <div v-if="props.button" class="button">
                <BaseButton
                    @click.prevent="store.mode == 'mobile' ? navigateTo(props.url + '/' + `?m-${props.slug}`) : navigateTo(props.url + '/' + `?d-${props.slug}`)"
                    :colour="'red'" 
                    :fullWidth="store.mode == 'mobile' ? true : false"
                >{{ props.button }}</BaseButton>
            </div>
        </div>
    </section>
</template>

<script setup>
import { baseStore } from "@/stores"
const store = baseStore()
const props = defineProps({
    heading: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
    button: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    effect: {
        type: Boolean,
        default: false
    },
    effectPre: {
        type: String,
        default: ''
    },
    effectWords: {
        type: Object,
        default: {}
    },
    effectPost: {
        type: String,
        default: ''
    },
    effectID: {
        type: Number,
        default: 0
    },
    slug: {
        type: String,
        default: ''
    }
})
onMounted(() => {
    import('./callout.scss')
})
</script>