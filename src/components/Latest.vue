<template>
  <div>
    <b-row v-for='release of releases' v-bind:key='release.id'>
      <b-col lg='3' md='3' sm='3' xs='3' >{{release.date}}</b-col>
      <b-col lg='9' md='9' sm='9' xs='9' >{{release.name}} - {{release.version}}</b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'latest',
    data () {
      return {
        releases: []
      }
    },
    created () {
      this.releases = [
        {id: 1, date: '01/01', name: 'Test', version: '1.0.0'},
        {id: 1, date: '01/01', name: 'Test', version: '1.0.0'},
        {id: 1, date: '01/01', name: 'Test', version: '1.0.0'},
        {id: 1, date: '01/01', name: 'Test', version: '1.0.0'},
        {id: 1, date: '01/01', name: 'Test', version: '1.0.0'}
      ]
    }
  }
</script>
