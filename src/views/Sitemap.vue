<template>
  <div>
    <div class="row text-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2><b>Distrowatch Sitemap</b></h2>
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
            <span :to="{name: 'Home'}">{{link.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'sitemap',
    data () {
      return {
        links: []
      }
    },
    created () {
      this.links = [
        { id: 1, title: 'Home', link: 'Home', category: 1 },
        { id: 2, title: 'Distribution release announcements', link: 'Home', category: 1 },
        { id: 3, title: 'News from distributions (Headlines)', link: 'Home', category: 1 },
        { id: 4, title: 'Search for past reviews and articles', link: 'Home', category: 1 },
        { id: 5, title: 'Package release announcements', link: 'Home', category: 1 },
        { id: 6, title: 'Weekly news and reviews', link: 'Home', category: 1 },
        { id: 7, title: 'Upcoming distribution releases', link: 'Home', category: 1 },
        { id: 8, title: 'RSS and social media feeds', link: 'Home', category: 1 },
        { id: 9, title: 'Opinion poll archives', link: 'Home', category: 1 },
        { id: 10, title: 'Visitor ratings/reviews of distros', link: 'Home', category: 1 },
        { id: 11, title: 'Project rankings based on visitor ratings', link: 'Home', category: 1 },
        { id: 12, title: 'Latest distro and package releases summary', link: 'Home', category: 1 },
        { id: 13, title: 'Podcasts, newsletters and reviews summary', link: 'Home', category: 1 }
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
