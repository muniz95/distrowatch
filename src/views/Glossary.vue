<template>
  <div>
    <div class="row text-center">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2><b>Glossary of Linux, BSD and open source terms</b></h2>
        <b>A quick reference for terms commonly used in the open source community</b>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center heading">
        Introduction
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          A lot of technical terms get thrown around in DistroWatch articles and in the comments following our weekly news letter.
          In an effort to make the world of Linux, BSD and open source less confusing, especially to newcomers, we have compiled
          a glossary of commonly used terms. We present them in alphabetical order to make definitions easier to find.
        </div>
        <div>
          Should you wish to have us include a definition which is not featured here, please e-mail us and
          place the word "Glossary" in the subject line of your message.
        </div>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center heading">
        Glossary
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center block-heading">
        Glossary index
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          A lot of technical terms get thrown around in DistroWatch articles and in the comments following our weekly news letter.
          In an effort to make the world of Linux, BSD and open source less confusing, especially to newcomers, we have compiled
          a glossary of commonly used terms. We present them in alphabetical order to make definitions easier to find.
        </div>
        <div>
          Should you wish to have us include a definition which is not featured here, please e-mail us and
          place the word "Glossary" in the subject line of your message.
        </div>
      </div>
    </div>
    <hr>
    <div class="row block">
      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <div class="row" v-for="term in terms" :key="term.id">
          <span @click="setCurrentTerm(term)">{{term.name}}</span>
        </div>
      </div>
      <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
        <glossary-details :term="currentTerm" />
      </div>
    </div>
  </div>
</template>

<script>
import GlossaryDetails from '@/components/glossary/GlossaryDetails'
export default {
  name: 'glossary',
  components: { GlossaryDetails },
  data () {
    return {
      terms: [],
      currentTerm: {}
    }
  },
  methods: {
    setCurrentTerm (term) {
      this.currentTerm = term
    }
  },
  created () {
    this.terms = [
      { id: 1, name: 'ACPI', definition: '' },
      { id: 2, name: 'Alpha (beta, release candidate)', definition: '' },
      { id: 3, name: 'AppArmor (SELinux)', definition: '' },
      { id: 4, name: 'Architecture (amd64, ARM, i386, i486, i586, i686, x86, x86_64)', definition: '' },
      { id: 5, name: 'BSD', definition: '' },
      { id: 6, name: 'chroot', definition: '' },
      { id: 7, name: 'Codec (media codec)', definition: '' },
      { id: 8, name: 'CPU (processor)', definition: '' },
      { id: 9, name: 'Desktop environment', definition: '' },
      { id: 10, name: 'DHCP (Dynamic Host Configuration Protocol)', definition: '' },
      { id: 11, name: 'Distribution (distro)', definition: '' },
      { id: 12, name: 'Driver (device driver)', definition: '' },
      { id: 13, name: 'ELF (file type)', definition: '' },
      { id: 14, name: 'Encryption', definition: '' },
      { id: 15, name: 'File system', definition: '' },
      { id: 16, name: 'Firewall (packet filter)', definition: '' },
      { id: 17, name: 'Free software', definition: '' },
      { id: 18, name: 'FUSE (Filesystem in userspace)', definition: '' },
      { id: 19, name: 'GNU (GNU/Linux)', definition: '' },
      { id: 20, name: 'GPL (General Public License)', definition: '' },
      { id: 21, name: 'Hash (checksum, hash function, MD5, SHA1, SHA256, SHA512)', definition: '' },
      { id: 22, name: 'Hypervisor (virtual machine)', definition: '' },
      { id: 23, name: 'Image file (IMG, ISO)', definition: '' },
      { id: 24, name: 'Init (systemd, SysV)', definition: '' },
      { id: 25, name: 'Kernel', definition: '' },
      { id: 26, name: 'Linux', definition: '' },
      { id: 27, name: 'Mir (and Wayland)', definition: '' },
      { id: 28, name: 'Open source', definition: '' },
      { id: 29, name: 'Operating system (OS)', definition: '' },
      { id: 30, name: 'Out of the box (OOTB)', definition: '' },
      { id: 31, name: 'Package (package manager) (dependency)', definition: '' },
      { id: 32, name: 'Partition (partition manager)', definition: '' },
      { id: 33, name: 'Personal package archive (PPA)', definition: '' },
      { id: 34, name: 'Physical Address Extension (PAE)', definition: '' },
      { id: 35, name: 'Portable application formats (AppImage, Flatpak, Snap)', definition: '' },
      { id: 36, name: 'POSIX', definition: '' },
      { id: 37, name: 'Repository (package repository, software repository)', definition: '' },
      { id: 38, name: 'Rolling release (verse fixed release and semi-rolling)', definition: '' },
      { id: 39, name: 'Root (root file system) (root user)', definition: '' },
      { id: 40, name: 'SELinux (AppArmor)', definition: '' },
      { id: 41, name: 'Shell (command line)', definition: '' },
      { id: 42, name: 'SMP', definition: '' },
      { id: 43, name: 'Source-based distribution', definition: '' },
      { id: 44, name: 'Swap (swap area, swap space)', definition: '' },
      { id: 45, name: 'Tarball (file type)', definition: '' },
      { id: 46, name: 'Terminal (console, virtual terminal)', definition: '' },
      { id: 47, name: 'UEFI (Secure Boot)', definition: '' },
      { id: 48, name: 'Unix', definition: '' },
      { id: 49, name: 'Unix Philosophy', definition: '' },
      { id: 50, name: 'Upstream (downstream)', definition: '' },
      { id: 51, name: 'Userland', definition: '' },
      { id: 52, name: 'Wayland (and Mir)', definition: '' },
      { id: 53, name: 'Window manager', definition: '' },
      { id: 54, name: 'X (X11) (X-Windows)', definition: '' },
      { id: 55, name: 'Zombie process', description: '' }
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
    /*margin: 10px;*/
  }

</style>
