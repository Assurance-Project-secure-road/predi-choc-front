<template>
    <div class="card">
        <div class="card-body">
            <h1 class="card-title text-primary">Etape {{ step }}</h1>

            <div class="mb-3">
                <label for="genre" class="form-label">Quel est votre genre ?</label>

                <select class="form-select" id="genre" v-model="genre">
                    <option disabled value="">Choix du genre</option>
                    <option value="1">Homme</option>
                    <option value="2">Femme</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="age" class="form-label">Quel age avez-vous ?</label>
                <input type="number" class="form-control" id="age" placeholder="Age" min="18" max="150" v-model="age" />
            </div>

            <div class="mb-3">
                <label for="departement" class="form-label">Selectionner votre département</label>

                <select class="form-select" id="departement" v-model="departement">
                    <option disabled value="">Liste de départements</option>
                    <option
                        :value="dpt.departmentCode.replace(/^0*/, '')"
                        v-for="dpt in departements"
                        :key="'dpt_'+dpt.departmentCode"
                    >{{ dpt.departmentCode }} - {{ dpt.departmentName }}</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="equipment" class="form-label">Utilisez-vous les équipements de protection ?</label>

                <select class="form-select" id="equipment" name="equipment" v-model="equipment">
                    <option disabled value="">Choix des équipements</option>
                    <option value="0">Aucun équipement</option>
                    <option value="1">Ceinture</option>
                    <option value="2">Casque</option>
                    <option value="3">Dispositif enfants</option>
                    <option value="4">Gilet réfléchissant</option>
                    <option value="5">Airbag (2RM/3RM)</option>
                    <option value="6">Gants (2RM/3RM)</option>
                    <option value="7">Gants + Airbag (2RM/3RM)</option>
                    <option value="8">Non déterminable</option>
                    <option value="9">Autre</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="speed" class="form-label">Vivez-vous en ville ou en campagne ou à la montagne ? ?</label>

                <select class="form-select" id="speed" name="speed" v-model="speed">
                    <option value="50">Ville</option>
                    <option value="30">Campagne</option>
                    <option value="80">Montagne</option>
                </select>
            </div>
            <div class="mb-3 text-end">
                <button @click="handleNext" class="btn btn-primary">Suivant</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import departements from "@/assets/departments_FR.json"

import { createToast } from 'mosha-vue-toastify'
import { ref, defineEmits, defineProps } from "vue"
import 'mosha-vue-toastify/dist/style.css'
const emits = defineEmits(["next"])
defineProps({
    step: Number
})

const age = ref(18)
const genre = ref("")
const departement = ref("")
const equipment = ref("")
const speed = ref(50)

const checkForm = () => age.value >= 18 && genre.value !== "" && departement.value !== "" && equipment.value !== "" && speed.value != ""

const handleNext = () => {
    if (!checkForm()) {
        createToast({title: "Veuillez remplir tout le formulaire !"} , { type: "danger" })
        return
    }
    emits("next", { "Sexe_Usager": parseInt(genre.value), "Age": parseInt(age.value), "Departement_Acc": departement.value, "Equipement_Secu_Usager": parseInt(equipment.value), "Vitesse_max_Route": speed.value })
}
</script>