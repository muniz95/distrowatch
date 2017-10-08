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
    <hr>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center heading">
        Package Management Cheatsheet
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center block-heading">
        Main distributions
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          The first table lists package management tasks in the four most popular distribution groups - Debian (including Ubuntu, Linux
          Mint, elementary OS, Zorin OS and other Debian derivatives), openSUSE, Fedora (including Red Hat Enterprise Linux,
          CentOS, Scientific Linux and other Fedora-based distributions), and Mageia and OpenMandriva. In Fedora-based distribution
          the yum package manager is set to be replaced with dnf at some point in 2015 (starting with Fedora 22), but it
          looks like most of the dnf package management commands will remain mostly identical to the yum commands (the exceptions
          being "localinstall" which is not yet implemented in dnf, and "update" which has been deprecated in favour of "upgrade").
          Please note: current versions of Ubuntu use apt to manipulate deb packages. However, experimental versions of Ubuntu
          use the new snap package manager.
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>apt (deb)<br>Debian, Ubuntu</th>
                <th>zypp (rpm)<br>openSUSE</th>
                <th>yum/dnf (rpm)<br>Fedora, CentOS</th>
                <th>urpmi (rpm)<br>Mandriva, Mageia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row"><b>Managing software</b></td>
              </tr>
              <tr>
                <td scope="row">Install new software from package repository</td>
                <td>apt-get install pkg</td>
                <td>zypper install pkg</td>
                <td>yum install pkg</td>
                <td>urpmi pkg</td>
              </tr>
              <tr>
                <td scope="row">Install new software from package file</td>
                <td>dpkg -i <i>pkg</i></td>
                <td>zypper install <i>pkg</i></td>
                <td>yum localinstall <i>pkg</i></td>
                <td>urpmi <i>pkg</i></td>
              </tr>
              <tr>
                <td scope="row">Update existing software</td>
                <td>apt-get install <i>pkg</i></td>
                <td>zypper update -t package <i>pkg</i></td>
                <td>yum update <i>pkg</i></td>
                <td>urpmi <i>pkg</i></td>
              </tr>
              <tr>
                <td scope="row">Remove unwanted software</td>
                <td>apt-get remove <i>pkg</i></td>
                <td>zypper remove <i>pkg</i></td>
                <td>yum erase <i>pkg</i></td>
                <td>urpme <i>pkg</i></td>
              </tr>
              <tr>
                <td scope="row"><b>Updating the system</b></td>
              </tr>
              <tr>
                <td scope="row">Update package list</td>
                <td>apt-get update<br>aptitude update</td>
                <td>zypper refresh</td>
                <td>yum check-update</td>
                <td>urpmi.update -a</td>
              </tr>
              <tr>
                <td scope="row">Update system</td>
                <td>apt-get upgrade<br>aptitude safe-upgrade</td>
                <td>zypper update</td>
                <td>yum update</td>
                <td>urpmi --auto-select</td>
              </tr>
              <tr>
                <td scope="row"><b>Searching for packages</b></td>
              </tr>
              <tr>
                <td scope="row">Search by package name</td>
                <td>apt-cache search <i>pkg</i></td>
                <td>zypper search <i>pkg</i></td>
                <td>yum list <i>pkg</i></td>
                <td>urpmq <i>pkg</i></td>
              </tr>
              <tr>
                <td scope="row">Search by pattern</td>
                <td>apt-cache search <i>pattern</i></td>
                <td>zypper search -t pattern <i>pattern</i></td>
                <td>yum search <i>pattern</i></td>
                <td>urpmq --fuzzy <i>pkg</i></td>
              </tr>
              <tr>
                <td scope="row">Search by file name</td>
                <td>apt-file search <i>path</i></td>
                <td>zypper wp <i>file</i></td>
                <td>yum provides <i>file</i></td>
                <td>urpmf <i>file</i></td>
              </tr>
              <tr>
                <td scope="row">List installed packages</td>
                <td>dpkg -l</td>
                <td>zypper search -is</td>
                <td>rpm -qa</td>
                <td>rpm -qa</td>
              </tr>
              <tr>
                <td scope="row"><b>Configuring access to software repositories</b></td>
              </tr>
              <tr>
                <td scope="row">List repositories</td>
                <td>cat /etc/apt/sources.list</td>
                <td>zypper repos</td>
                <td>yum repolist</td>
                <td>urpmq --list-media</td>
              </tr>
              <tr>
                <td scope="row">Add repository</td>
                <td>(edit /etc/apt/sources.list)</td>
                <td>zypper addrepo <i>path</i> <i>name</i></td>
                <td>(add <i>repo</i> to /etc/yum.repos.d/)</td>
                <td>urpmi.addmedia <i>name</i> <i>path</i></td>
              </tr>
              <tr>
                <td scope="row">Remove repository</td>
                <td>(edit /etc/apt/sources.list)</td>
                <td>zypper removerepo <i>name</i></td>
                <td>(remove <i>repo</i> from /etc/yum.repos.d/)</td>
                <td>urpmi.removemedia <i>media</i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center block-heading">
        Slackware and Slackware Based Distributions
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          The table below lists package management utilities found in Slackware Linux and other Slackware-based distributions. As stated
          by Patrick Volkerding on several occasions, Slackware is unlikely to ever have any advanced (i.e. dependency-resolving)
          package management tool, so all installation, upgrade and removal tasks continue to be performed with pkgtools,
          a set of very simple scripts that haven't changed much in years. Nevertheless, slackpkg, an advanced package management
          tool which for years had been relegated to the unsupported "extra" repository, was finally made part of Slackware
          Linux 12.2. It's worth noting that some popular Slackware derivatives, such as VectorLinux, have standardised on
          slapt-get, another third-party utility imitating the behaviour of Debian's APT, while Zenwalk Linux has introduced
          its own package management tool called netpkg.
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>pkgtools<br>Slackware</th>
                <th>slackpkg<br>Slackware</th>
                <th>slapt-get<br>Vector</th>
                <th>netpkg<br>Zenwalk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                  <b>Managing software</b>
                </td>
              </tr>
              <tr>
                <td scope="row">Install new software from package repository</td>
                <td>--</td>
                <td>slackpkg install
                  <i>pkg</i>
                </td>
                <td>slapt-get --install
                  <i>pkg</i>
                </td>
                <td>netpkg
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Install new software from package file</td>
                <td>installpkg
                  <i>pkg</i>
                </td>
                <td>slackpkg install
                  <i>pkg</i>
                </td>
                <td>slapt-get --install
                  <i>pkg</i>
                </td>
                <td>netpkg
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Update existing software</td>
                <td>upgradepkg
                  <i>pkg</i>
                </td>
                <td>slackpkg upgrade
                  <i>pkg</i>
                </td>
                <td>slapt-get --install
                  <i>pkg</i>
                </td>
                <td>netpkg
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Remove unwanted software</td>
                <td>removepkg
                  <i>pkg</i>
                </td>
                <td>slackpkg remove
                  <i>pkg</i>
                </td>
                <td>slapt-get --remove
                  <i>pkg</i>
                </td>
                <td>netpkg remove
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Updating the system</b>
                </td>
              </tr>
              <tr>
                <td scope="row">Update package list</td>
                <td>--</td>
                <td>slackpkg update</td>
                <td>slapt-get --update</td>
                <td>(automatic)</td>
              </tr>
              <tr>
                <td scope="row">Update system</td>
                <td>--</td>
                <td>slackpkg upgrade-all</td>
                <td>slapt-get --upgrade</td>
                <td>netpkg upgrade</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Searching for packages</b>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by package name</td>
                <td>--</td>
                <td>slackpkg search
                  <i>pkg</i>
                  </i>
                </td>
                <td>slapt-get --search
                  <i>pkg</i>
                </td>
                <td>netpkg
                  <i>pkg</i>
                  <i>repo</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by pattern</td>
                <td>--</td>
                <td>slackpkg search
                  <i>pattern</i>
                </td>
                <td>slapt-get --search
                  <i>pattern</i>
                </td>
                <td>netpkg list | grep
                  <i>pattern</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by file name</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>netpkg
                  <i>file</i>
                  <i>repo</i>
                </td>
              </tr>
              <tr>
                <td scope="row">List installed packages</td>
                <td>ls /var/log/packages/</td>
                <td>ls /var/log/packages/</td>
                <td>slapt-get --installed</td>
                <td>netpk list I</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Configuring access to software repositories</b>
                </td>
              </tr>
              <tr>
                <td scope="row">List repositories</td>
                <td>--</td>
                <td>cat /etc/slackpkg/mirrors</td>
                <td>cat /etc/slapt-get/slapt-getrc</td>
                <td>netpkg mirror</td>
              </tr>
              <tr>
                <td scope="row">Add repository</td>
                <td>--</td>
                <td>(edit /etc/slackpkg/mirrors)</td>
                <td>(edit /etc/slapt-get/slapt-getrc)</td>
                <td>(edit /etc/netpkg.conf)</td>
              </tr>
              <tr>
                <td scope="row">Remove repository</td>
                <td>--</td>
                <td>(edit /etc/slackpkg/mirrors)</td>
                <td>(edit /etc/slapt-get/slapt-getrc)</td>
                <td>(edit /etc/netpkg.conf)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center block-heading">
        Independent Linux Distributions
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          In the next group we have a few (mostly) independent distributions that have been gaining popularity in recent years. Sabayon
          Linux, although derived from Gentoo, has introduced its own command-line package management utility called equo.
          Arch Linux's Pacman has been around for a long time and it's often considered one of the fastest package management
          utilities around. Conary, developed by rPath and popularised by Foresight Linux, is a completely new approach to
          package management, created by well-known ex-Red Hat engineers with many years of package management experience.
          In contrast, PiSi, originally developed by Pardus Linux, is a relatively new utility.
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>equo<br>Sabayon</th>
                <th>pacman<br>Arch</th>
                <th>conary<br>rPath, Foresight</th>
                <th>apk<br>Alpine</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                  <b>Managing software</b>
                </td>
              </tr>
              <tr>
                <td scope="row">Install new software from package repository</td>
                <td>equo install
                  <i>pkg</i>
                </td>
                <td>pacman -S
                  <i>pkg</i>
                </td>
                <td>conary update
                  <i>pkg</i>
                </td>
                <td>apk add
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Install new software from package file</td>
                <td>equo install
                  <i>pkg</i>
                </td>
                <td>pacman -U
                  <i>pkg</i>
                </td>
                <td>conary update
                  <i>pkg</i>
                </td>
                <td>apk add --force
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Update existing software</td>
                <td>equo install
                  <i>pkg</i>
                </td>
                <td>pacman -S
                  <i>pkg</i>
                </td>
                <td>conary update
                  <i>pkg</i>
                </td>
                <td>apk add --upgrade
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Remove unwanted software</td>
                <td>equo remove
                  <i>pkg</i>
                </td>
                <td>pacman -R
                  <i>pkg</i>
                </td>
                <td>conary erase
                  <i>pkg</i>
                </td>
                <td>apk del
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Updating the system</b>
                </td>
              </tr>
              <tr>
                <td scope="row">Update package list</td>
                <td>equo update</td>
                <td>pacman -Sy</td>
                <td>&nbsp;</td>
                <td>apk update</td>
              </tr>
              <tr>
                <td scope="row">Update system</td>
                <td>equo upgrade</td>
                <td>pacman -Su</td>
                <td>conary updateall</td>
                <td>apk upgrade</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Searching for packages</b>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by package name</td>
                <td>equo match
                  <i>pkg</i>
                </td>
                <td>pacman -Ss
                  <i>pkg</i>
                </td>
                <td>conary query
                  <i>pkg</i>
                </td>
                <td>apk search
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by pattern</td>
                <td>equo search
                  <i>pattern</i>
                </td>
                <td>pacman -Ss
                  <i>pattern</i>
                </td>
                <td>conary query
                  <i>pkg</i>
                </td>
                <td>apk search
                  <i>pattern</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by file name</td>
                <td>equo belongs
                  <i>file</i>
                </td>
                <td>pacman -Qo
                  <i>file</i>
                </td>
                <td>conary query --path
                  <i>path</i>
                </td>
                <td>--</td>
              </tr>
              <tr>
                <td scope="row">List installed packages</td>
                <td>equo q list installed</td>
                <td>pacman -Q</td>
                <td>conary query</td>
                <td>apk info</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Configuring access to software repositories</b>
                </td>
              </tr>
              <tr>
                <td scope="row">List repositories</td>
                <td>equo repoinfo</td>
                <td>cat /etc/pacman.conf</td>
                <td>&nbsp;</td>
                <td>cat /etc/apk/repositories</td>
              </tr>
              <tr>
                <td scope="row">Add repository</td>
                <td>&nbsp;</td>
                <td>(edit /etc/pacman.conf)</td>
                <td>&nbsp;</td>
                <td>setup-apkrepos</td>
              </tr>
              <tr>
                <td scope="row">Remove repository</td>
                <td>&nbsp;</td>
                <td>(edit /etc/pacman.conf)</td>
                <td>&nbsp;</td>
                <td>(edit /etc/apk/repositories)</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center block-heading">
        Distribution Agnostic Package Management
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          Besides standard package management utilities that most distributions use as part of their systems, there are also some distro-agnostic
          ones that have been deployed with various levels of success in certain distributions. Smart, originally developed
          by Conectiva, hasn't been in the news lately, but some users seem to prefer it over Mandriva's urpmi or openSUSE's
          zypper (it also supports Debian and Slackware-based systems). More recently it is Fedora's PackageKit that has
          been gaining momentum as a way to manage packages across distributions and architectures. Now included in many
          other distributions, PackageKit's pkgcon command-line utility is effectively a unified front-end to the native
          package management tools of Fedora, Ubuntu, openSUSE, Mandriva and other distributions.
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>smart<br>Mandriva, openSUSE</th>
                <th>pkgcon<br>Fedora, Ubuntu, openSUSE, Mandriva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                  <b>Managing software</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Install new software from package repository</td>
                <td>smart install
                  <i>pkg</i>
                </td>
                <td>pkcon install
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Install new software from package file</td>
                <td>smart install
                  <i>pkg</i>
                </td>
                <td>pkcon install-file
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Update existing software</td>
                <td>smart install
                  <i>pkg</i>
                </td>
                <td>pkcon update
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Remove unwanted software</td>
                <td>smart remove
                  <i>pkg</i>
                </td>
                <td>pkcon remove
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Updating the system</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Update package list</td>
                <td>smart update</td>
                <td>pkcon refresh</td>
              </tr>
              <tr>
                <td scope="row">Update system</td>
                <td>smart upgrade</td>
                <td>pkcon upgrade</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Searching for packages</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Search by package name</td>
                <td>smart search
                  <i>pkg</i>
                </td>
                <td>pkcon search name
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by pattern</td>
                <td>smart search
                  <i>pattern</i>
                </td>
                <td>pkcon search details
                  <i>pattern</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by file name</td>
                <td>smart query
                  <i>file</i>
                </td>
                <td>pkcon what-provides
                  <i>file</i>
                </td>
              </tr>
              <tr>
                <td scope="row">List installed packages</td>
                <td>smart query --installed</td>
                <td>pkcon search name pkg | grep Installed</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Configuring access to software repositories</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">List repositories</td>
                <td>smart channel --show</td>
                <td>pkcon repo-list</td>
              </tr>
              <tr>
                <td scope="row">Add repository</td>
                <td>smart channel --add
                  <i>name</i>
                  <i>path</i>
                </td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Remove repository</td>
                <td>smart channel --remove
                  <i>name</i>
                </td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center block-heading">
        Source Based Distributions
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          Next, a table for source-based distributions. <a href="gentoo">Gentoo</a>'s Portage is well-documented and widely
          used, but other distributions that are designed to be built from scratch don't often feature in the Linux media,
          so their package management systems are not particularly well-known. <a href="sorcerer">Sorcerer</a>, which existed
          even before Gentoo Linux was conceived, uses Bash scripts to "cast spells" or download, install and compile packages.
          Sorcerer was later forked into <a href="lunar">Lunar</a> Linux and <a href="sourcemage">Source Mage</a> GNU/Linux,
          both of which are included in the table below. Unfortunately, Sorcerer doesn't offer much in terms of online documentation
          so it has been omitted for now.
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>portage<br>Gentoo</th>
                <th>lunar<br>Lunar</th>
                <th>sorcery<br>Source Mage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                  <b>Managing software</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Install new software from package repository</td>
                <td>emerge
                  <i>pkg</i>
                </td>
                <td>lin
                  <i>pkg</i>
                </td>
                <td>cast
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Install new software from package file</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Update existing software</td>
                <td>emerge
                  <i>pkg</i>
                </td>
                <td>lin
                  <i>pkg</i>
                </td>
                <td>cast
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Remove unwanted software</td>
                <td>emerge -aC
                  <i>pkg</i>
                </td>
                <td>lrm
                  <i>pkg</i>
                </td>
                <td>dispel
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Updating the system</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Update package list</td>
                <td>emerge --sync</td>
                <td>lin moonbase</td>
                <td>scribe update</td>
              </tr>
              <tr>
                <td scope="row">Update system</td>
                <td>emerge -NuDa world</td>
                <td>lunar update</td>
                <td>sorcery upgrade</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Searching for packages</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Search by package name</td>
                <td>emerge --search
                  <i>pkg</i>
                </td>
                <td>lvu search
                  <i>pkg</i>
                </td>
                <td>gaze search -name
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by pattern</td>
                <td>emerge --search
                  <i>pattern</i>
                </td>
                <td>lvu search
                  <i>pattern</i>
                </td>
                <td>gaze search
                  <i>pattern</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by file name</td>
                <td>equery belongs
                  <i>pkg</i>
                </td>
                <td>&nbsp;</td>
                <td>gaze from
                  <i>file</i>
                </td>
              </tr>
              <tr>
                <td scope="row">List installed packages</td>
                <td>qlist -I</td>
                <td>lvu installed</td>
                <td>gaze installed</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Configuring access to software repositories</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">List repositories</td>
                <td>layman -L</td>
                <td>--</td>
                <td>scribe index</td>
              </tr>
              <tr>
                <td scope="row">Add repository</td>
                <td>layman -a
                  <i>repo</i>
                </td>
                <td>--</td>
                <td>scribe add
                  <i>repo</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Remove repository</td>
                <td>layman -d
                  <i>repo</i>
                </td>
                <td>--</td>
                <td>scribe remove
                  <i>repo</i>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center block-heading">
        Nix OS (nix), Void (xbps) and Ubuntu (snap)
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          Some distributions, e.g. <a href="nixos">NixOS</a>, <a href="void">Void</a> and <a href="ubuntu">Ubuntu</a> have
          been developing their own binary package management systems with some interesting and innovative features. Here
          is a summary of useful commands as used by these projects for managing packages.
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>nix<br>NixOS</th>
                <th>xbps<br>Void</th>
                <th>snap<br>Ubuntu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                  <b>Managing software</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Install new software from package repository</td>
                <td>nix-env -i
                  <i>pkg</i>
                </td>
                <td>xbps-install
                  <i>pkg</i>
                </td>
                <td>snap install
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Install new software from package file</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
              </tr>
              <tr>
                <td scope="row">Update existing software</td>
                <td>nix-env -u
                  <i>pkg</i>
                </td>
                <td>xbps-install -u
                  <i>pkg</i>
                </td>
                <td>snap refresh
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Remove unwanted software</td>
                <td>nix-env -e
                  <i>pkg</i>
                </td>
                <td>xbps-remove
                  <i>pkg</i>
                </td>
                <td>snap remove
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Updating the system</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Update package list</td>
                <td>nix-channel --update</td>
                <td>xbps-install -S</td>
                <td>--</td>
              </tr>
              <tr>
                <td scope="row">Update system</td>
                <td>nix-env -u</td>
                <td>xbps-install -u</td>
                <td>--</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Searching for packages</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Search by package name</td>
                <td>nix-env -qa
                  <i>pkg</i>
                </td>
                <td>xbps-query -Rs
                  <i>pkg</i>
                </td>
                <td>snap find
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by pattern</td>
                <td>nix-env -qa
                  <i>pattern</i>
                </td>
                <td>xbps-query -Rs
                  <i>pattern</i>
                </td>
                <td>snap find | grep
                  <i>pattern</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by file name</td>
                <td>--</td>
                <td>xbps-query -o
                  <i>file</i>
                </td>
                <td>--</td>
              </tr>
              <tr>
                <td scope="row">List installed packages</td>
                <td>nix-env -q</td>
                <td>xbps-query -l</td>
                <td>snap list</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Configuring access to software repositories</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">List repositories</td>
                <td>nix-channel --list</td>
                <td>xbps-query -L</td>
                <td>--</td>
              </tr>
              <tr>
                <td scope="row">Add repository</td>
                <td>nix-channel --add url
                  <i>name</i>
                </td>
                <td>(add to /etc/xbps/repo.d/ or /usr/share/xbps/repo.d/)</td>
                <td>--</td>
              </tr>
              <tr>
                <td scope="row">Remove repository</td>
                <td>nix-channel --remove
                  <i>name</i>
                </td>
                <td>(edit /etc/xbps/repo.d/ and /usr/share/xbps/repo.d/)</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center block-heading">
        FreeBSD
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        <div>
          Finally, a table for <a href="freebsd">FreeBSD</a>, a popular operating system offering both binary and source
          package management.
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>packages<br>FreeBSD < 10.0</th>
                <th>packages<br>FreeBSD 10.0+</th>
                <th>ports<br>FreeBSD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                  <b>Managing software</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Install new software from package repository</td>
                <td>pkg_add -r
                  <i>package</i>
                </td>
                <td>pkg install
                  <i>package</i>
                </td>
                <td>cd
                  <i>port_dir</i> &amp;&amp; make &amp;&amp; make install</td>
              </tr>
              <tr>
                <td scope="row">Install new software from package file</td>
                <td>pkg_add
                  <i>path_to_package</i>
                </td>
                <td>pkg add
                  <i>path_to_package</i>
                </td>
                <td>--</td>
              </tr>
              <tr>
                <td scope="row">Update existing software</td>
                <td>pkg_add
                  <i>path_to_package</i>
                </td>
                <td>pkg install
                  <i>path_to_package</i>
                </td>
                <td>portupgrade -R
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Remove unwanted software</td>
                <td>pkg_delete
                  <i>pkg</i>
                </td>
                <td>pkg remove
                  <i>pkg</i>
                </td>
                <td>pkg_delete
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Updating the system</b>
                </td>
                <td>freebsd-update fetch install</td>
                <td>freebsd-update fetch install</td>
                <td>portsnap fetch install</td>
              </tr>
              <tr>
                <td scope="row">Update package list</td>
                <td>&nbsp;</td>
                <td>pkg update</td>
                <td>csup -L 2 -h cvsup.FreeBSD.org
                  <i>path_to_supfile</i><br>portsnap update</td>
              </tr>
              <tr>
                <td scope="row">Update system</td>
                <td>&nbsp;</td>
                <td>pkg upgrade</td>
                <td>portupgrade -a<br>portmanager -u<br>portmaster -a</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Searching for packages</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">Search by package name</td>
                <td>&nbsp;</td>
                <td>pkg search
                  <i>package</i>
                </td>
                <td>cd /usr/ports &amp;&amp; make search
                  <i>pkg</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by pattern</td>
                <td>&nbsp;</td>
                <td>pkg search
                  <i>pattern</i>
                </td>
                <td>cd /usr/ports &amp;&amp; make search
                  <i>pattern</i>
                </td>
              </tr>
              <tr>
                <td scope="row">Search by file name</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">List installed packages</td>
                <td>pkg_info</td>
                <td>pkg info</td>
                <td>pkg_info</td>
              </tr>
              <tr>
                <td scope="row">
                  <b>Configuring access to software repositories</b>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td scope="row">List repositories</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
              </tr>
              <tr>
                <td scope="row">Add repository</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
              </tr>
              <tr>
                <td scope="row">Remove repository</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 block">
        Copyright © 2017 DistroWatch.com.<br>

        Verbatim copying and distribution of this entire article is permitted in any medium, provided this copyright notice is preserved.
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
