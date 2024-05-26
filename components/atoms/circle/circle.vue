<template>
    <section class="circle-wrapper">
        <div class="circle">
            <div class="content">{{ props.content }}</div>
        </div>  
        <div class="description">{{ props.description }}</div>
    </section>
</template>

<script setup>
const props = defineProps({
    content: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
    }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/_variables.scss';

.circle-wrapper {
  text-align: center;
  width: 200px;
}

.circle {
  margin-top: 50px;
  border: 6px solid $cco-green-1;
  border-radius: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle-wrapper .content {
    color: $cco-teal-1;
    font-size: 65px;
    border: 6px solid $cco-teal-1;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 188px;
    height: 188px;
    border-radius: 100%;
}

.circle-wrapper .description {
  font-size: 30px;
  margin-top: 30px;
  color: $grayDark;
}

.mobile-mode {
    .circle-wrapper {
        text-align: center;
        width: 135px;

        .content {
            font-size: 45px;
            width: 123px;
            height: 123px;
        }

        .description {
            font-size: 20px;
            margin-top: 10px;
        }
    }
    .circle {
        height: 135px;
    }
}
</style>