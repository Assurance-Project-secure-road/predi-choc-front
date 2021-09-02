<template>
    <div class="card">
        <div class="card-body">
            <h2>Etape {{ step }}</h2>

            <div class="mb-3">
                <label for="age" class="form-label">Quel est votre genre ?</label>

                <select class="form-select" aria-label="Default select example">
                    <option disabled>Choix du genre</option>
                    <option value="1">Homme</option>
                    <option value="2">Femme</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="age" class="form-label">Quel age avez-vous ?</label>
                <input type="number" class="form-control" id="age" placeholder="Age" v-model="age" />
            </div>

            <div class="mb-3">
                <label for="age" class="form-label">Selectionner votre département</label>

                <select class="form-select" aria-label="Default select example">
                    <option disabled>Liste de départements</option>
                    <option
                        :value="dpt.departmentCode"
                        v-for="dpt in departement"
                        :key="dpt.departmentCode"
                    >{{ dpt.departmentCode }} - {{ dpt.departmentName }}</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="age" class="form-label">Utilisez-vous les équipements de protection ?</label>

                <select class="form-select" aria-label="Default select example">
                    <option disabled>Choix des équipements</option>
                    <option value="0">0 - Aucun équipement</option>
                    <option value="1">1 - Ceinture</option>
                    <option value="2">2 - Casque</option>
                    <option value="3">3 - Dispositif enfants</option>
                    <option value="4">4 - Gilet réfléchissant</option>
                    <option value="5">5 - Airbag (2RM/3RM)</option>
                    <option value="6">6 - Gants (2RM/3RM)</option>
                    <option value="7">7 - Gants + Airbag (2RM/3RM)</option>
                    <option value="8">8 - Non déterminable</option>
                    <option value="9">9 - Autre</option>
                </select>
            </div>

            

            <div class="mb-3 text-right">
                <button @click="handleNext">Suivant</button>
            </div>
        </div>
    </div>
</template>

<script setup>

import departement from "@/assets/departments_FR.json"



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