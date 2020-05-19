<template>
  <div>
    <div class='row'>
      <h2>
        <b>News and Open Source Releases</b>
      </h2>
    </div>
    <div class='row'>
      <div class='col-lg-3 col-md-4 col-sm-6 col-xs-12' v-for='headline of headlines' :key='headline.id'>
        <div class='well'>
          <div class='row'>
            <div class='col-lg-3 col-md-3 col-sm-3 col-xs-3'>{{headline.image}}</div>
            <div class='col-lg-9 col-md-9 col-sm-9 col-xs-9'>{{headline.date | date}}</div>
          </div>
          <div class='row'>&nbsp;</div>
          <div class='row'>
            <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <a :href='headline.url' target='_blank' v-if='headline.external'>{{headline.title}}</a>
              <a :to="{name: 'Headlines', params: { id: headline.id }}" v-if='!headline.external'>{{headline.title}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: 'headlines',
  data () {
    return {
      headlines: []
    }
  },
  filters: {
    date: (value) => {
      return moment(String(value)).format('DD/MM/YYYY hh:mm')
    }
  },
  created () {
    this.headlines = [
      { id: 1, headlineType: 1, external: 0, date: '2017-09-30T18:25:43.511Z', title: 'The ChaosEsque Anthology project has released version117r', url: 'https://freshfoss.com/projects/chaosesque-anthology', image: 'fresh-foss.png' },
      { id: 2, headlineType: 1, external: 1, date: '2017-09-30T18:25:43.511Z', title: 'The ChaosEsque Anthology project has released version117r', url: 'https://freshfoss.com/projects/chaosesque-anthology', image: 'fresh-foss.png' }
    ]
  }
}
</script>
