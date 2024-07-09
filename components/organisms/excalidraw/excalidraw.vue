<template>
    <ClientOnly>
        <div ref="reactRef" id="excalidraw-react" class="fixed top-0 left-0 w-full h-full"></div>
    </ClientOnly>
</template>

<script setup>
const reactRef = ref(null)

const mountExcalidraw = () => {
    const { $excalidraw } = useNuxtApp()
    if ($excalidraw) {
        const { createElement, createRoot, Excalidraw } = $excalidraw
        requestAnimationFrame(() => {
            const el = reactRef.value
            const root = createRoot(el)
            root.render(createElement(Excalidraw, {}, null))
        })
    }
}

onMounted(() => {
    mountExcalidraw()
})
</script>

<style>
/* fixes */
#__nuxt,
#excalidraw-react,
.main-page {
    width: 100%;
    height: 100%;
}
.App-menu_top__left .dropdown-menu {
    display: block !important;
    margin-top: 5px;
    padding: 0px;
}
.excalidraw .popover {
  padding: 0px !important;
}
.excalidraw .popover ul.context-menu {
    margin: 0px;
}
</style>