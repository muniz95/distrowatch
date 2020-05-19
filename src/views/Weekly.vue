<template>
  <div>
    <div class='row'>
      <div class='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center'>
        <h2>DistroWatch Weekly</h2>
        <span>A weekly opinion column and a summary of events from the distribution world</span>
      </div>
    </div>
    <div class='row'>&nbsp;</div>
    <div class='row'>
      <div class='col-lg-10 col-md-10 col-sm-10 col-xs-10'>
        <div>{{weekly.intro}}</div>
        <hr>
        <div>{{weekly.review}}</div>
        <hr>
        <div v-for="post in weekly.news" :key="post.project">
          <b>{{post.project}}</b>: <span>{{post.content}}</span><br>
        </div>
        <hr>
        <div>
          <b>{{weekly.qa.title}}</b><br>
          <span>{{weekly.qa.question}}</span><br>
          <span>{{weekly.qa.answer}}</span>
        </div>
        <hr>
        <div v-for="release in weekly.releasedLastWeek" :key="release.project">
          <b>{{release.project}}</b>: <span>{{release.content}}</span><br>
        </div>
        <hr>
        <div class="row torrent-corner" v-for="release in weekly.torrentCorner" :key="release.os">
          <div class='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
            <b>{{release.os}}</b>
          </div>
          <div class='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
            <b>{{release.torrent}}</b>
          </div>
          <div class='col-lg-5 col-md-5 col-sm-5 col-xs-5'>
            <b>checksum</b>
          </div>
        </div>
        <hr>
        <h2 class="text-center">Upcoming releases and schedules</h2>
        <div class="row" v-for="release in weekly.upcomingReleases" :key="release.distro">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {{release.date}}: {{release.distro}} <b>{{release.version}}</b>
          </div>
        </div>
        <hr>
        <h2 class="text-center">Opinion poll</h2>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            Coming soon
          </div>
        </div>
        <hr>
        <h2 class="text-center">DistroWatch News</h2>
        <div class="row" v-for="post in weekly.dwNews" :key="post">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4><b>{{post.title}}</b></h4>
            <span>{{post.content}}</span>
          </div>
        </div>
        <b>New projects added to the database</b>
        <div class="row" v-for="post in weekly.newAdditions" :key="post">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4><b>{{post.title}}</b></h4>
            <span>{{post.content}}</span>
          </div>
        </div>
        <b>New projects added to the waiting list</b>
        <div class="row" v-for="post in weekly.newDistributions" :key="post">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <a :href="post.url">{{post.title}}</a>:
            <span>{{post.content}}</span>
          </div>
        </div>

        <b>DistroWatch database summary</b>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            Number of all distributions in the database: 874
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            Number of active distributions in the database: 304
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            Number of dormant distributions: 57
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            Number of discontinued distributions: 513
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            Number of distributions on the waiting list: 169
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            Number of distributions waiting for evaluation: 36
          </div>
        </div>

      </div>
      <div class='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
        <div class="card" style="width: 20rem;" v-for="archive in archives" :key="archive.id">
          <div class="card-block">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'weekly',
  data () {
    return {
      weekly: {},
      archives: []
    }
  },
  created () {
    this.weekly = {
      id: 1,
      date: '2017-09-30T18:25:43.511Z',
      intro: 'Welcome to this year\'s 40th issue of DistroWatch Weekly! A lot of server work these days is handled by virtual environments, either lightweight containers or virtual machines. One operating system which is trying to make working with virtual servers easier is ClonOS. The ClonOS platform is based on FreeBSD and features web-based administrative controls. We explore ClonOS further in our Feature Story. In our News section we discuss reducing the size of Snap packages for GNOME applications, Ubuntu\'s plans to phase out 32-bit installation media and we cover highlights from FreeBSD\'s Quarterly Status Report. Our Questions and Answers column this week talks about partitioning disks with ZFS. Plus we share a list of the distributions released last week and provide links for the torrents we are seeding. Our Opinion Poll this week asks how many of our readers feel comfortable running non-free web browsers verses entirely open source browsers. Finally, we are pleased to welcome the BeeFree OS distribution to our database. We wish you all a fantastic week and happy reading!',
      review: 'ClonOS is one of the latest operating systems to be entered into the DistroWatch database. The project\'s website describes ClonOS as follows: ClonOS is a free, open-source FreeBSD-based platform for virtual environment creation and management.',
      news: [
        {
          project: 'ubuntu',
          content: 'Snaps are software packages which can be installed and run on any Linux distribution which supports the Snap software. The Snap packages are portable and bundle their dependencies, which reduces reliance on the operating system\'s default libraries.'
        },
        {
          project: 'freebsd',
          content: 'The FreeBSD project has released their latest Quarterly Status Report detailing recent updates and improvements to the venerable operating system. New changes coming to FreeBSD include using the LLVM linker more, slowly replacing the previously used GNU tools.'
        }
      ],
      qa: {
        title: 'Partitioning disks for ZFS',
        question: 'Exploring-a-new-file-system asks: I have heard of the benefits to using ZFS and I want to put a ZFS partition on my disk. How do I format a partition for ZFS on Linux? There isn\'t an option for ZFS when I use GParted.',
        answer: 'DistroWatch answers: One of the convenient characteristics of ZFS is the file system does not require you to format the partition or device where the file system will reside. When creating a ZFS storage pool, the zpool command will accept the name of any storage device, partition or even file and automatically take care of the low-level details for you, including formatting.'
      },
      releasedLastWeek: [
        {
          project: 'SparkyLinux 5.1',
          content: 'SparkyLinux is a Debian-based lightweight and fast Linux distribution designed to run on both old and new computers.'
        },
        {
          project: 'KNOPPIX 8.1',
          content: 'Klaus Knopper has announced the release of KNOPPIX 8.1, the latest stable version from he project that pioneered the concept of an easy-to-use Linux live CD with complete hardware support.'
        },
        {
          project: 'Tails 3.2',
          content: 'Version 3.2 of Tails (The Amnesic Incognito Live System), a Debian-based live DVD/USB with the goal of providing complete Internet anonymity for the user, has been released.'
        }
      ],
      torrentCorner: [
        {
          os: '4MLinux 22.3',
          torrent: '4MLinux-22.3.iso',
          checksum: 'cbf898e8964916972f731aa2ea3822a387d95159bcbb575007b9901d8a88e57c'
        },
        {
          os: 'feren OS 2017.10',
          torrent: 'ferenOS-2017.10.iso',
          checksum: 'b67ebace6c66d2f3be1ed3317709029f5062d94d002f76a836e042e480720e1b'
        },
        {
          os: 'KNOPPIX 8.1',
          torrent: 'KNOPPIX_V8.1-2017-09-05-EN/knoppix-cheatcodes.txt',
          checksum: '849add30a93a02a97c1cf317a46746bbea91eb668168a43f0672a2cb2f99905a'
        },
        {
          os: 'Nitrux 1.0.4',
          torrent: 'nitrux_release_1.0.4.img',
          checksum: '5f92405f0675ca06c9e3a0581a8d0146f841b7acb54d1e3f16f65fe295f4bd26'
        },
        {
          os: 'SparkyLinux 5.1',
          torrent: 'sparkylinux-5.1-x86_64-lxqt.iso',
          checksum: '6562fd6bd423b1fb8f18f25f2937d976ff6012d4a06a5605035b949f04adaa59'
        },
        {
          os: 'SystemRescueCd 5.1.1',
          torrent: 'systemrescuecd-x86-5.1.1.iso',
          checksum: '5ab22119f2ca2e53d28880367e53b887df5cd82599b38d3175870d023455117a'
        },
        {
          os: 'Tails 3.2',
          torrent: 'tails-amd64-3.2/tails-amd64-3.2.iso.asc',
          checksum: 'ea31ec4894330d07b8933e3ce13a786cd389936c8199774f8cbdb21ed8a97e24'
        }
      ],
      upcomingReleases: [
        {
          date: '2017-10-03',
          distro: 'FreeBSD',
          version: '10.4',
          roadmap: ''
        },
        {
          date: '2017-10-03',
          distro: 'Fedora',
          version: '27 Beta',
          roadmap: ''
        },
        {
          date: '2017-10-19',
          distro: 'Ubuntu',
          version: '17.10',
          roadmap: ''
        },
        {
          date: '2017-10-31',
          distro: 'Fedora',
          version: '27',
          roadmap: ''
        },
        {
          date: '2017-10-31',
          distro: 'Black Lab Linux',
          version: '9.2',
          roadmap: ''
        },
        {
          date: '2017-11-16',
          distro: 'Tails',
          version: '3.2',
          roadmap: ''
        },
        {
          date: '2017-11-20',
          distro: 'Black Lab Linux',
          version: '10',
          roadmap: ''
        }
      ],
      poll: '',
      dwNews: [
        {
          title: 'Mobile app for getting distro news',
          content: 'For a while now DistroWatch has had a mobile-friendly website. This allows people with smaller screens to check up on the latest news, events and our Weekly newsletter.'
        },
        {
          title: '^',
          content: 'Just wait...'
        }
      ],
      newAdditions: [
        {
          title: 'BeeFree OS',
          content: 'BeeFree OS is a Linux distribution based on Linux Mint. BeeFree OS features the Cinnamon desktop environment, a Unity theme and an application menu which resembles the Windows7 Start menu. BeeFree OS features the BeeBEEP secure LAN instant messaging software and the ability to install portable, off-line applications from the CenterFree.cf store.'
        }
      ],
      newDistributions: [
        {
          title: 'eXtern',
          url: '',
          content: 'eXtern is a Linux-based operating system which features a user interface written in JavaScript instead of traditional C/C++ toolkits.'
        },
        {
          title: 'EterTICs GNU/Linux',
          url: '',
          content: 'EterTICs GNU/Linux is a libre distribution for radio stations in Latin America. It is based on Devuan.'
        },
        {
          title: 'Advanced Persistent Security',
          url: '',
          content: 'Advanced Persistent Security is a Linux distribution designed for secure and anonymous web browsing.'
        }
      ],
      comments: []
    }
  }
}

</script>
<style>
  .torrent-corner {
    font-size: 0.8em;
  }

</style>
