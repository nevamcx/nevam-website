<template>
  <div>
    <Modal v-if="store.$state.modal"/>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import { baseStore } from './../../store/index'
const store = baseStore()
</script>