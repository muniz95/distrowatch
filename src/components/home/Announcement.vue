<template>
  <div>
    <div class='well well-dw' v-for='announcement of announcements' :key='announcement.id'>
      <b-row>
        <b-col lg='2' md='2' sm='3' xs='3' class='box-title'>{{announcement.date}}</b-col>
        <b-col lg='10' md='10' sm='9' xs='9' class='box-title'>{{announcement.releaseType}} release: {{announcement.name}} {{announcement.version}}</b-col>
      </b-row>
      <b-row>
        <b-col lg='2' md='2' sm='3' xs='3'>{{announcement.image}}</b-col>
        <b-col lg='10' md='10' sm='9' xs='9'>{{announcement.text}}</b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'announcement',
  data () {
    return {
      announcements: []
    }
  },
  created () {
    this.announcements = [
      { date: '2017-09-06', releaseType: 'Distribution', name: 'Parted Magic', version: '2017_09_05', text: 'The project\'s latest release, Parted Magic2017_09_95, ships with GParted0.29.0, version4.12.9 of the Linux kernel and packages to support both Btrfs and ZFS.', image: 'parted-magic.jpg' },
      { date: '2017-09-06', releaseType: 'Distribution', name: 'Parted Magic', version: '2017_09_05', text: 'The project\'s latest release, Parted Magic2017_09_95, ships with GParted0.29.0, version4.12.9 of the Linux kernel and packages to support both Btrfs and ZFS.', image: 'parted-magic.jpg' }
    ]
  }
}
</script>

<style>
  .box-title {
    background-color: #f6edc8;
  }
  .well-dm {
    background-color: #fdffe3;
  }
</style>
