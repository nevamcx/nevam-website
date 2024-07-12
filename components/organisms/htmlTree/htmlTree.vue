<template>
  <div id="tree">
    <htmlTreeNode :node="props.data" />
  </div>
</template>

<script setup lang="ts">
import { baseStore } from "@/stores";
const store = baseStore();

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
});

const addDepth = async () => {
  const elements = document.querySelectorAll(".card");
  await new Promise((resolve) => setTimeout(resolve, 0)); // weird fix to get ID's below
  var count = 0;
  Array.from(elements).forEach((element) => {
    element.classList.add(`depth-${count}`);
    count = count + 1;
  });
};

onMounted(async () => {
  await addDepth();
});
</script>

<style scoped>
#tree {
  display: inline-block;
  padding: 10px;
}

#tree * {
  box-sizing: border-box;
}
</style>
