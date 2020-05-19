<template>
  <div>
    <div v-if="question.id">
      <b>{{question.question}}</b>: {{question.answer}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'dw-faq-details',
  props: ['question']
}
</script>

<style>

</style>
