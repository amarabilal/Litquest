<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()

const hovered = ref<number | null>(null)

const rate = (value: number) => {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="flex gap-1">
    <button
      v-for="n in 5"
      :key="n"
      type="button"
      role="button"
      class="text-xl sm:text-2xl focus:outline-none transition-colors duration-200"
      :class="{
        'text-amber-400': hovered !== null ? n <= hovered : n <= modelValue,
        'text-gray-300 dark:text-gray-600 hover:text-amber-400': hovered === null ? n > modelValue : n > hovered
      }"
      @click="rate(n)"
      @mouseover="hovered = n"
      @mouseleave="hovered = null"
      :aria-label="`${n} étoile${n > 1 ? 's' : ''}`"
    >
      ★
    </button>
  </div>
</template>
