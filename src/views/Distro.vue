<template>
  <div>
    <b-row>
      <b-col class="text-center" xs='12' sm='12' md='3' lg='3'>{{distro.id}}</b-col>
      <b-col class="text-center" xs='12' sm='12' md='6' lg='6'>{{distro.name}}</b-col>
      <b-col class="text-center" xs='12' sm='12' md='3' lg='3'>&nbsp;</b-col>
    </b-row>
    <b-row>&nbsp;</b-row>
    <b-row>
      <b-col xs='12' sm='12' md='12' lg='12'>Tipo de SO: BSD</b-col>
      <b-col xs='12' sm='12' md='12' lg='12'>Baseada em: Independent</b-col>
      <b-col xs='12' sm='12' md='12' lg='12'>Origem: USA</b-col>
      <b-col xs='12' sm='12' md='12' lg='12'>Arquitetura: arm, arm64, armel, i386, ia64, mips, mipsel, sparc64, pc98, powerpc, powerpc64, ps3, x86_64, xbox</b-col>
      <b-col xs='12' sm='12' md='12' lg='12'>Ambiente de Desktop: AfterStep, Awesome, Blackbox, Enlightenment, Fluxbox, GNOME, IceWM, KDE, LXDE, Openbox, WMaker, Xfce</b-col>
      <b-col xs='12' sm='12' md='12' lg='12'>Categoria: Desktop, Firewall, Raspberry Pi, Server</b-col>
      <b-col xs='12' sm='12' md='12' lg='12'>Status: Ativa</b-col>
      <b-col xs='12' sm='12' md='12' lg='12'>Popularidade: 24 (377 acessos por dia) </b-col>
    </b-row>
    <b-row>&nbsp;</b-row>
    <b-tabs pills>
      <b-tab title="Summary" active>
        <DistroSummary />
      </b-tab>
      <b-tab title="News">
        <DistroNews />
      </b-tab>
      <b-tab title="Packages">
        <DistroPackages />
      </b-tab>
      <b-tab title="Reviews">
        <DistroReviews />
      </b-tab>
    </b-tabs>

  </div>
</template>
<script>
import DistroSummary from '@/components/distro/Summary'
import DistroNews from '@/components/distro/News'
import DistroPackages from '@/components/distro/Packages'
import DistroReviews from '@/components/distro/Reviews'
export default {
  name: 'distro',
  data () {
    return {
      distro: { id: 1, name: 'FreeBSD' }
    }
  },
  components: { DistroSummary, DistroNews, DistroPackages, DistroReviews }
}
</script>
<style>
</style>
