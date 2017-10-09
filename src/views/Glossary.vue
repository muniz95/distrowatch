<template>
  <div>
    <div class="row text-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2><b>Package Management Cheatsheet</b></h2>
        <b>A package management reference card for Linux distributions and FreeBSD</b>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center heading">
        Introduction
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          Package management is probably the most distinctive feature of any Linux distribution. While the current trend among most
          of the major projects is to offer some sort of a clickable interface where users can select a package and install
          it with a mouse click (e.g. Debian's Synaptic or Mandriva's Drakrpm), these types of programs are generally just
          graphical front-ends to the low-level utilities that manage the tasks associated with installing packages on a
          Linux system. And even though many desktop Linux users feel much more comfortable installing packages through these
          intuitive graphical tools, there is no denying that command-line package management offers two excellent features
          not available in any graphical package management utility: power and speed.
        </div>
        <div>
          One problem that many distro-hoppers and operating system enthusiasts encounter is having to master (or relearn) a set of
          package management commands each time they switch from one distribution group to another. Additionally, the package
          management tools tend to evolve, with new features and even new commands added to every new version. This is why
          we created this package management cheatsheet - an easy reference card covering most frequently used package management
          tasks in Linux distributions and FreeBSD. As always, we welcome corrections, updates and suggestions - if you spot
          any error or wish to have another package management utility added to this page, feel free to contact us (email
          address at the bottom of this page).
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'package-management'
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
