<template>
<div class="card">
    <div class="card-body">
        <h2>Etape {{ step }}</h2>
        <div class="mb-3">
            <label for="cat_vahicule" class="form-label">Quel véhicule avez-vous ?</label>
             <select class="form-select" aria-label="Default" id="cat_veh" v-model="catVehicule">
                <option disabled value="">Choisissez-vous un véhicule </option>
                <option value="0">Indéterminable</option>
                <option value="1">Bicyclette</option>
                <option value="2">Cyclomoteur &lt; 50cm3</option>
                <option value="3">Voiturette (Quadricycle à moteur carrossé) (anciennement "voiturette ou tricycle à moteur")</option>
                <option value="4">Scooter immatriculé - Réf inutilisée depuis 2006</option>
                <option value="5">Motocyclette - Réf inutilisée depuis 2006</option>
                <option value="6">Side-car – Réf inutilisée depuis 2006</option>
                <option value="7">Véhicule légère seul - Voiture</option>
                <option value="8">VL + caravane - Réf inutilisée depuis 2006</option>
                <option value="9">Référence inutilisée depuis 2006 </option>
                <option value="10">VU seul 1,5T &le; PTAC &le; 3,5T avec ou sans remorque </option>
                <option value="11">VU (10) + caravane - Réf inutilisée depuis 2006</option>
                <option value="12">VU (10) + remorque - Réf inutilisée depuis 2006</option>
                <option value="13">Poid loud seul 3,5T &lt; PTCA &le; 7,5T</option>
                <option value="14">PL seul &gt; 7,5T</option>
                <option value="15">PL &gt; 3,5T + remorque</option>
                <option value="16">Tracteur routier seul</option>
                <option value="17">Tracteur routier + semi-remorque</option>
                <option value="18">Transport en commun - Réf inutilisée depuis 2006</option>
                <option value="19">Tramway - Réf inutilisée depuis 2006</option>
                <option value="20">Engin spécial</option>
                <option value="21">Tracteur agricole</option>
                <option value="30">Scooter &lt; 50 cm3</option>
                <option value="31">Motocyclette &gt; 50 cm3 et &le; 125 cm3</option>
                <option value="32">Scooter &gt; 50 cm3 et &le; 125 cm3</option>
                <option value="33">Motocyclette &gt; 125 cm3</option>
                <option value="34">Scooter &gt; 125 cm3</option>
                <option value="35">Quad léger &le; 50 cm3 (Quadricycle à moteur non carrossé)</option>
                <option value="36">Quad lourd &gt; 50 cm3 (Quadricycle à moteur non carrossé)</option>
                <option value="37">Autobus</option>
                <option value="38">Autocar</option>
                <option value="39">Train</option>
                <option value="40">Tramway</option>
                <option value="40">Tramway</option>
                <option value="41">3RM &le; 50 cm3</option>
                <option value="42"> 3RM &gt; 50 cm3 &le; 125 cm3</option>
                <option value="43">3RM &ge; 125 cm3</option>
                <option value="50">EDP à moteur</option>
                <option value="60">EDP sans moteur</option>
                <option value="80">VAE</option>
                <option value="99">Autre</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="motor_veh" class="form-label">Quelle est la motorisation de votre véhicule ?</label>
            <select class="form-select" aria-label="Default" id="motor_veh" v-model="typeMotorVeh">
                <option disabled value="">Choisissez-vous un type de motor </option>
                <option value="1">Hydrocarbures</option>
                <option value="2">Hybride électrique</option>
                <option value="3">Electrique</option>
                <option value="4">Hydrogène</option>
                <option value="5">Humaine</option>
                <option value="6">Autre</option>
            </select>
        </div>
         <div class="mb-3">
            <label for="cat_route" class="form-label">Quelle route avez-vous l’habitude d’emprunter ?</label>
            <select class="form-select" aria-label="Default" id="cat_route" v-model="CategoryRoute">
                <option disabled value="">Choisissez une catégorie de route </option>
                <option value="1">Autoroute</option>
                <option value="2">Route nationale</option>
                <option value="3">Route Départementale</option>
                <option value="4">Voie Communales</option>
                <option value="5">Hors réseau public</option>
                <option value="6">Parc de stationnement ouvert à la circulation publique</option>
                <option value="7">Routes de métropole urbaine</option>
                <option value="9">Autre</option> 
            </select>
        </div>
        <div class="mb-3 text-right">
                <button type="button" class="btn btn-primary" @click="handleNext">Suivant</button>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, defineEmits, defineProps } from "vue"
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
const emits = defineEmits(["next"])
defineProps({
    step: Number
})

const catVehicule = ref("")
const typeMotorVeh = ref("")
const CategoryRoute = ref("")

const checkForm = () => catVehicule.value !== "" && typeMotorVeh.value !== "" && CategoryRoute.value !== ""

const handleNext = () => {
    if (!checkForm()) {
        createToast({title: "Veuillez remplir tout le formulaire !"} , { type: "danger" })
        return
    }
    emits("next", { 
        "Categorie_Vehicule": parseInt(catVehicule.value), 
        "Type_motorisation_Vehicule": parseInt(typeMotorVeh.value), 
        "Categorie_Route": parseInt(CategoryRoute.value) })
}
</script>