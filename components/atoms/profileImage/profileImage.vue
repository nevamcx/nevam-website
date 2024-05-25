<template>
    <section class="profile-image">
        <div class="circle">
            <img :src="props.image" />
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        default: '',
    }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/_variables.scss';

.circle {
  margin-top: 50px;
  height: 200px;

  img {
    border-radius: 100%;
    width: 200px;
  }
}
</style>