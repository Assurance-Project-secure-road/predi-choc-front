<template>
<h1>Bravo !</h1>
<h3>Vos résultats</h3>
<ul>
    <li v-for="(result, index) in results" :key="index">{{ result.score }}</li>
</ul>
</template>

<script setup>
import { defineProps } from "vue"
defineProps({
    results: Object,
})
</script>