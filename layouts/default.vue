<template>

  <LoadingSpinner :status="store.$state.spinner" />
  <main class="main-page" id="main-page" :class="store.$state.spinner ? 'z-index-0' : ''">
    <Menu />  
    <slot />
    <Footer />
  </main>

</template>
  
<script setup>
import { baseStore } from '@/stores'
const store = baseStore()
const route = useRoute()
const props = defineProps({
  error: Object
})

const setMobileDeviceType = () => {
  if (/(iphone)/i.test(navigator.userAgent)) {
    return [
      store.$patch({ mobile_device_type: 'iphone' }),
      stopPinchZoom()
    ]
  }
  if (/(android)/i.test(navigator.userAgent)) {
    return store.$patch({ mobile_device_type: 'android' })
  }
  else {
    return store.$patch({ mode: 'desktop' })
  }
}
const stopPinchZoom = () => {
  document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) { event.preventDefault() }
  }, { passive: false })
}
const addResponsiveClasses = () => {
  var current_width = document.body.clientWidth
  let body = document.querySelector('body')
  // small mobile
  if (current_width <= 375) {
    body.classList.add('mobile-mode', 'mobile-small')
    store.$patch({ mode: 'mobile' }),
    store.$patch({ small_mobile: true })
  }
  // regular mobile
  else if (current_width < 575) {
    body.classList.add('mobile-mode', 'mobile-regular')
    store.$patch({ mode: 'mobile' })
  }
  // large mobile
  else if (current_width < 767) {
    body.classList.add('mobile-mode', 'mobile-large')
    store.$patch({ mode: 'mobile' })
  }
  // tablet
  else if (current_width < 991) {
    body.classList.add('tablet-mode')
    store.$patch({ mode: 'tablet' })
  }
  // small laptop (13 inch)
  else if (current_width < 1500) {
    body.classList.add('desktop-mode', 'laptop-small')
    store.$patch({ mode: 'desktop' })
  }
  // large laptop (15 inch)
  else if (current_width < 1750) {
    body.classList.add('desktop-mode', 'laptop-large')
    store.$patch({ mode: 'desktop' })
  }
  // large desktop (external monitor)
  else {
    body.classList.add('desktop-mode', 'desktop-large')
    store.$patch({ mode: 'desktop' })
  }
}

const setPrice = () => {
  if(route.query.ecirp == 'v1') {
    store.$patch({ price: store.$state.priceA })
  }
  if(route.query.ecirp == 'v2') {
    store.$patch({ price: store.$state.priceB })
  }
}

onMounted(() => {
  setPrice()
  setMobileDeviceType()
  addResponsiveClasses()
})
</script>

<style>
.z-index-0 {
  position: relative;
  z-index: 0;
}
</style>

<style lang="scss">
@import './../style/_variables.scss';
@import './../style/style.scss';
</style>