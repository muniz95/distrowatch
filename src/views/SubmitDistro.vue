<template>
  <div>
    <div class="row text-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2><b>Top Ten Distributions</b></h2>
        <b>An overview of today's top distributions</b>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center heading">
        Introduction
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          This page discusses the process of having a distribution listed in the DistroWatch database and explains why it could take a long time for a new distribution to be accepted.
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center heading">
        A Guide to Choosing a Distribution
      </div>
    </div>
    <div class="row" v-for="distro of distros" :key="distro.name">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center block-heading">
        <router-link :to="{name: 'Home'}">{{distro.title}}</router-link>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          {{distro.text}}
        </div>
        <div>
          <b>Ubuntu</b>, <b>Linux Mint</b> and <b>PCLinuxOS</b> are considered the easiest for new users who want to get productive in Linux as soon as possible without having to master all its complexities. On the other end of the spectrum, <b>Slackware Linux</b>, <b>Arch Linux</b> and <b>FreeBSD</b> are more advanced distributions that require plenty of learning before they can be used effectively. <b>openSUSE</b>, <b>Fedora</b>, <b>Debian GNU/Linux</b> and <b>Mageia</b> can be classified as good "middle-road" distributions. <b>CentOS</b> is an enterprise distribution, suitable for those who prefer stability, reliability and long-term support over cutting-edge features and software.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
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
