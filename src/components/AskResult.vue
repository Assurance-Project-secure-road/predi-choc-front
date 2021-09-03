<template>
<div class="card">
    <div class="card-body">
        <h1>Informations</h1>
        <p>Les données que vous allez soumettre ne seront pas stockées dans notre base de données mais seront traîtées par nos algorithmes d'intelligence artificielle afin de pouvoir vous donner une réponse.</p>
        <p>En cliquant sur le bouton <em>Envoyer</em>, vous acceptez ces conditions d'utilisation.</p>
        <button class="btn btn-success" @click.prevent="handleSubmit" :disabled="isButtonDisabled">Envoyer</button>
    </div>
</div>
</template>
<script setup>
import { defineEmits, defineProps, toRefs, computed, ref } from "vue"
const props = defineProps({
    step: Number,
    disabled: Boolean,
})

const { disabled } = toRefs(props)
const disabledButton = ref(false)

const emits = defineEmits(["submit"])

const handleSubmit = () => {
    disabledButton.value = true;
    emits("submit")
    disabledButton.value = false;
}

const isButtonDisabled = computed(() => disabled.value || disabledButton.value  )
</script>