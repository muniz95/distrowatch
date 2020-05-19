<template>
  <div>
    <div class="row text-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2><b>Packages Tracked by DistroWatch</b></h2>
        <b>Last Update: Saturday 7 October 2017 12:05 GMT</b>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center heading">
        Introduction and Notes
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          This is the list of current stable packages tracked by DistroWatch, the latest versions and some notes
          and explanations where applicable. Some developers choose to be very ambiguous about what is stable and what is still
          in development. Package name capitalisation, even names themselves can vary between distributions. The capitalisation
          used here is equivalent to the "packagename" part in the "packagename-version.extension" that most open source developers
          use by convention, which sometimes differs from the "official" name (e.g. openssl-0.9.6f.tar.gz vs OpenSSL). Please
          report any errors or suggestions.
        </div>
        <div>
          The following web sites specialise in tracking open source software releases: •
          Freshcode https://freshcode.club/ • IceWalkers http://www.icewalkers.com/ Important! Due to the amount of work involved,
          the list of tracked packages is only reviewed once a year, usually in June. Readers are welcome to submit suggestions
          to track new packages.
        </div>
        <div>
          The latest package list update was effected on 22 June 2016, adding Budgie Desktop, Calibre,
          Firejail, Lumina, Qt Creator. The packages KDE Workspace, ndiswrapper and xinetd were removed.
        </div>
        <div>
          • Current shortlist of packages earmarked for inclusion in June 2017: broadcom-sta-dkms,
            Docker, Flatpak, Krita, libdvdcss, lua, lzip, MyPaint, qBittorrent, Rust, Snap<br>
          • Current shortlist of packages earmarked for removal in June 2017: alpine, man<br>
          • Current list of packages which will be listed under a different name: none<br>
        </div>
        <div>
          To find a list of distributions which include (or exclude) a specific software package, please visit our Search page.
        </div>
        <div>
          To compare the software available in one distribution with the software packages in another distribution, please visit our Compare Packages page.
        </div>
      </div>
    </div>
    <hr>
    <div class="row text-center heading">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">Package</div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">Version</div>
      <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">Note</div>
    </div>
    <div class="row" v-for="pack in packages" :key="pack">
      <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">{{pack.name}}</div>
      <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">{{pack.version}}</div>
      <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">{{pack.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'packages',
  data () {
    return {
      packages: []
    }
  },
  created () {
    this.packages = [
      {
        name: 'abiword',
        version: '3.0.2',
        description: 'AbiWord: a full-featured word processor'
      },
      {
        name: 'AfterStep',
        version: '2.2.12',
        description: 'AfterStep: a window manager for X with a NeXT look and feel'
      },
      {
        name: 'alpine',
        version: '2.20',
        description: 'Alpine: a text-based MIME email client based on Pine'
      },
      {
        name: 'alsa-lib',
        version: '1.1.4.1',
        description: 'alsa-lib: an audio library for use with the ALSA kernel modules'
      },
      {
        name: 'amarok',
        version: '2.8.0',
        description: 'Amarok: a music player for Linux and UNIX'
      },
      {
        name: 'apache-tomcat',
        version: '8.5.23',
        description: 'apache-tomcat: a Java Servlet and JSP Container'
      },
      {
        name: 'apt',
        version: '1.5',
        description: 'APT: a front-end for the dpkg package manager'
      },
      {
        name: 'ati-driver',
        version: '16.40',
        description: 'ATI driver: a proprietary Linux display driver for XFree86/X.Org by ATI, the Catalyst series'
      },
      {
        name: 'audacity',
        version: '2.1.3',
        description: 'Audacity: a free audio editor'
      },
      {
        name: 'autoconf',
        version: '2.69',
        description: 'Autoconf: a package of M4 macros to produce scripts to automatically configure source code'
      },
      {
        name: 'automake',
        version: '1.15.1',
        description: 'GNU Automake: a tool for automatically generating Makefiles'
      },
      {
        name: 'avidemux',
        version: '2.7.0',
        description: 'Avidemux: a free video editor designed for simple cutting, filtering and encoding tasks'
      },
      {
        name: 'awesome',
        version: '4.2',
        description: 'awesome: a configurable window manager for X'
      },
      {
        name: 'banshee',
        version: '2.6.2',
        description: 'Banshee: a music management and playback application for GNOME'
      },
      {
        name: 'bash',
        version: '4.4',
        description: 'Bash: an sh-compatible command language interpreter'
      },
      {
        name: 'bind',
        version: '9.11.2',
        description: 'ISC BIND: an implementation of the Domain Name System (DNS) protocols'
      },
      {
        name: 'binutils',
        version: '2.29.1',
        description: 'GNU Binutils: an essential collection of binary utilities'
      },
      {
        name: 'bison',
        version: '3.0.4',
        description: 'Bison: a replacement for the parser generator Yacc'
      },
      {
        name: 'bitcoin',
        version: '0.15.0.1',
        description: 'Bitcoin: an innovative payment network and a new kind of money'
      },
      {
        name: 'blender',
        version: '2.79',
        description: 'Blender: a very fast and versatile 3D modeller and renderer'
      },
      {
        name: 'budgie-desktop',
        version: '10.4',
        description: 'Budgie Desktop: a simple desktop environment featuring heavy integration with the GNOME stack'
      },
      {
        name: 'busybox',
        version: '1.27.2',
        description: 'BusyBox: a program that combines many common UNIX utilities into a single small executable'
      },
      {
        name: 'bzip2',
        version: '1.0.6',
        description: 'bzip2: a free, patent-free, high-quality data compressor'
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
</style>
