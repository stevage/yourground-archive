(function(e){function t(t){for(var i,n,o=t[0],c=t[1],l=t[2],p=0,u=[];p<o.length;p++)n=o[p],r[n]&&u.push(r[n][0]),r[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},r={app:0},s=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"07bb":function(e,t,a){},"15e4":function(e,t,a){},"1be9":function(e,t,a){"use strict";var i=a("65f6"),r=a.n(i);r.a},"2c54":function(e,t,a){"use strict";var i=a("a69e"),r=a.n(i);r.a},5256:function(e,t,a){"use strict";var i=a("15e4"),r=a.n(i);r.a},5490:function(e,t,a){"use strict";var i=a("bdf3"),r=a.n(i);r.a},"56d7":function(e,t,a){"use strict";a.r(t);var i=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex flex-column vh-100 avenir",attrs:{id:"app"}},[a("div",{staticClass:"bb b--gray bg-washed-yellow",attrs:{id:"top"}}),a("div",{staticClass:"flex flex-auto",attrs:{id:"middle"}},[a("div",{staticClass:"br b--light-gray overflow-auto pa2-ns",class:{collapsed:!e.sidebarOpen},attrs:{id:"sidebar"}},[a("div",{staticClass:"container br bg-white b--light-gray overflow-auto pa2 bw2"},[a("About",{on:{close:function(t){e.sidebarOpen=!1}}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.sidebarOpen,expression:"!sidebarOpen"}],staticClass:"relative br b--gray bw2",staticStyle:{width:"20px"},attrs:{id:"sidebar-rim"},on:{click:function(t){e.sidebarOpen=!0}}}),a("div",{staticClass:"relative flex-auto",attrs:{id:"map-container"}},[a("Map"),a("div",{staticClass:"absolute bg-white f3 br bt bb br--right br-100 b--magenta bw1 magenta pa1 pointer grow fw8",staticStyle:{"z-index":"100"},attrs:{id:"sidebarToggle"},on:{click:function(t){e.sidebarOpen=!e.sidebarOpen}}},[e.sidebarOpen?e._e():a("span",[e._v("→")]),e.sidebarOpen?a("span",[e._v("←")]):e._e()]),a("div",{staticClass:"absolute h-100 w-100",attrs:{id:"overlay"}},[a("Legend")],1)],1)]),a("div",{staticClass:"bt b--light-gray flex-none",attrs:{id:"bottom"}})])},s=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"absolute absolute--fill",attrs:{id:"map"}})},o=[],c=a("b7d4"),l=a.n(c),d=(a("5e64"),a("602d"));const p=new i["a"];var u=a("885b"),b=a.n(u),v=(a("c307"),{async mounted(){l.a.accessToken="pk.eyJ1IjoiY3Jvd2RzcG90MSIsImEiOiIwTFItekZ3In0.M_0CqFroH04TUc-K1_CHXQ";const e=new l.a.Map({container:"map",center:[144.96046,-37.81739],zoom:12,style:"mapbox://styles/crowdspot1/ckpxavg6f0d3y18p81ddb4vbo"});d["a"].init(e,l.a),window.map=e,this.map=e,window.app.Map=this,await e.U.onLoad(),this.initMapContent(e)},methods:{initMapContent(e){function t(t){e.U.setData("hovered",{type:"Feature",properties:{},geometry:{type:"Point",coordinates:t?[...t.geometry.coordinates]:[]}})}const a=new b.a({accessToken:l.a.accessToken,mapboxgl:l.a});a.addTo(this.map),e.U.addGeoJSON("selected"),e.U.addCircle("selected-circle","selected",{circleStrokeColor:"white",circleStrokeWidth:4,circleRadius:10,circleColor:"transparent"}),e.U.addGeoJSON("hovered"),e.U.addCircle("hovered-circle","hovered",{circleStrokeColor:"white",circleStrokeWidth:2,circleRadius:6,circleColor:"transparent"});const i=["yg-final-archivemap-1-unsafe","yg-final-archivemap-1-safe"];let r;e.U.hoverPointer(i),e.on("mousemove",a=>{const r=e.queryRenderedFeatures(a.point,{layers:i});console.log(r),t(r[0])}),e.U.clickLayer(i,({features:t})=>{const a=t[0],i=a.properties,s=i.Age.match(/[0-9]/)?`${i.Age} years old`:"",n=i.Gender.match(/no response/i)?"":i.Gender,o=i.Minority.match(/no response/i)?"":i.Minority,c=[s,n,o].filter(Boolean).join(", "),d=`\n                        <h4 class="stress-${i.Stress_rating}">${i.Name}</h4>\n                        <blockquote>\n                        ${i.Description}\n                        </blockquote>`+`<p class="demographic">${c}</p>`;r&&r.remove(),r=new l.a.Popup({closeButton:!1}),r.setHTML(d),r.setLngLat(a.geometry.coordinates),r.addTo(e),e.U.setData("selected",{type:"Feature",properties:{},geometry:{type:"Point",coordinates:[...a.geometry.coordinates]}}),e.panTo(a.geometry.coordinates)})}}}),f=v,h=(a("5490"),a("2877")),m=Object(h["a"])(f,n,o,!1,null,null,null);m.options.__file="Map.vue";var g=m.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.imageUrl?a("img",{staticClass:"image",attrs:{src:e.imageUrl}}):e._e(),e.feature?a("table",{staticClass:"bg-white b--gray ba helvetica ma1",attrs:{id:"FeatureInfo"}},e._l(e.p,function(t,i){return a("tr",[-1===e.ignoreProps.indexOf(i)?[a("th",{staticClass:"f6"},[e._v(e._s(i))]),a("td",{staticClass:"f6"},[e._v(e._s(t))])]:e._e()],2)}),0):e._e()])},y=[],w={name:"FeatureInfo",data:()=>({feature:void 0,ignoreProps:["id","Longitude","Latitude","image_url"]}),computed:{p(){return this.feature&&this.feature.properties},imageUrl(){return this.p&&this.p.image_url}},created(){window.app.FeatureInfo=this,p.$on("select-feature",e=>this.feature=e)}},C=w,k=(a("1be9"),Object(h["a"])(C,_,y,!1,null,"18853381",null));k.options.__file="FeatureInfo.vue";var O=k.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"relative h-100",staticStyle:{"pointer-events":"none"},attrs:{id:"Legend"}},[a("div",{staticClass:"bg-white b--gray ba shadow-3 br2 pa2 ma2-ns bottom absolute bottom-0 bottom-2-ns",staticStyle:{background:"#333",color:"#ddd","z-index":"98"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"pill",staticStyle:{background:"#c70579"}}),e._v("5 (unsafe)")]),a("div",{staticClass:"item"},[a("div",{staticClass:"pill",staticStyle:{background:"#e24aab"}}),e._v("4")]),a("div",{staticClass:"item"},[a("div",{staticClass:"pill",staticStyle:{background:"#dd6fba"}}),e._v("3")]),a("div",{staticClass:"item"},[a("div",{staticClass:"pill",staticStyle:{background:"#d894ca"}}),e._v("2")]),a("div",{staticClass:"item"},[a("div",{staticClass:"pill",staticStyle:{background:"#d4b9da"}}),e._v("1")]),a("div",{staticClass:"item"},[a("div",{staticClass:"pill",staticStyle:{background:"white"}}),e._v("N/A")]),a("div",{staticClass:"item"},[a("div",{staticClass:"pill",staticStyle:{background:"#66bd47"}}),e._v("0 (safe)")])])])}],M={name:"Legend",data:()=>({}),created(){window.Legend=this}},$=M,L=(a("2c54"),Object(h["a"])($,S,x,!1,null,"4c2becc4",null));L.options.__file="Legend.vue";var j=L.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"About"}},[a("div",{staticClass:"map-overlay ph2",attrs:{id:"features"}},[a("img",{staticStyle:{width:"191px",height:"41px",margin:"10px"},attrs:{src:"https://cdn.glitch.com/63aef6b6-1a72-482c-8d10-401c6c379845%2FFinal-YG_LOGO_horizontal_black.png?v=1623994256727"}}),a("h3",[e._v("Stress Map Visualisation")]),a("p",[e._v("The coloured markers on the map indicate the level of stress (1-5 scale) experienced by participants as part of their YourGround Safe or Unsafe Spot submission.")]),e._m(0),a("p",{staticClass:"i tc mt4"},[e._v("Your Sport. Your Leisure. Your Play. Your Place.")]),a("div",{staticClass:"center w4"},[a("a",{staticClass:"dib tc center a f6 link dim ba ph4 pv3 mb2 dark-blue prevent only-mobile",on:{click:function(t){e.$emit("close")}}},[e._v("See map")])]),a("img",{staticClass:"center",attrs:{src:"https://cdn.glitch.com/63aef6b6-1a72-482c-8d10-401c6c379845%2FCrowdSpot_Monash_XYX_logo_archive_map_3.svg?v=1629776466655"}})])])},U=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"i"},[a("a",{attrs:{href:"https://yourground.org",target:"blank"}},[e._v("YourGround")]),e._v(" is a collaboration between CrowdSpot and Monash University's XYX Lab to crowdsource women and gender-diverse people safety related experiences of public and recreational space.")])}],P={name:"About",data:()=>({}),created(){window.About=this}},F=P,A=Object(h["a"])(F,T,U,!1,null,"ac1bdeec",null);A.options.__file="About.vue";var I=A.exports;window.app={};var Y={name:"app",components:{Map:g,FeatureInfo:O,Legend:j,About:I},data(){return{sidebarOpen:!0}},created(){window.app.App=this,p.$on("select-feature",()=>this.sidebarOpen=!0)},watch:{sidebarOpen(){this.$nextTick(()=>window.map.resize())}}};a("948e");var G=Y,E=(a("5256"),a("b0a0"),Object(h["a"])(G,r,s,!1,null,"6d0b0c74",null));E.options.__file="App.vue";var z=E.exports;i["a"].config.productionTip=!1,new i["a"]({render:e=>e(z)}).$mount("#app")},"65f6":function(e,t,a){},a69e:function(e,t,a){},b0a0:function(e,t,a){"use strict";var i=a("07bb"),r=a.n(i);r.a},bdf3:function(e,t,a){}});
//# sourceMappingURL=app.ad81e10b.js.map