(function(e){function t(t){for(var s,n,o=t[0],c=t[1],l=t[2],p=0,d=[];p<o.length;p++)n=o[p],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(s=!1)}s&&(i.splice(t--,1),e=n(n.s=r[0]))}return e}var s={},a={app:0},i=[];function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=s,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var s=r("85ec"),a=r.n(s);a.a},"0534":function(e,t,r){},"1e33":function(e){e.exports=JSON.parse('[{"id":"stamnia","name":"stamnia","value":0,"max":5,"tick":0,"desc":"needed to execute actions","procent":0,"color":"#baa329"},{"id":"scrap","name":"scrap","value":0,"max":5,"tick":0,"desc":"could be usefull","procent":0,"color":"#8f8f8f"},{"id":"code","name":"code","value":0,"max":5,"tick":0,"desc":"0101010100010","procent":0,"color":"#d4d4d4"},{"id":"electronic","name":"electronic","value":0,"max":5,"tick":0,"desc":"tz tz tz","procent":0,"color":"#33661e"},{"id":"metal","name":"metal","value":0,"max":5,"tick":0,"desc":"it shines","procent":0,"color":"#454545"},{"id":"drones","name":"drones","value":0,"max":5,"tick":0,"desc":"needed to be programmed","procent":0,"color":"#000000"},{"id":"sdrones","name":"scrap drones","value":0,"max":5,"tick":0,"desc":"collects scrap","procent":0,"color":"#262626","action":"collect_scrap","rate":0.1},{"id":"rdrones","name":"recylce drones","value":0,"max":5,"tick":0,"desc":"recylces scrap","procent":0,"color":"#002109","action":"recylce","rate":0.1}]')},"290a":function(e){e.exports=JSON.parse('[{"id":"shelter","name":"shelter","get":[{"key":"max","target":"stamnia","type":"resources","value":5},{"get":{"value":1,"target":"stamnia"},"target":"rest","type":"actions"}],"cost":[{"target":"scrap","type":"resources","value":5}],"time":1},{"id":"recycle","name":"recycle","time":1,"unlock":[{"id":"recycle","type":"actions"}]},{"id":"scrap_pile","name":"scrap pile","get":[{"key":"max","target":"scrap","type":"resources","value":5},{"get":{"value":0.2,"target":"scrap"},"target":"collect_scrap","type":"actions"}],"cost":[{"target":"scrap","type":"resources","value":5}],"time":5},{"id":"computer","name":"computer","get":[{"key":"max","target":"code","type":"resources","value":5}],"cost":[{"target":"metal","type":"resources","value":2.5},{"target":"electronic","type":"resources","value":1}],"time":1},{"id":"metal_scanner","name":"metal_scanner","get":[{"get":{"value":1,"target":"scrap"},"target":"collect_scrap","type":"actions"}],"cost":[{"target":"metal","type":"resources","value":2},{"target":"electronic","type":"resources","value":1}],"time":1},{"id":"mixer","name":"mixer","get":[{"get":{"value":0.2,"target":"electronic"},"target":"recylce","type":"actions"},{"get":{"value":0.5,"target":"metal"},"target":"recylce","type":"actions"}],"cost":[{"target":"metal","type":"resources","value":3},{"target":"electronic","type":"resources","value":2}],"time":1},{"id":"ram","name":"ram","get":[{"key":"max","target":"code","type":"resources","value":10}],"cost":[{"target":"electronic","type":"resources","value":4}],"time":2},{"id":"scripts","name":"scripts","get":[{"key":"tick","target":"code","type":"resources","value":0.2}],"cost":[{"target":"code","type":"resources","value":5}],"time":1},{"id":"workbench","name":"workbench","get":[{"key":"max","target":"drones","type":"resources","value":5}],"cost":[{"target":"metal","type":"resources","value":5}],"time":1},{"id":"bed","name":"bed","get":[{"key":"max","target":"stamnia","type":"resources","value":5},{"get":{"value":1,"target":"stamnia"},"target":"rest","type":"actions"}],"cost":[{"target":"scrap","type":"resources","value":10}],"time":1},{"id":"crafting_arm","name":"crafting_arm","get":[{"get":{"value":1,"target":"drones"},"target":"build_drone","type":"actions"}],"cost":[{"target":"metal","type":"resources","value":10},{"target":"electronic","type":"resources","value":2}],"time":1},{"id":"magnets","name":"magnets","get":[{"get":{"value":1,"target":"metal"},"target":"collect_scrap","type":"actions"},{"get":{"value":0.1,"target":"electronic"},"target":"collect_scrap","type":"actions"},{"get":{"value":2,"target":"scrap"},"target":"collect_scrap","type":"actions"}],"cost":[{"target":"metal","type":"resources","value":5},{"target":"electronic","type":"resources","value":2}],"time":1},{"id":"smelter","name":"smelter","get":[{"get":{"value":0.4,"target":"electronic"},"target":"recylce","type":"actions"}],"cost":[{"target":"metal","type":"resources","value":8},{"target":"electronic","type":"resources","value":1}],"time":2},{"id":"metal_chest","name":"metal_chest","get":[{"key":"max","target":"metal","type":"resources","value":5},{"key":"max","target":"electronic","type":"resources","value":1}],"cost":[{"target":"metal","type":"resources","value":5}],"time":3}]')},"2b12":function(e,t,r){},4555:function(e,t,r){"use strict";var s=r("9429"),a=r.n(s);a.a},"53e2":function(e,t,r){"use strict";var s=r("6026"),a=r.n(s);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Index")],1)},i=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"kiste"},[r("Resources"),r("Actions",{ref:"actions"}),r("Upgrades"),r("Logs",{attrs:{items:e.player.logs}})],1)},o=[],c=(r("c975"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("Resources:")]),e._l(e.getList(),(function(e){return r("div",{key:e.id},[r("Resource",{attrs:{item:e}})],1)}))],2)}),l=[];r("4de4"),r("7db0");function u(e,t){return e.filter((function(e){return-1!=t.indexOf(e.id)}))}function p(e,t){return!!(0<e.length&&-1!=e.indexOf(t))}function d(e,t){return e.find((function(e){return e.id==t}))}function g(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=0;a<e.cost.length;a++){var i=d(t.lists.resources,e.cost[a].target);if(r!=i.id&&i.value<e.cost[a].value*s)return!0}return!1}function m(e,t){for(var r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=0;a<e.get.length;a++)r=d(t.lists.resources,e.get[a].target),r.value+e.get[a].value*s>r.max?r.value=r.max:r.value+=e.get[a].value*s,r.procent=r.value/r.max*100}function v(e,t){for(var r,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=0;i<e.cost.length;i++)r=d(t.lists.resources,e.cost[i].target),s!=r.id&&(r.value-=e.cost[i].value*a,r.procent=r.value/r.max*100)}var y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("div",{staticClass:"top"},[r("span",{staticClass:"text"},[e._v(e._s(e.item.name))]),r("span",{staticClass:"text"},[e._v(e._s(e.item.value)+" / "+e._s(e.item.max))]),r("span",{staticClass:"bar",style:{width:e.item.procent+"%",backgroundColor:e.item.color}})])]),r("Tooltip",{attrs:{name:e.item.name,desc:e.item.desc,tick:e.item.tick}})],1)},h=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"fade"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"tooltip"},[r("h4",[e._v(e._s(e.name))]),e.desc?r("div",[r("hr"),r("i",[e._v(e._s(e.desc))])]):e._e(),e.hasCost(e.cost)?r("div",[r("hr"),r("b",[e._v("cost:")]),r("div",{domProps:{innerHTML:e._s(e.getList(e.cost))}})]):e._e(),e.hasCost(e.effect)?r("div",[r("hr"),r("b",[e._v("effect:")]),r("div",{domProps:{innerHTML:e._s(e.getList(e.effect))}})]):e._e(),e.tick>0?r("div",[r("hr"),r("b",[e._v("per tick:")]),r("div",{domProps:{innerHTML:e._s(e.tick)}})]):e._e()])])},_=[],b=(r("a9e3"),{props:{name:{type:String,required:!0},tick:{type:Number,required:!1},desc:{type:String,required:!1},cost:{type:Array,required:!1},effect:{type:Array,required:!1}},data:function(){return{show:!1}},methods:{getList:function(e){for(var t={},r=0;r<e.length;r++)"actions"!=e[r].type?e[r].target in t?t[e[r].target]+=e[r].value:t[e[r].target]=e[r].value:t[e[r].target]="+"+e[r].get.value+" "+e[r].get.target;var s="";for(var a in t)"string"==typeof t[a]?s+="<div>"+a+": "+t[a]+"</div>":s+="<div>"+t[a]+" "+a+"</div>";return s},hasCost:function(e){return void 0!=e&&e.length>0}},mounted:function(){var e=this;this.$el.parentElement.firstChild.addEventListener("mouseenter",(function(){e.show=!0})),this.$el.parentElement.firstChild.addEventListener("mouseleave",(function(){e.show=!1}))}}),k=b,x=(r("7c55"),r("2877")),$=Object(x["a"])(k,f,_,!1,null,"36f4185a",null),w=$.exports,O={components:{Tooltip:w},props:{item:{type:Object,required:!0}}},C=O,j=(r("53e2"),Object(x["a"])(C,y,h,!1,null,"dda78f7e",null)),q=j.exports,L={components:{Resource:q},methods:{getList:function(){return u(this.$parent.player.lists.resources,this.$parent.player.unlocked.resources)}}},S=L,A=Object(x["a"])(S,c,l,!1,null,"4eee42da",null),T=A.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("Actions:")]),e._l(e.getList(),(function(e){return r("div",{key:e.id},[r("Action",{ref:e.id,refInFor:!0,attrs:{item:e}})],1)}))],2)},M=[],P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"top",on:{click:function(t){return e.StartAction()}}},[r("span",{staticClass:"text",class:{cant:e.callAfford()}},[e._v(e._s(e.item.name))]),r("span",{staticClass:"bar",style:{width:e.item.percent+"%",backgroundColor:e.item.color}})]),r("Tooltip",{attrs:{name:e.item.name,desc:e.item.desc,cost:e.item.cost,effect:e.item.get}})],1)},N=[],I={components:{Tooltip:w},mounted:function(){var e=this;this.timer=setInterval((function(){e.CallAction()}),100)},data:function(){return{timer:null}},props:{item:{type:Object,required:!0}},methods:{callAfford:function(){return g(this.item,this.$parent.$parent.player)},CallAction:function(){var e=this.$parent.$parent.player;this.item.paused||(this.item.percent+=5,this.item.percent>=100&&(this.item.percent=0,m(this.item,e),v(this.item,e)),g(this.item,e)&&(e.tasks[0]="rest",this.item.paused=!0))},isActive:function(){return p(this.$parent.$parent.player.tasks,this.item.id)},StartAction:function(){var e=this.$parent.$parent.player.tasks;g(this.item,this.$parent.$parent.player)||(this.isActive()?e.pop():(e.length>0&&e.pop(),e.push(this.item.id)))}}},J=I,U=(r("4555"),Object(x["a"])(J,P,N,!1,null,"73728476",null)),V=U.exports,R={components:{Action:V},methods:{getList:function(){return u(this.$parent.player.lists.actions,this.$parent.player.unlocked.actions)}}},G=R,H=Object(x["a"])(G,E,M,!1,null,"4f6c8054",null),z=H.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",{directives:[{name:"show",rawName:"v-show",value:e.getList().length>0,expression:"getList().length>0"}]},[e._v("Upgrades:")]),e._l(e.getList(),(function(e){return r("div",{key:e.id},[r("Upgrade",{attrs:{item:e}})],1)}))],2)},B=[],D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{on:{click:function(t){return e.BuyUpgrade()}}},[r("div",{staticClass:"top",class:{cant:e.cantAfford()}},[r("span",{staticClass:"text"},[e._v(e._s(e.item.name))])])]),r("Tooltip",{attrs:{name:e.item.name,desc:e.item.desc,cost:e.item.cost,effect:e.item.get}})],1)},F=[],K=(r("a434"),{components:{Tooltip:w},props:{item:{type:Object,required:!0}},methods:{BuyUpgrade:function(){if(!this.cantAfford()){this.removeValue(),this.addValue(),this.$parent.$parent.player.bought.push(this.item.id);var e=this.$parent.$parent.player.unlocked.upgrades.indexOf(this.item.id);this.item.time<=1?this.$parent.$parent.player.unlocked.upgrades.splice(e,1):this.item.time--}},removeValue:function(){for(var e=0;e<this.item.cost.length;e++){var t=d(this.$parent.$parent.player.lists.resources,this.item.cost[e].target);t.value-=this.item.cost[e].value,t.procent=t.value/t.max*100}},addValue:function(){for(var e=0;e<this.item.get.length;e++)if("resources"==this.item.get[e].type){var t=d(this.$parent.$parent.player.lists.resources,this.item.get[e].target);t[this.item.get[e].key]+=this.item.get[e].value,t.procent=t.value/t.max*100}else if("actions"==this.item.get[e].type){var r=d(this.$parent.$parent.player.lists.actions,this.item.get[e].target);r.get.push(this.item.get[e].get)}},cantAfford:function(){for(var e=0;e<this.item.cost.length;e++){var t=d(this.$parent.$parent.player.lists.resources,this.item.cost[e].target);if(t.value<this.item.cost[e].value)return!0}return!1}}}),Q=K,W=(r("cc23"),Object(x["a"])(Q,D,F,!1,null,"0ba74c38",null)),X=W.exports,Z={components:{Upgrade:X},methods:{getList:function(){return u(this.$parent.player.lists.upgrades,this.$parent.player.unlocked.upgrades)}}},ee=Z,te=Object(x["a"])(ee,Y,B,!1,null,"5c464b46",null),re=te.exports,se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h4",[e._v("Log:")]),e._l(e.items.slice().reverse(),(function(t){return r("div",{key:t.id},[r("div",{staticClass:"log",domProps:{innerHTML:e._s(t)}})])}))],2)},ae=[],ie={props:{items:{type:Array,required:!0}}},ne=ie,oe=(r("b832"),Object(x["a"])(ne,se,ae,!1,null,"3a52ffa8",null)),ce=oe.exports,le={lists:{},logs:["<span>You feel sick..</span>"],progress:0,bought:[],unlocked:{resources:["stamnia"],actions:["rest"],upgrades:[]},tasks:[]},ue=le,pe=r("e3b0"),de=r("1e33"),ge=r("c114"),me=r("290a");ue.lists.actions=pe,ue.lists.resources=de,ue.lists.story=ge,ue.lists.upgrades=me;var ve={watch:{player:{deep:!0,handler:function(e){for(var t in this.CheckStory(),e.lists.resources)e.lists.resources[t].value=Math.round(10*e.lists.resources[t].value)/10;for(var r in e.lists.actions)-1!=e.tasks.indexOf(e.lists.actions[r].id)?e.lists.actions[r].paused=!1:e.lists.actions[r].paused=!0}}},beforeDestroy:function(){clearInterval(this.timer)},beforeMount:function(){this.LoadGame(),this.StartTimer()},components:{Resources:T,Actions:z,Upgrades:re,Logs:ce},data:function(){return{player:ue,timer:null,timer2:null}},methods:{StartTimer:function(){var e=this;this.timer=setInterval((function(){e.saveGame()}),1e4),this.timer2=setInterval((function(){e.updateValues()}),1e3)},saveGame:function(){this.loaded&&window.localStorage.setItem("savegame",JSON.stringify(this.player))},updateValues:function(){for(var e in this.player.lists.resources){var t=this.player.lists.resources[e];if(t.tick>0&&t.value<t.max&&(t.value+=t.tick,t.procent=t.value/t.max*100),void 0!=this.player.lists.resources[e].action){var r=d(this.player.lists.actions,this.player.lists.resources[e].action),s=this.player.lists.resources[e].rate*this.player.lists.resources[e].value;g(r,this.player,"stamnia",s)||(m(r,this.player,s),v(r,this.player,"stamnia",s))}}},LoadGame:function(){var e=window.localStorage.getItem("savegame");null!=e&&(this.player=JSON.parse(e)),this.loaded=!0},CheckStory:function(){if(this.player.progress<this.player.lists.story.length)if("resources"==this.player.lists.story[this.player.progress].req.type){var e=d(this.player.lists[this.player.lists.story[this.player.progress].req.type],this.player.lists.story[this.player.progress].req.target);if(e.value>=this.player.lists.story[this.player.progress].req.value){for(var t in this.player.lists.story[this.player.progress].unlock){var r=this.player.lists.story[this.player.progress].unlock[t];this.player.unlocked[r.type].push(r.target)}this.player.logs.push(this.player.lists.story[this.player.progress].desc),this.player.progress++}}else if("bought"==this.player.lists.story[this.player.progress].req.type&&p(this.player.bought,this.player.lists.story[this.player.progress].req.target)){for(var s in this.player.lists.story[this.player.progress].unlock){var a=this.player.lists.story[this.player.progress].unlock[s];this.player.unlocked[a.type].push(a.target)}this.player.logs.push(this.player.lists.story[this.player.progress].desc),this.player.progress++}}}},ye=ve,he=(r("7845"),Object(x["a"])(ye,n,o,!1,null,"07185a6f",null)),fe=he.exports,_e={name:"app",components:{Index:fe}},be=_e,ke=(r("034f"),Object(x["a"])(be,a,i,!1,null,null,null)),xe=ke.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(xe)}}).$mount("#app")},6026:function(e,t,r){},7845:function(e,t,r){"use strict";var s=r("885f"),a=r.n(s);a.a},"7c55":function(e,t,r){"use strict";var s=r("2b12"),a=r.n(s);a.a},"85ec":function(e,t,r){},"885f":function(e,t,r){},9429:function(e,t,r){},b832:function(e,t,r){"use strict";var s=r("0534"),a=r.n(s);a.a},c114:function(e){e.exports=JSON.parse('[{"id":"intro","desc":"<span>You find yourself next to a escape pod.</span><br /><span>The planet is full of rubish and scrap</span>","index":0,"req":{"target":"stamnia","type":"resources","value":5},"unlock":[{"target":"collect_scrap","type":"actions"},{"target":"scrap","type":"resources"}]},{"id":"start","desc":"<span>Maybe you should build something</span>","index":1,"req":{"target":"scrap","type":"resources","value":5},"unlock":[{"target":"shelter","type":"upgrades"}]},{"id":"shelter","desc":"<span>You should make use of the material</span>","index":2,"req":{"target":"shelter","type":"bought"},"unlock":[{"target":"scrap_pile","type":"upgrades"},{"target":"recylce","type":"actions"},{"target":"electronic","type":"resources"},{"target":"metal","type":"resources"}]},{"id":"shelter","desc":"<span>Maybe you should start building something familiar</span>","index":3,"req":{"target":"electronic","type":"resources","value":1},"unlock":[{"target":"computer","type":"upgrades"},{"target":"metal_scanner","type":"upgrades"},{"target":"mixer","type":"upgrades"},{"target":"bed","type":"upgrades"}]},{"id":"computer","desc":"<span>Ahh yes 127.0.0.1</span>","index":4,"req":{"target":"computer","type":"bought"},"unlock":[{"target":"write_code","type":"actions"},{"target":"code","type":"resources"},{"target":"ram","type":"upgrades"},{"target":"scripts","type":"upgrades"},{"target":"workbench","type":"upgrades"},{"target":"metal_chest","type":"upgrades"}]},{"id":"workbench","desc":"<span>lets start to craft</span>","index":5,"req":{"target":"workbench","type":"bought"},"unlock":[{"target":"drones","type":"resources"},{"target":"crafting_arm","type":"upgrades"},{"target":"magnets","type":"upgrades"},{"target":"smelter","type":"upgrades"},{"target":"build_drone","type":"actions"}]},{"id":"drones","desc":"<span>Now you can programm them</span>","index":6,"req":{"target":"drones","type":"resources","value":1},"unlock":[{"target":"programm_rdrone","type":"actions"},{"target":"programm_sdrone","type":"actions"},{"target":"rdrones","type":"resources"},{"target":"sdrones","type":"resources"}]}]')},cc23:function(e,t,r){"use strict";var s=r("d4b4"),a=r.n(s);a.a},d4b4:function(e,t,r){},e3b0:function(e){e.exports=JSON.parse('[{"id":"rest","name":"rest","desc":"sleeping","cost":[],"get":[{"target":"stamnia","value":1}],"speed":1000,"percent":0,"paused":true},{"id":"collect_scrap","name":"collect scrap","cost":[{"target":"stamnia","value":0.5}],"get":[{"target":"scrap","value":0.5}],"speed":1000,"percent":0,"paused":true},{"id":"write_code","name":"write code","cost":[{"target":"stamnia","value":0.5}],"get":[{"target":"code","value":1}],"speed":1000,"percent":0,"paused":true},{"id":"recylce","name":"recylce","cost":[{"target":"stamnia","value":0.5},{"target":"scrap","value":1}],"get":[{"target":"metal","value":0.5},{"target":"electronic","value":0.2}],"speed":1000,"percent":0,"paused":true},{"id":"build_drone","name":"build drone","cost":[{"target":"stamnia","value":0.5},{"target":"metal","value":3},{"target":"electronic","value":1}],"get":[{"target":"drones","value":1}],"speed":1000,"percent":0,"paused":true},{"id":"programm_rdrone","name":"programm recylce drone","cost":[{"target":"stamnia","value":0.5},{"target":"code","value":3},{"target":"drones","value":1}],"get":[{"target":"rdrones","value":1}],"speed":1000,"percent":0,"paused":true},{"id":"programm_sdrone","name":"programm scrap drone","cost":[{"target":"stamnia","value":0.5},{"target":"code","value":3},{"target":"drones","value":1}],"get":[{"target":"sdrones","value":1}],"speed":1000,"percent":0,"paused":true}]')}});
//# sourceMappingURL=app.f8bebe3e.js.map