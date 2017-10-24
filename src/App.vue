<template>
  <div id="app">
    <DwNavbar />
    <b-container class="main">
      <router-view></router-view>
    </b-container>
    <DwFooter />
  </div>
</template>

<script>
import DwNavbar from '@/components/Navbar'
import DwFooter from '@/components/Footer'
export default {
  name: 'app',
  components: { DwNavbar, DwFooter }
}
</script>

<style>
  .main {
    margin-top: 15px;
  }
</style>
