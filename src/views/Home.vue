<template>
  <div>
    <b-row>
      <b-col lg='2' md='2'>
        <span for="">Latest Distros</span>
        <Latest />
      </b-col>
      <b-col lg='8' md='8'>
        <Announcement />
      </b-col>
      <b-col lg='2' md='2'>
        <span for="">Latest Distros</span>
        <Latest />
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import Latest from '@/components/home/Latest'
  import Announcement from '@/components/home/Announcement'
  export default {
    name: 'dw-home',
    data () {
      return {
        title: 'Welcome to Distrowatch'
      }
    },
    components: { Latest, Announcement }
  }
</script>
