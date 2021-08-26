<template>
<div class="card">
    <div class="card-body">
        <h2>Etape {{ step }}</h2>
        <div class="mb-3">
            <label for="name" class="form-label">Comment vous appelez-vous ?</label>
            <input type="text" class="form-control" id="name" placeholder="Nom Complet" v-model="name" />
        </div>
        <div class="mb-3">
            <label for="age" class="form-label">Quel age avez-vous ?</label>
            <input type="number" class="form-control" id="age" placeholder="Age" v-model="age" />
        </div>
        <div class="mb-3 text-right">
            <button @click="handleNext">Suivant</button>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue"
const emits = defineEmits(["next"])
defineProps({
    step: Number
})

const name = ref("")
const age = ref(18)

const handleNext = () => {
    emits("next", { name: name.value, age: age.value })
}
</script>