<template>
  <button
    class="Button"
    :class="{
      'Button-primary': theme === 'primary',
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: true,
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'primary',
    },
  },
})
</script>

<style scoped>
.Button {
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  appearance: none;
  -webkit-appearance: none;
  border: 0;
}

.Button-primary {
  color: #fff;
  background: #1e9cf0;
}
</style>
