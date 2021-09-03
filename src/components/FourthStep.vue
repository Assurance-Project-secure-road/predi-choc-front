<template>
<div class="card">
    <div class="card-body">
        <h2>Etape {{ step }}</h2>
        <div class="mb-3">
            <label for="lumiseuse" class="form-label">
                Dans quelle condition lumiseuse avez vous l'habitude de conduire ?
            </label>
            <select id="lights" class="form-select" v-model="light">
                <option disabled value="">Etat de luminosité</option>
                <option value="1">Plein jour</option>
                <option value="2">Crépuscule ou aube</option>
                <option value="3">Nuit sans éclairage public</option>
                <option value="4">Nuit avec éclairage public non allumé</option>
                <option value="5">Nuit avec éclairage public allumé</option>
            </select>
            </div>
        <div class="mb-3">
            <label for="TypeMeteo" class="form-label">
                Sous quelle condition météo avez-vous l’habitude de conduire ?
            </label>
            <div class="form-check" v-for="(typeMeteo, i) in typesMeteo" :key="'meteo_'+i">
                <input class="form-check-input" type="checkbox" :value="i+1" :id="'meteo_' + i" v-model="meteoSelected">
                <label class="form-check-label" :for="'meteo_' + i">
                    {{ typeMeteo }}
                </label>
            </div>
        </div>
        <div class="mb-3">
            <label for="motifDeplace" class="form-label">
                Quel type de trajet faites-vous le plus avec votre véhicule?
            </label>
            <select class="form-select" aria-label="Default" id="motifDeplace" v-model="motifDeplace">
                <option disabled value="">Choisissez un type ...</option>
                <option v-for="(motif, k) in lsMotifDeplacement" :value="k+1" :key="'deplacement_' + k"> 
                    {{ motif }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="departementsVoyage" class="form-label">
                Avez vous l'habitude de voyager dans d'autres departement ?
            </label>
            <div class="row">
                <div class="form-check col-2" v-for="(dpt, i) in departement" :key="'departement_'+i">
                    <input class="form-check-input" type="checkbox" :value="i+1" :id="'departement_' + i" v-model="departementSelected">
                    <label class="form-check-label" :for="'departement_' + i">
                        {{ dpt.departmentName }}
                    </label>
                </div>
            </div>
        </div>
         <div class="mb-3 text-right">

            <button  type="button" class="btn btn-success" @click="handleNext">Envoyer</button>
        </div>
    </div>
</div>
</template>


<script setup>
import { ref, defineEmits, defineProps } from "vue"
import { createToast } from 'mosha-vue-toastify'
import departement from "@/assets/departments_FR.json"
import 'mosha-vue-toastify/dist/style.css'
const emits = defineEmits(["next"])
defineProps({
    step: Number
})

const typesMeteo = [
    "1 - Normale",
    "2 - Pluie légère",
    "3 - Pluie forte",
    "4 - Neige - grêle",
    "5 - Brouillard - fumée",
    "6 - Vent fort - tempête",
    "7 - Temps éblouissant",
    "8 - Temps couvert",
    "9 - Autre ",
]
const lsMotifDeplacement = [
    "1 – Domicile – travail",
    "2 – Domicile – école",
    "3 – Courses – achats",
    "4 – Utilisation professionnelle",
    "5 – Promenade – loisirs",
    "9 – Autre", 
]

const light =  ref("")
const meteoSelected = ref([])
const motifDeplace = ref("")
const departementSelected =  ref([])

const checkForm = () => light.value !== "" && meteoSelected.value.length > 0 && motifDeplace.value !== "" && departementSelected.value !== ""

const handleNext = () => {
    if (!checkForm()) {
        createToast({title: "Veuillez remplir tout le formulaire !"} , { type: "danger" })
        return
    }
    emits("next", { 
        "Lumiere_Acc": light.value, 
        "Meteo_Acc": meteoSelected.value, 
        "Motif_Deplacer_Usager": parseInt(motifDeplace.value), 
        "Departement_Acc": departementSelected.value })
}
</script>