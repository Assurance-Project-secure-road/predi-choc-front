<template>
  <div class="container">
    <StepExemple :step="step+1" @next="handleNext" v-if="step == 0" />
    <SecondStep :step="step+1" @next="handleNext" v-else-if="step ==1" />
    <FourthStep :step="step+1" @next="handleNext" v-else-if="step ==2" />
    <Result :results="results" v-if="results.length > 0" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import StepExemple from "@/components/StepExemple.vue"
import SecondStep from "@/components/SecondStep.vue"
import FourthStep from "@/components/FourthStep.vue"
import Result from "@/components/Result.vue"
const sondage = ref({})
const step = ref(0)
const results = ref([])

const handleNext = (form) => {
  if (step.value == 4) {
    submit()
    return
  }
  sondage.value = Object.assign({}, sondage.value, form)
  step.value += 1
}

const submit = async () => {
  try {
    const result = await fetch("/api/sondage", { 
      method: "post",
      body: sondage.value
    })
    if (result.status == 200) {
      results.value = result
    }
  } catch {
    console.warn("error")
  }
}
</script>
