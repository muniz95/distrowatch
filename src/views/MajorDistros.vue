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
          The bewildering choice and the ever increasing number of Linux distributions can be confusing for those who are new to Linux. This is why this page was created. It lists 10 Linux distributions (plus an honourable mention of FreeBSD, by far the most popular of all of the BSDs), which are generally considered as most widely-used by Linux users around the world. There are no figures to back it up and there are many other distributions that might suit your particular purpose better, but as a general rule, all of these are popular and have very active forums or mailing lists where you can ask questions if you get stuck.
        </div>
        <div>
          <b>Ubuntu</b>, <b>Linux Mint</b> and <b>PCLinuxOS</b> are considered the easiest for new users who want to get productive in Linux as soon as possible without having to master all its complexities. On the other end of the spectrum, <b>Slackware Linux</b>, <b>Arch Linux</b> and <b>FreeBSD</b> are more advanced distributions that require plenty of learning before they can be used effectively. <b>openSUSE</b>, <b>Fedora</b>, <b>Debian GNU/Linux</b> and <b>Mageia</b> can be classified as good "middle-road" distributions. <b>CentOS</b> is an enterprise distribution, suitable for those who prefer stability, reliability and long-term support over cutting-edge features and software.
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
    return {
      distros: []
    }
  },
  created () {
    this.distros = [
      {
        title: 'Linux Mint',
        url: '/',
        text: 'Linux <a href="mint">Mint</a>, a distribution based on Ubuntu, was first launched in 2006 by Clement Lefebvre, a French-born IT specialist living in Ireland.',
        pros: [
          'Superb collection of "minty" tools developed in-house',
          'hundreds of user-friendly enhancements',
          'inclusion of multimedia codecs',
          'open to users\' suggestions'
        ],
        cons: [
          'The alternative "community" editions don\'t always include the latest features',
          'the project does not issue security advisories'
        ],
        packageManagement: 'Advanced Package Tool (APT) with mintInstall using DEB packages (compatible with Ubuntu repositories)',
        editions: 'A "Main" edition (with MATE and Cinnamon), "Community" editions (with KDE and Xfce), Linux Mint "Debian" edition (with MATE or Cinnamon)',
        alternatives: [
          { name: 'Ubuntu', url: '/' },
          { name: 'elementary OS', url: '/' },
          { name: 'Zorin OS', url: '/' },
          { name: 'Lubuntu', url: '/' },
          { name: 'Xubuntu', url: '/' },
          { name: 'Peppermint OS', url: '/' }
        ]
      }
    ]
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
