<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 transition-colors border-2 border-orange-600 rounded hover:bg-orange-500 hover:text-white"
    ><slot> Youtube </slot>
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
