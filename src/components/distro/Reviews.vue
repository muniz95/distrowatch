<template>
  <div>

    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <b>Reader supplied reviews for FreeBSD</b>
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h1>9.3</h1> from
        <b>29</b> review(s)
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <b>What are your thoughts on FreeBSD?</b><br /> Please include a few pros and a few cons, along with your overall
        impression of the operating system.<br />
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        Version:
        <select name=version>
        <option value="0">--</option>
        <option value="12-CURRENT">12-CURRENT</option>
        <option value="11-STABLE">11-STABLE</option>
        <option value="11.1">11.1</option>
        <option value="10.3">10.3</option>
        <option value="9.3">9.3</option>
        <option value="8.2">8.2</option>
        <option value="7.4">7.4</option>
        <option value="6.4">6.4</option>
        <option value="5.5">5.5</option>
        <option value="4.11">4.11</option>
        <option value="3.5">3.5</option>
        <option value="2.2.8">2.2.8</option>
        <option value=""></option>
      </select>
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        Rating:
        <select name=stars>
        <option value="0">--</option>
        <option value="10">10</option>
        <option value="9">9</option>
        <option value="8">8</option>
        <option value="7">7</option>
        <option value="6">6</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select> out of 10
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        Comments (maximum 2,048 characters):
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <textarea name="body" rows="18" maxlength="2048"></textarea>
        <br /><br />
        <button type=button>Submit Review</button>
      </div>
    </div>
    <hr>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <b>Past reviews</b> - sort by:
        <select name="sortby">
        <option selected value="date">Date</option>
        <option value="votes">Votes</option>
      </select>
      </div>
    </div>
    <div class="row">&nbsp;</div>
    <div class="row">
      <div class="col-lg-12 col-md-6 col-sm-12 col-xs-12">
        <div class="well well-sm">
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <b>Version:</b> 11-STABLE
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <b>Rating:</b> 10
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <b>Date:</b> 2017-05-07
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <b>Votes:</b> 23
            </div>
          </div>
          <div class="row">&nbsp;</div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              This is an OS that is behind the times. It also makes you work harder to setup certain hardware. Its not very good read crap
              with sd cards; because of this I have had to setup a rpi with nfs just to be able to read an sd card. Its pretty
              much the same with external usb drives that are formatted with linux file systems; again the easiest and the
              most difficult is just to connect it to the rpi under nfs. It does not naturally deal with linux file systems;
              it does read and write to ext2; and I formatted the external drive with ext2; but after so few connections
              the drive needs a file system check.
              <br />
              <br />Having said that it does run smoothly, and seems quicker at browsing the web. But for the reasons cited
              it would not be my main OS.<br /><br /><br />
            </div>
          </div>
          <div class="row">&nbsp;</div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              Was this review helpful?
              <input type=radio name=helpful value="Yes"> Yes
              <input type=radio name=helpful value="No"> No
              <button>Vote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a><b>See all 29 reader reviews of FreeBSD...</b></a><br />
  </div>
</template>
<script>
  export default {
    name: 'distro-reviews'
  }

</script>
<style>

textarea {
  min-width: 100%;
}

</style>

