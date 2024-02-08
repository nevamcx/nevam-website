<template>
    <section class="benefits" id="benefits">
        <div class="container">
            <div class="items">
                <div class="item" v-for="(item, itemIndex) in items" :key="itemIndex">
                    <i class="icon fad fa-check"></i>
                    <div class="text" v-html="item"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: []
    }
})
onMounted(() => {
    import('./benefits.scss')
})
</script>