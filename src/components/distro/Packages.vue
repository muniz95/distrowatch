<template>
  <div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
        <select name="dataspan" id="dataspan" v-on:change="changeDistroVersion">
        <option value="">Select...</option>
        <option value="12">12-CURRENT</option>
        <option value="11">11-STABLE</option>
        <option value="11">11.1</option>
        <option value="10">10.3</option>
        <option value="9">9.3</option>
        <option value="8">8.2</option>
        <option value="7">7.4</option>
        <option value="6">6.4</option>
        <option value="5">5.5</option>
        <option value="4">4.11</option>
        <option value="3">3.5</option>
        <option value="2">2.2.8</option>
      </select>
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
        <div class="well well-sm">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Release Date: 2017-09-27
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              End Of Life:
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Price: Free
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Image Size (MB):
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Free Download:
              <a>Ports</a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Installation: Text Mode
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Default Desktop:
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Package Management: TXZ
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Release Model: Rolling
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Office Suite: Calligra, GOffice, LibreOffice
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Processor Architeture: aarch64, amd64, armv6, i386, powerpc, powerpc64, sparc64
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Init Software: RC
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Journaled File Systems: UFS2 SU+J
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Multilingual: Yes
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              Asian Language Support: Yes
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'distro-packages',
  methods: {
    changeDistroVersion: (event) => {
      console.log('====================================')
      console.log(event.target.value)
      console.log('====================================')
    }
  }
}

</script>
