<template>
<div class="card">
    <div class="card-body">
        <h2>Etape {{ step }}</h2>
        <div class="mb-3">
            <label for="TypeMeteo" class="form-label">Sous quelle condition météo avez-vous l’habitude de conduire ?</label>
            <div class="form-check" v-for="(typeMeteo, i) in typesMeteo" :key="'meteo_'+i">
                <input class="form-check-input" type="checkbox" :value="i+1" :id="'meteo_' + i" v-model="meteoSelected">
                <label class="form-check-label" :for="'meteo_' + i">
                    {{ typeMeteo }}
                </label>
            </div>
        </div>
        <div class="mb-3">
            <label for="motifDeplace" class="form-label">Quel type de trajet faites-vous le plus avec votre véhicule?</label>
            <select class="form-select" aria-label="Default" id="motifDeplace" v-model="motifDeplace">
                <option value="" selected>Choisissez un motif de deplacement</option>
                <option value="1">Domicile – travail</option>
                <option value="2">Domicile – école</option>
                <option value="3">Courses – achats</option>
                <option value="4">Utilisation professionnelle</option>
                <option value="5">Promenade – loisirs</option>
                <option value="9">Autre</option>
            </select>
        </div>
         <div class="mb-3">
            <label for="motifDeplace" class="form-label">Avez vous l'habitude de voyager dans d'autres departement ?</label>
           
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


const meteoSelected = ref([])
const motifDeplace = ref("")


const handleNext = () => {
    emits("next", { meteoSelected: meteoSelected.value, motifDeplace: parseInt(motifDeplace.value), typeMotorVeh: typeMotorVeh.value })
}
</script>