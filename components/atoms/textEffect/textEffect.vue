<template>
    <span class="text-effect-wrapper">
        <span class="text-effect" :id="`text-effect-${props.id}`"></span>
        <span class="input-cursor"></span>
    </span>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    words: {
        type: Object,
        default: {},
    },
    id: {
        type: Number,
        default: 0
    }
})

onMounted(() => {

    const typeSentence = async (sentence, eleRef, delay = 100) => {
        const letters = sentence.split('')
        let i = 0
        while (i < letters.length) {
            await waitForMs(delay)
            eleRef.append(letters[i])
            i++
        }
        return
    }

    const deleteSentence = async (eleRef) => {
        const sentence = eleRef.innerHTML
        const letters = sentence.split('')
        while (letters.length > 0) {
            await waitForMs(100)
            letters.pop()
            eleRef.innerHTML = (letters.join(''))
        }
    }

    const carousel = async (carouselList, eleRef) => {
        var i = 0
        while (true) {
            await typeSentence(carouselList[i].text, eleRef)
            await waitForMs(1500)
            await deleteSentence(eleRef)
            await waitForMs(500)
            i++
            if (i >= carouselList.length) { i = 0 }
        }
    }

    const waitForMs = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const element = document.getElementById(`text-effect-${props.id}`)
    carousel(props.words, element)
})
</script>

<style scoped lang="scss">
#text-effect {
    color: #0075e1;
}

.desktop-mode {
    .text-effect {
        position: relative;
        bottom: 40px;
    }

    .callout {
        .text-effect {
            position: relative;
            bottom: 0px;
        }
        .input-cursor {
            top: 15px;
            width: 6px;
            height: 65px;
            margin-left: 12px;
            margin-top: -10px;
        }
    }
}
.mobile-mode {
    .text-effect {
        position: relative;
        bottom: 20px;
    }

    .callout {
        .text-effect {
            position: relative;
            bottom: 0px;
        }
        .input-cursor {
            top: 10px;
            width: 4px;
            height: 45px;
            margin-left: 5px;
            margin-top: -10px;
        }
    }
}
.input-cursor {
    display: inline-block;
    position: relative;
    background-color: #ffffff;
    margin-left: 3px;
    animation: blink .4s linear infinite alternate !important;
}
@keyframes blink {
    0% {opacity: 1;}
    50% {opacity: 0.50;}
    100% {opacity: 0;}
}
</style>