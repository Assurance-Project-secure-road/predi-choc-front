<template>
  <div class="container">
    <StepExemple :step="step+1" @next="handleNext" v-if="step == 0" />
    <ThirdStep :step="step+1" @next="handleNext" v-else-if="step == 2" />
    <Result :results="results" v-if="results.length > 0" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import StepExemple from "@/components/StepExemple.vue"
import ThirdStep from "@/components/ThirdStep.vue"
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
