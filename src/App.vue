<template>
  <div id="app">
    <Navbar />
    <b-container class="main">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {Navbar}
}
</script>

<style>
  .main {
    margin-top: 15px;
  }
</style>
