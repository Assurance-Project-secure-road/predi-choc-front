<template>
  <div class="container">
    <FirstStep :step="step+1" @next="handleNext" v-if="step == 0" />
    <SecondStep :step="step+1" @next="handleNext" v-else-if="step ==1" />
    <ThirdStep :step="step+1" @next="handleNext" v-else-if="step == 2" />
    <FourthStep :step="step+1" @next="handleNext" v-else-if="step == 3" />
    <AskResult :step="step+1" :disabled="loading" @submit="handleSubmit" v-else-if="step == 4" />
    <Result :results="results" :sondage="sondage" v-if="results.length > 0" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import FirstStep from "@/components/FirstStep.vue"
import SecondStep from "@/components/SecondStep.vue"
import ThirdStep from "@/components/ThirdStep.vue"
import FourthStep from "@/components/FourthStep.vue"
import AskResult from "@/components/AskResult.vue"
import Result from "@/components/Result.vue"
import { createToast } from "mosha-vue-toastify"
const sondage = ref({})
const step = ref(0)
const results = ref([])
const loading = ref(false)

const handleSubmit = () => {
  if (step.value == 4) {
    loading.value = true
    submit()
  }
}

const handleNext = (form) => {
  if (sondage.value["Categorie_Vehicule"] !== undefined && form["Categorie_Vehicule"] !== undefined) {
    if (!Array.isArray(sondage.value["Categorie_Vehicule"]))
      sondage.value["Categorie_Vehicule"] = [sondage.value["Categorie_Vehicule"]]
    if (!Array.isArray(form["Categorie_Vehicule"]))
      form["Categorie_Vehicule"] = [form["Categorie_Vehicule"]]
      sondage.value["Categorie_Vehicule"] = [...sondage.value["Categorie_Vehicule"], ...form["Categorie_Vehicule"]]
      delete form["Categorie_Vehicule"]
    }
    if (sondage.value["Departement_Acc"] !== undefined && form["Departement_Acc"] !== undefined) {
      if (!Array.isArray(sondage.value["Departement_Acc"]))
        sondage.value["Departement_Acc"] = [sondage.value["Departement_Acc"]]
      if (!Array.isArray(form["Departement_Acc"]))
        form["Departement_Acc"] = [form["Departement_Acc"]]
      sondage.value["Departement_Acc"] = [...sondage.value["Departement_Acc"], ...form["Departement_Acc"]]
      delete form["Departement_Acc"]
    }
    sondage.value = Object.assign({}, sondage.value, form)
  step.value += 1
}

const submit = async () => {
  try {
    const result = await fetch("/api/sondage", { 
      method: "post",
      body: JSON.stringify(getSondageList())
    })
    if (result.status == 200) {
      results.value = result.data
      step.value += 1
    }
  } catch {
    createToast({ title: "Erreur avec votre connexion internet" }, { type: "danger"})
  }
  loading.value = false
}

const getSondageList = () => {
  const surfaces = sondage.value['Surface_Route']
  const months = sondage.value['Month']
  const cars = sondage.value['Categorie_Vehicule']
  const meteos = sondage.value['Meteo_Acc']
  const departments = sondage.value["Departement_Acc"]
  const sdgUnique = Object.keys(sondage.value).filter((key) => !Array.isArray(sondage.value[key])).reduce((obj, key) => { return {...obj, [key]: sondage.value[key] }}, {})
  let sondages = [sdgUnique]
  sondages = surfaces.map((surface) => sondages.map((sdg) => Object.assign({}, sdg, {"Surface_Route": surface}))).reduce((a,b) => [...a, ...b], [])
  sondages = months.map((month) => sondages.map((sdg) => Object.assign({}, sdg, {"Month": month}))).reduce((a,b) => [...a, ...b], [])
  sondages = cars.map((car) => sondages.map((sdg) => Object.assign({}, sdg, {"Categorie_Vehicule": car}))).reduce((a,b) => [...a, ...b], [])
  sondages = meteos.map((meteo) => sondages.map((sdg) => Object.assign({}, sdg, {"Meteo_Acc": meteo}))).reduce((a,b) => [...a, ...b], [])
  sondages = departments.map((departement) => sondages.map((sdg) => Object.assign({}, sdg, {"Departement_Acc": departement}))).reduce((a,b) => [...a, ...b], [])
  return sondages
}
</script>
