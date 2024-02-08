<template>
    <div class="modal">
        <div class="background" @click="closeModal()"></div>
        <div class="video">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/eiW7rY_PPdo?si=JqzjBX44lUMK-EJb&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script setup>
import { baseStore } from './../../store/index'
const store = baseStore()

const closeModal = () => {
    store.$patch({ modal: false })
}
</script>

<style scoped>
.modal {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    text-align: center;
    top: 0;
    width: 100%;
    z-index: 999;
}
.background {
    background: #000;
    bottom: 0;
    left: 0;
    opacity: 0.8;
    position: absolute;
    right: 0;
    top: 0;
}
.video {
    position: absolute;
}
</style>