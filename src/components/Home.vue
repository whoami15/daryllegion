<template>
<div class="flex h-screen justify-center items-center bg-gray-100">
    <div class="text-center">
      <h1 class="font-mono font-semibold antialiased lg:text-5xl sm:text-3xl text-3xl text-gray-800">{{ msg }}</h1>
      <p class="font-mono text-gray-700 font-medium">&copy; 2021</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})
</script>
