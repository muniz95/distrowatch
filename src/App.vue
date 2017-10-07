<template>
  <div id="app">
    <Navbar />
    <b-container class="main">
      <router-view></router-view>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: { Navbar, Footer }
}
</script>

<style>
  .main {
    margin-top: 15px;
  }
</style>
