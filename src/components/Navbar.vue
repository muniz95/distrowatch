<template>
  <div>

  <b-navbar toggleable="md">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-navbar-brand :to="{name: 'Home'}">DistroWatch</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav is-nav-bar>
        <b-nav-item :to="{name: 'Distro'}">FreeBSD</b-nav-item>
      </b-nav>

      <!-- Right aligned nav items -->
      <b-nav is-nav-bar class="ml-auto">

        <b-nav-item-dropdown text="Main topics" right>
          <b-dropdown-item :to="{name: 'Headlines'}">Headlines</b-dropdown-item>
          <b-dropdown-item :to="{name: 'Weekly'}">DW Weekly</b-dropdown-item>
          <b-dropdown-item disabled>Comments</b-dropdown-item>
          <hr>
          <b-dropdown-item :to="{name: 'Packages'}">Packages</b-dropdown-item>
          <b-dropdown-item :to="{name: 'PackageManagement'}">Package Management</b-dropdown-item>
          <hr>
          <b-dropdown-item :to="{name: 'Glossary'}">Glossary</b-dropdown-item>
          <b-dropdown-item :to="{name: 'FAQ'}">FAQ</b-dropdown-item>
          <b-dropdown-item v-on:click="mobile">Mobile Site</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Other Stuff" right>
          <b-dropdown-item :to="{name: 'Sitemap'}">Sitemap</b-dropdown-item>
          <b-dropdown-item :to="{name: 'MajorDistros'}">Major Distributions</b-dropdown-item>
          <b-dropdown-item :to="{name: 'SubmitDistro'}">Submit Distribution</b-dropdown-item>
          <b-dropdown-item :to="{name: 'Home'}">Upcoming Releases</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="About" right>
          <b-dropdown-item :to="{name: 'Home'}">About DistroWatch</b-dropdown-item>
          <b-dropdown-item :to="{name: 'Home'}">Page Hit Ranking</b-dropdown-item>
          <b-dropdown-item :to="{name: 'Home'}">Advertise</b-dropdown-item>
          <b-dropdown-item :to="{name: 'Home'}">CryptoCoin.cc</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>

    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>
  export default {
    name: 'DwNavbar',
    methods: {
      mobile () {
        alert('This is already the mobile site.')
      }
    }
  }
</script>

<style>
  .navbar {
    background-color: #F6EDC8;
  }
</style>

