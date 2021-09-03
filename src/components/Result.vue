<template>
<h1>Bravo !</h1>
<h3>Vos résultats</h3>
<p>Selon les informations soumises, il est plus probable que vous soyez '<strong>{{ getGravite(getMostProbable.gravite) }}</strong>' par un accident '<strong>{{ getType(getMostProbable.type) }}</strong>'.</p>

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
        result.gravite.forEach((gravite, value) => {
            sumOfGrav[gravite] += value

        })
        result.type.forEach((type, value) => {
            sumOfType[type] += value
        })
    }
    const gravSorted = Object.fromEntries(Object.entries(sumOfGrav).sort(([,a],[,b]) => a-b))
    const gravType = Object.fromEntries(Object.entries(sumOfType).sort(([,a],[,b]) => a-b))
    return { gravite: gravSorted, type: gravType }
})

const getGravite = (gravite) => {
    switch (gravite) {
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
    switch (type) {
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