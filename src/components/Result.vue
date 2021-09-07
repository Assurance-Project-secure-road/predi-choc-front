<template>
<div class="card shadow">
<h1 class="card-title text-primary">Bravo !</h1>
<h3 class="text-primary">Vos résultats</h3>
<p>Selon les informations soumises, il est plus probable que vous soyez '<strong>{{ getGravite(getMostProbable.gravite[0][0]) }}</strong>' par un accident '<strong>{{ getType(getMostProbable.type[0][0]) }}</strong>'.</p>
</div>
</template>

<script setup>
import { computed, defineProps, toRefs } from "vue"
const props = defineProps({
    results: Object,
    sondage: Object,
})

const {results} = toRefs(props)

const getMostProbable = computed(() => {
    let sumOfGrav = {}
    let sumOfType = {}
    for (let result of results.value) {
        Object.keys(result.gravite).forEach((gravite) => {
            if (sumOfGrav[gravite] !== undefined) {
                sumOfGrav[gravite] += result.gravite[gravite]
            } else {
                sumOfGrav[gravite] = result.gravite[gravite]
            }
        })
        Object.keys(result.type).forEach((type) => {
            if (sumOfType[type] !== undefined) {
                sumOfType[type] += result.type[type]
            } else {
                sumOfType[type] = result.type[type]
            }
        })
    }
    const gravSorted = Object.entries(sumOfGrav).sort(([,a],[,b]) => b-a)
    const gravType = Object.entries(sumOfType).sort(([,a],[,b]) => b-a)
    return { gravite: gravSorted, type: gravType }
})

const getGravite = (gravite) => {
    switch (parseInt(gravite)) {
        case 1:
            return "Indemne"
        case 2:
            return "Tué"
        case 3:
            return "Blessé hospitalisé"
        case 4:
            return "Blessé léger"
    }
    return ''
}

const getType = (type) => {
    switch (parseInt(type)) {
        case 1:
            return "Deux véhicules - frontale"
        case 2:
            return "Deux véhicules - par l’arrière"
        case 3:
            return "Deux véhicules - par le côté"
        case 4:
            return "Trois véhicules et plus – en chaîne"
        case 5:
            return "Trois véhicules et plus - collisions multiples"
        case 6:
            return "Autre collision"
        case 7:
            return "Sans collision"
    }
    return ''
}
</script>