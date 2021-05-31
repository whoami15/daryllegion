<template>
  <h1>{{ msg }}</h1>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})
</script>
