<template>
<div class="card">
    <div class="card-body">
        <h2>Etape {{ step }}</h2>
        <div class="mb-3">
            <label for="lumiseuse" class="form-label">
                Dans quelle condition lumiseuse avez vous l'habitude de conduire ?
            </label>
            <select id="lights" class="form-select" v-model="light">
                <option disabled value>Etat de luminosité</option>
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
                <option v-for="(motif, k) in lsMotifDeplacement" :value="k+1" :key="'deplacement_' + k"> 
                    {{ motif.split(' - ')[1] }}
                </option>
            </select>
        </div>
        <!--liste de departemnt récuperé d'Anthony-->
         <div class="mb-3">
            <label for="departementsVoyage" class="form-label">
                Avez vous l'habitude de voyager dans d'autres departement ?
            </label>
           
        </div>
         <div class="mb-3 text-right">
            <button @click="handleNext">Envoyer</button>
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

typesMeteo = [
    "1 – Normale",
    "2 – Pluie légère",
    "3 – Pluie forte",
    "4 – Neige - grêle",
    "5 – Brouillard - fumée",
    "6 – Vent fort - tempête",
    "7 – Temps éblouissant",
    "8 – Temps couvert",
    "9 – Autre ",
]
lsMotifDeplacement = [
    "1 – Domicile – travail",
    "2 – Domicile – école",
    "3 – Courses – achats",
    "4 – Utilisation professionnelle",
    "5 – Promenade – loisirs",
    "9 – Autre", 
]

const light =  ref(NaN)
const meteoSelected = ref([])
const motifDeplace = ref(NaN)
const departementVoyage =  ref([])


const handleNext = () => {
    emits("next", { 
        light: light.value, 
        meteoSelected: meteoSelected.value, 
        motifDeplace: parseInt(motifDeplace.value), 
        departementVoyage: departementVoyage.value })
}
</script>