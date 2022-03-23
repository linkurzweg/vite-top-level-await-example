<script setup lang="ts">
import { ref } from 'vue'
import useFetch from "@/composables/fetch";

defineProps<{ msg: string }>()

const count = ref(0)
const { data } = useFetch()
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>{{ data }}</p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
