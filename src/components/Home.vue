<template>
<div class="antialiased flex h-screen justify-center items-center bg-gray-100">
    <div class="text-center">
      <h1 class="font-mono font-semibold lg:text-5xl sm:text-3xl text-3xl tracking-wide uppercase text-gray-800">{{ msg }}</h1>
      <p class="font-mono text-gray-500 font-semibold tracking-wide">&copy; 2021</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})
</script>
