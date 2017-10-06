<template>
  <div>
    <div>{{title}}</div>
    <b-row>
      <b-col lg='2' md='2'>
        <Latest />
      </b-col>
      <b-col lg='8' md='8'>
        <Latest />
      </b-col>
      <b-col lg='2' md='2'>
        <Latest />
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Latest from '@/components/Latest'
  export default {
    name: 'home',
    data () {
      return {
        title: 'Welcome to Distrowatch'
      }
    },
    components: { Latest }
  }
</script>
