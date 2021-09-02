<template>
    <div class="card">
        <div class="card-body">
            <h2>Etape {{ step }}</h2>
            <div class="mb-3">
                <label
                    for="regime_circulation"
                    class="form-label"
                >Quel régime de circulation en général ?</label>
                <select class="form-select" id="regime_circulation" v-model="regimeCirculation">
                    <option disabled value>Type de route</option>
                    <option value="1">Route à sens unique</option>
                    <option value="2">Route bidirectionelle</option>
                    <option value="3">Route à chaussées séparées</option>
                    <option value="4">Route avec voies d'affectation variable</option>
                </select>
            </div>
            <div class="mb-3">
                <label
                    for="nb_voie_route"
                    class="form-label"
                >Avez-vous l’habitude d’emprunter des routes étroites ou larges ?</label>
                <input
                    type="number"
                    class="form-control"
                    id="nb_voie_route"
                    min="1"
                    max="12"
                    placeholder="Nombre de voies"
                    v-model="nbVoieRoute"
                />
            </div>
            <div class="row">
                <div class="col mb-3">
                    <label
                        for="surface"
                        class="form-label"
                    >Sur quelle surface avez-vous l’habitude de conduire ?</label>
                    <div
                        class="form-check form-switch"
                        v-for="(surface, i) in surfaces"
                        :key="'surf_' + i"
                    >
                        <input
                            class="form-check-input"
                            type="checkbox"
                            :value="i + 1"
                            :id="'surf_' + i"
                            v-model="selectedSurfaces"
                        />
                        <label class="form-check-label" :for="'surf_' + i">{{ surface }}</label>
                    </div>
                </div>
                <div class="col mb-3">
                    <label
                        for="name"
                        class="form-label"
                    >Quels mois avez-vous pour habitude de partir en vacances ?</label>
                    <div
                        class="form-check form-switch"
                        v-for="(month, i) in months"
                        :key="'month_' + i"
                    >
                        <input
                            class="form-check-input"
                            type="checkbox"
                            :value="i + 1"
                            :id="'month_' + i"
                            v-model="selectedMonths"
                        />
                        <label class="form-check-label" :for="'month_' + i">{{ month }}</label>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Comment partez-vous en vacances ?</label>
                <div
                    class="form-check form-switch"
                    v-for="(typeCar, i) in typeCars"
                    :key="'type_' + i"
                >
                    <input
                        class="form-check-input"
                        type="checkbox"
                        :value="parseInt(typeCar.split(' - ')[0])"
                        :id="'type_' + i"
                        v-model="selectedCars"
                    />
                    <label class="form-check-label" :for="'type_' + i">{{ typeCar }}</label>
                </div>
            </div>
            <div class="mb-3 text-right">
                <button type="button" class="btn btn-primary" @click="handleNext">Suivant</button>
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

const nbVoieRoute = ref(1)
const regimeCirculation = ref(NaN)
const selectedSurfaces = ref([])
const selectedMonths = ref([])
const selectedCars = ref([])

const surfaces = ["Normale", "Mouillée", "Flaques", "Inondée", "Enneigée", "Boue", "Verglas", "Corps Gras"]
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]
const typeCars = [
    "00 – Indéterminable",
    "01 – Bicyclette",
    "02 – Cyclomoteur <50cm3",
    "03 – Voiturette (Quadricycle à moteur carrossé) (anciennement voiturette ou tricycle à moteur)",
    "04 – Référence inutilisée depuis 2006 (scooter immatriculé)",
    "05 – Référence inutilisée depuis 2006 (motocyclette)",
    "06 – Référence inutilisée depuis 2006 (side-car)",
    "07 – VL seul",
    "08 – Référence inutilisée depuis 2006 (VL + caravane)",
    "09 – Référence inutilisée depuis 2006 (VL + remorque)",
    "10 – VU seul 1,5T <= PTAC <= 3,5T avec ou sans remorque (anciennement VU seul 1,5T <= PTAC <= 3,5T)",
    "11 – Référence inutilisée depuis 2006 (VU (10) + caravane)",
    "12 – Référence inutilisée depuis 2006 (VU (10) + remorque)",
    "13 – PL seul 3,5T <PTCA <= 7,5T",
    "14 – PL seul > 7,5T",
    "15 – PL > 3,5T + remorque",
    "16 – Tracteur routier seul",
    "17 – Tracteur routier + semi-remorque",
    "18 – Référence inutilisée depuis 2006 (transport en commun)",
    "19 – Référence inutilisée depuis 2006 (tramway)",
    "20 – Engin spécial",
    "21 – Tracteur agricole",
    "30 – Scooter < 50 cm3",
    "31 – Motocyclette > 50 cm3 et <= 125 cm3",
    "32 – Scooter > 50 cm3 et <= 125 cm3",
    "33 – Motocyclette > 125 cm3",
    "34 – Scooter > 125 cm3",
    "35 – Quad léger <= 50 cm3 (Quadricycle à moteur non carrossé)",
    "36 – Quad lourd > 50 cm3 (Quadricycle à moteur non carrossé)",
    "37 – Autobus",
    "38 – Autocar",
    "39 – Train",
    "40 – Tramway",
    "41 – 3RM <= 50 cm3",
    "42 – 3RM > 50 cm3 <= 125 cm3",
    "43 – 3RM > 125 cm3",
    "50 – EDP à moteur",
    "60 – EDP sans moteur",
    "80 – VAE",
    "99 – Autre véhicule",
]

const handleNext = () => {
    emits("next", { Nb_voie_Route: nbVoieRoute.value, Categorie_Route: regimeCirculation.value, selectedSurfaces: selectedSurfaces.value, selectedMonths: selectedMonths.value, selectedCars: selectedCars.value })
}
</script>