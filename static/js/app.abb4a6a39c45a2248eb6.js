webpackJsonp([0],[,,,function(t,e,r){"use strict";var s=r(1),n=r(30),a=r(22),o=r.n(a),i=r(23),l=r.n(i);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:l.a},{path:"/distro",name:"Distro",component:o.a}]})},,function(t,e){},function(t,e){},function(t,e,r){function s(t){r(15)}var n=r(0)(r(9),r(25),s,null,null);t.exports=n.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(1),n=r(7),a=r.n(n),o=r(3),i=r(4),l=r(5),c=(r.n(l),r(6));r.n(c);s.a.config.productionTip=!1,s.a.use(i.a),new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:a.a}})},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(21),n=r.n(s);e.default={name:"app",components:{Navbar:n.a}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"announcement",data:function(){return{announcements:[]}},created:function(){this.announcements=[{date:"2017-09-06",releaseType:"Distribution",name:"Parted Magic",version:"2017_09_05",text:"The project's latest release, Parted Magic2017_09_95, ships with GParted0.29.0, version4.12.9 of the Linux kernel and packages to support both Btrfs and ZFS.",image:"parted-magic.jpg"},{date:"2017-09-06",releaseType:"Distribution",name:"Parted Magic",version:"2017_09_05",text:"The project's latest release, Parted Magic2017_09_95, ships with GParted0.29.0, version4.12.9 of the Linux kernel and packages to support both Btrfs and ZFS.",image:"parted-magic.jpg"}]}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"latest",data:function(){return{releases:[]}},created:function(){this.releases=[{id:1,date:"01/01",name:"Test",version:"1.0.0"},{id:1,date:"01/01",name:"Test",version:"1.0.0"},{id:1,date:"01/01",name:"Test",version:"1.0.0"},{id:1,date:"01/01",name:"Test",version:"1.0.0"},{id:1,date:"01/01",name:"Test",version:"1.0.0"}]}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navbar"}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"distro",data:function(){return{distro:{id:1,name:"FreeBSD"}}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(20),n=r.n(s),a=r(19),o=r.n(a);e.default={name:"home",data:function(){return{title:"Welcome to Distrowatch"}},components:{Latest:n.a,Announcement:o.a}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,r){function s(t){r(17)}var n=r(0)(r(10),r(28),s,null,null);t.exports=n.exports},function(t,e,r){var s=r(0)(r(11),r(27),null,null,null);t.exports=s.exports},function(t,e,r){function s(t){r(16)}var n=r(0)(r(12),r(26),s,null,null);t.exports=n.exports},function(t,e,r){function s(t){r(18)}var n=r(0)(r(13),r(29),s,null,null);t.exports=n.exports},function(t,e,r){var s=r(0)(r(14),r(24),null,null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",[r("b-col",{attrs:{lg:"2",md:"2"}},[r("span",{attrs:{for:""}},[t._v("Latest Distros")]),t._v(" "),r("Latest")],1),t._v(" "),r("b-col",{attrs:{lg:"8",md:"8"}},[r("Announcement")],1),t._v(" "),r("b-col",{attrs:{lg:"2",md:"2"}},[r("span",{attrs:{for:""}},[t._v("Latest Distros")]),t._v(" "),r("Latest")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Navbar"),t._v(" "),r("b-container",{staticClass:"main"},[r("router-view")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{toggleable:"md"}},[r("b-nav-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),r("b-navbar-brand",{attrs:{to:{name:"Home"}}},[t._v("DistroWatch")]),t._v(" "),r("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[r("b-nav-form",[r("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",type:"text",placeholder:"Search"}}),t._v(" "),r("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),t._v(" "),r("b-nav",{attrs:{"is-nav-bar":""}},[r("b-nav-item",{attrs:{to:{name:"Distro"}}},[t._v("FreeBSD")])],1),t._v(" "),r("b-nav",{staticClass:"ml-auto",attrs:{"is-nav-bar":""}},[r("b-nav-item-dropdown",{attrs:{text:"Main topics",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Headlines")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("DW Weekly")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Comments")]),t._v(" "),r("hr"),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Packages")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Package Management")]),t._v(" "),r("hr"),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Glossary")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("FAQ")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Mobile Site")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"Other Stuff",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sitemap")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Major Distributions")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Submit Distribution")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Upcoming Releases")])],1),t._v(" "),r("b-nav-item-dropdown",{attrs:{text:"About",right:""}},[r("b-dropdown-item",{attrs:{href:"#"}},[t._v("About DistroWatch")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Page Hit Ranking")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("Advertise")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"}},[t._v("CryptoCoin.cc")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.releases,function(e){return r("b-row",{key:e.id},[r("b-col",{attrs:{lg:"3",md:"3",sm:"3",xs:"3"}},[t._v(t._s(e.date))]),t._v(" "),r("b-col",{attrs:{lg:"9",md:"9",sm:"9",xs:"9"}},[t._v(t._s(e.name)+" - "+t._s(e.version))])],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",t._l(t.announcements,function(e){return r("div",{key:e.id,staticClass:"well well-dw"},[r("b-row",[r("b-col",{staticClass:"box-title",attrs:{lg:"2",md:"2",sm:"3",xs:"3"}},[t._v(t._s(e.date))]),t._v(" "),r("b-col",{staticClass:"box-title",attrs:{lg:"10",md:"10",sm:"9",xs:"9"}},[t._v(t._s(e.releaseType)+" release: "+t._s(e.name)+" "+t._s(e.version))])],1),t._v(" "),r("b-row",[r("b-col",{attrs:{lg:"2",md:"2",sm:"3",xs:"3"}},[t._v(t._s(e.image))]),t._v(" "),r("b-col",{attrs:{lg:"10",md:"10",sm:"9",xs:"9"}},[t._v(t._s(e.text))])],1)],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",{staticClass:"text-center"},[r("b-col",{attrs:{xs:"12",sm:"12",md:"3",lg:"3"}},[t._v(t._s(t.distro.id))]),t._v(" "),r("b-col",{attrs:{xs:"12",sm:"12",md:"9",lg:"9"}},[t._v(t._s(t.distro.name))])],1),t._v(" "),r("b-row",[t._v(" ")]),t._v(" "),r("b-row",[r("b-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"12"}},[t._v("Tipo de SO: BSD")]),t._v(" "),r("b-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"12"}},[t._v("Baseada em: Independent")]),t._v(" "),r("b-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"12"}},[t._v("Origem: USA")]),t._v(" "),r("b-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"12"}},[t._v("Arquitetura: arm, arm64, armel, i386, ia64, mips, mipsel, sparc64, pc98, powerpc, powerpc64, ps3, x86_64, xbox")]),t._v(" "),r("b-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"12"}},[t._v("Ambiente de Desktop: AfterStep, Awesome, Blackbox, Enlightenment, Fluxbox, GNOME, IceWM, KDE, LXDE, Openbox, WMaker, Xfce")]),t._v(" "),r("b-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"12"}},[t._v("Categoria: Desktop, Firewall, Raspberry Pi, Server")]),t._v(" "),r("b-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"12"}},[t._v("Status: Ativa")]),t._v(" "),r("b-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"12"}},[t._v("Popularidade: 24 (377 acessos por dia) ")])],1)],1)},staticRenderFns:[]}}],[8]);
//# sourceMappingURL=app.abb4a6a39c45a2248eb6.js.map