<template>
    <section id="youtube-lazy">
        <div :class="{
            wrapper: true,
            'wrapper-desktop': store.mode == 'desktop',
            'wrapper-mobile':  store.mode == 'mobile'
        }">
            <iframe v-if="showVideo"
                :width="meta.width"
                :height="meta.height"
                :data-src="`https://www.youtube-nocookie.com/embed/${props.id}?${props.meta.specialID}&amp;controls=0`"
                :src="`https://www.youtube-nocookie.com/embed/${props.id}?${props.meta.specialID}&amp;controls=0`"
                title="YouTube video player" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
            ></iframe>
        </div>
    </section>
</template>

<script setup>
import { baseStore } from '@/stores'
const store = baseStore()
const props = defineProps({
    id: {
        type: String,
        default: ''
    },
    meta: {
        type: Object,
        default: {}
    }
})
var showVideo = ref(false)
const lazyLoadVideo = (event, element) => {
    if(element == event.detail.element) {
        event.detail.status && !showVideo.value ? showVideo.value = true : null
    }
}
onMounted(() => {
    import('./youtubeLazy.scss')
    intersectionObserver('#youtube-lazy', lazyLoadVideo)
})
</script>
