(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,n,a){e.exports={Cardlist__content:"CardList_Cardlist__content__1R9X7"}},28:function(e){e.exports=[{id:1,character:"\u6c34",meaning:{english:["water"]},kunyomi:["\u307f\u305a","\u307f\u305a-"],onyomi:["\u30b9\u30a4"]},{id:2,character:"\u706b",meaning:{english:["fire"]},kunyomi:["\u3072","-\u3073","\u307b-"],onyomi:["\u30ab"]},{id:3,character:"\u6728",meaning:{english:["tree","wood"]},kunyomi:["\u304d","\u3053-"],onyomi:["\u30dc\u30af","\u30e2\u30af"]},{id:4,character:"\u77f3",meaning:{english:["stone"]},kunyomi:["\u3044\u3057"],onyomi:["\u30bb\u30ad","\u30b7\u30e3\u30af","\u30b3\u30af"]},{id:5,character:"\u91d1",meaning:{english:["gold","money"]},kunyomi:["\u304b\u306d","\u304b\u306a","\u304c\u306d"],onyomi:["\u30ad\u30f3","\u30b3\u30f3","\u30b4\u30f3"]},{id:6,character:"\u65e5",meaning:{english:["day","sun","Japan","counter for days"]},kunyomi:["\u3072","-\u3073","-\u304b"],onyomi:["\u30cb\u30c1","\u30b8\u30c4"]},{id:7,character:"\u6708",meaning:{english:["month","moon"]},kunyomi:["\u3064\u304d"],onyomi:["\u30b2\u30c4","\u30ac\u30c4"]},{id:8,character:"\u5e74",meaning:{english:["year","counter for years"]},kunyomi:["\u3068\u3057"],onyomi:["\u30cd\u30f3"]},{id:9,character:"\u65e9",meaning:{english:["early","fast"]},kunyomi:["\u306f\u3084.\u3044","\u306f\u3084","\u306f\u3084-","\u306f\u3084.\u307e\u308b","\u306f\u3084.\u3081\u308b","\u3055-"],onyomi:["\u30bd\u30a6","\u30b5\u30c3"]},{id:10,character:"\u5915",meaning:{english:["evening"]},kunyomi:["\u3086\u3046"],onyomi:["\u30bb\u30ad"]}]},29:function(e){e.exports={GET_ALL:"/api/get-all"}},32:function(e,n,a){e.exports=a(59)},41:function(e,n,a){},5:function(e,n,a){e.exports={Card:"Card_Card__2AI-K",Kanji:"Card_Kanji__31dgN",Lecture:"Card_Lecture__raTb7",Spelling:"Card_Spelling__2h_EO",Meaning:"Card_Meaning__3JmVY"}},59:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),i=a(20),c=a.n(i),s=a(7),o=a(3),m=a(22),l=a(23),d=(a(41),a(24)),u=a(25),h=a(30),g=a(26),y=a(31),E=a(5),p=a.n(E),f=a(2),_=a.n(f),j=function(e){e.id;var n=e.character,a=e.meaning,t=e.kunyomi,i=e.onyomi,c=_()("box","m-bd-xt","m-rd-xt","m-mg-xt",p.a.Card),s=_()("m-tx-c","m-wt-700","m-tertiary","m-fs-xt"),o=_()("side__header","m-fx-cl-c-c","m-tx-primary",p.a.Kanji),m=_()("m-fx-cl m-tx-c m-bd-xt-t m-fs-xt",p.a.Lecture),l=_()("m-wt-900",p.a.Spelling),d=_()(p.a.Meaning),u=a.map(function(e,n){return r.a.createElement("span",{className:d,key:n},e)}),h=t.map(function(e,n){return r.a.createElement("div",{className:l,key:n},r.a.createElement("span",null,e))}),g=i.map(function(e,n){return r.a.createElement("div",{className:l,key:n},r.a.createElement("span",null,e))});return r.a.createElement("div",{className:c},r.a.createElement("div",{className:"side m-fx-cl"},r.a.createElement("div",{className:s},r.a.createElement("span",null,u)),r.a.createElement("div",{className:o},r.a.createElement("span",null,n)),r.a.createElement("div",{className:"side__footer m-fx-sh-c"},r.a.createElement("div",{className:m},r.a.createElement("div",{className:"m-bd-xt-b m-primary"},"KUN"),r.a.createElement("div",{className:"m-fx-sh-c m-tx-primary"},h)),r.a.createElement("div",{className:m},r.a.createElement("div",{className:"m-bd-xt-b m-secondary"},"ON"),r.a.createElement("div",{className:"m-fx-sh-c m-tx-secondary"},g)))))},v=a(27),N=a.n(v),k=function(e){var n=e.kanjis;return r.a.createElement("section",{className:"l-section l-section--simple"},r.a.createElement("div",{className:[N.a.Cardlist__content,"m-fx-c-sh","m-pd-xt"].join(" ")},n.map(function(e,a){return r.a.createElement(j,{key:a,id:n[a].id,meaning:n[a].meaning.english,character:n[a].character,kunyomi:n[a].kunyomi,onyomi:n[a].onyomi})})))},b=function(e){e.searchfield;var n=e.searchChange;return r.a.createElement("div",{className:""},r.a.createElement("input",{className:"",type:"search",placeholder:"Search kanjis",onChange:n}))},x=a(61),C=(a(45),a(28)),S=(a(29),{GET_ALL:C}),w=function(e){var n=S[e]||[];return Object(x.a)([n])},K=function(e){function n(){return Object(d.a)(this,n),Object(h.a)(this,Object(g.a)(n).apply(this,arguments))}return Object(y.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.requestKanjis()}},{key:"render",value:function(){var e=this.props,n=e.searchField,a=e.handleSearchChange,t=e.kanjis,i=e.isPending,c=t.filter(function(e){return e.meaning.english.join(" ").toLowerCase().includes(n.toLowerCase())});return i?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"m-tx-c"},r.a.createElement("h1",{className:"title"},"Kanjis"),r.a.createElement(b,{searchChange:a}),r.a.createElement(k,{kanjis:c}))}}]),n}(t.Component),L=Object(s.b)(function(e){return{searchField:e.searchKanjis.searchField,kanjis:e.requestKanjis.kanjis,isPending:e.requestKanjis.isPending,error:e.requestKanjis.error}},function(e){return{handleSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},requestKanjis:function(){return e(function(e){e({type:"REQUEST_KANJIS_PENDING"}),w("GET_ALL").subscribe(function(n){return e({type:"REQUEST_KANJIS_SUCCESS",payload:n})},function(n){return e({type:"REQUEST_KANJIS_FAILED",payload:n})})})}}})(K);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(6),A={searchField:""},I={isPending:!1,kanjis:[],error:""},J=Object(m.createLogger)(),T=Object(o.c)({searchKanjis:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object(O.a)({},e,{searchField:n.payload});default:return e}},requestKanjis:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_KANJIS_PENDING":return Object(O.a)({},e,{isPending:!0});case"REQUEST_KANJIS_SUCCESS":return Object(O.a)({},e,{kanjis:n.payload,isPending:!1});case"REQUEST_KANJIS_FAILED":return Object(O.a)({},e,{error:n.payload,isPending:!1});default:return e}}}),F=Object(o.d)(T,Object(o.a)(l.a,J));c.a.render(r.a.createElement(s.a,{store:F},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.86018199.chunk.js.map