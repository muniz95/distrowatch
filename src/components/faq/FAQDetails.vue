<template>
  <div>
    <div v-if="term.id">
      <b>{{term.name}}</b>: {{term.description}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'faq-details',
  props: ['term']
}
</script>

<style>

</style>

