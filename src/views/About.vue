<template>
  <div>
    <div class="row text-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2><b>About Distrowatch</b></h2>
      </div>
    </div>
    <hr>
    <div class="row text-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center heading">
        Navigating Distrowatch
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <ul>
          <li v-for="link in links" :key="link.id">
            <router-link :to="{name: 'Home'}">{{link.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style>
  .heading {
    background-color: #0B3B24 !important;
    color: white;
  }

  .block {
    background-color: #F6EDC8 !important;
  }

  .block-heading {
    border-style: solid;
    border-width: 1px;
    margin: 10px;
  }
</style>
