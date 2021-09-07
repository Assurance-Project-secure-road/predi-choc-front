<template>
<div class="card mb-3">
    <div class="card-body">
        <h1 class="card-title">Bienvenue sur PrediChoc !</h1>
        <p>
            Afin de pouvoir prédire la gravité et le type d'un accident dont vous seriez victime, nous allons avoir besoin que vous remplissiez un questionnaire assez court.<br>
        </p>
        <p class="text-end">
            <router-link to="/about-ia" class="btn btn-outline-primary">En savoir plus</router-link>
        </p>
        <div class="text-center">
            <button class="btn btn-success" @click.prevent="next">Commencer</button>
        </div>
    </div>
</div>
</template>

<script setup>
import { defineEmits } from "vue"
const emits = defineEmits(["next"])
const next = () => {
    emits("next", {})
}
</script>