<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'

const dark = ref(false)

useHead({
  htmlAttrs: {
    class: () => dark.value ? 'dark' : '',
  },
})
</script>

<template>
  <div class="p-4">
    <h1>Playground</h1>
    <div>
      <button class="btn btn-primary">
        Button @apply
      </button>
      <button class="btn btn-primary-theme">
        Button theme()
      </button>
      <button class="btn btn-primary-token-theme">
        Button theme() with token
      </button>
    </div>
    <label>
      Dark mode
      <input v-model="dark" type="checkbox">
    </label>
  </div>
</template>

<style>
.btn {
  padding: 4px 8px;
  border-radius: 4px;
}

.btn-primary {
  --at-apply: bg-primary text-white;
}

.btn-primary-theme {
  background: theme('colors.primary');
}

.btn-primary-token-theme {
  background: theme('colors.button.primary');
}
</style>
