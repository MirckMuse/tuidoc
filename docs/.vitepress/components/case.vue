<template>
  <div class="border border-gray-300 rounded-sm">
    <div class="exhibition p-3">
      <slot name="case"></slot>
    </div>
    <div v-if="isCodeDescVisible" class="p-3 border-t border-gray-300">
      <slot name="code-desc"></slot>
    </div>
    <div v-if="isCodeVisible" class="code px-3 border-t border-gray-300 language-">
      <slot name="code"></slot>
    </div>
    <div class="extend border-t border-gray-300 p-3 flex justify-center cursor-pointer" @click="toggleCodeExtend">
      <span v-if="isCodeVisible" class="hover:text-blue-500">&#8657;</span>
      <span v-else class="hover:text-blue-500">&#8659;</span>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, computed} from 'vue'

export default {
  name: "ComponentCase",
  props: {},
  setup(props, {slots}) {
    const isCodeExtend = ref(false)
    const isCodeVisible = computed(() => slots.code && isCodeExtend.value)
    const toggleCodeExtend = () => {
      isCodeExtend.value = !isCodeExtend.value
    }

    const isCodeDescVisible = computed(() => slots['code-desc'] && isCodeVisible.value)
    return {
      isCodeVisible,
      toggleCodeExtend,

      isCodeDescVisible
    }
  }
}
</script>

<style scoped>
.language- {
  margin: 0;
  border-radius: 0;
}
</style>
