import{_ as k,r as d,c as D,w,o as c,a as I,b as _,d as t,e as p,g as u,u as B,f,t as h}from"./index-CvDSwyuj.js";import{_ as C,E as T,a as N,b as V,X as W,c as X}from"./index-4O5NeNm8.js";const z={class:"entity_container"},F={class:"top"},G={class:"table"},S={class:"createExcel"},$={__name:"index",setup(q){const n=d([]),o=d([]);let r=d(!1);const v=D(()=>n.value.length&&!r.value);function y(e){n.value=e}function g(){r.value=!0,o.value=n.value,x()}w(n,()=>{r.value=!1});function x(){o.value=o.value.filter(e=>e.处理类型!="暂不处理"),o.value.forEach(e=>{e.一类词="",e.二类词="",e.三类词="",e.词的类型==="一类词"?e.一类词=e.实体词:e.词的类型==="二类词"?e.二类词=e.实体词:e.三类词=e.实体词;for(let a in e)a!=="一类词"&&a!=="二类词"&&a!=="三类词"&&a!=="实体标准名称（非电商标题名称）"&&a!=="实体ID"&&delete e[a]}),m(o.value)}function m(e){for(let a=0;a<e.length;a++)for(let s=a+1;s<e.length;s++)e[a]["实体标准名称（非电商标题名称）"]===e[s]["实体标准名称（非电商标题名称）"]&&(E(e[a],e[s]),e.splice(s,1),s--)}function E(e,a){a.一类词?e.一类词?e.一类词=e.一类词+","+a.一类词:e.一类词=a.一类词:a.二类词?e.二类词?e.二类词=e.二类词+","+a.二类词:e.二类词=a.二类词:e.三类词?e.三类词=e.三类词+","+a.三类词:e.三类词=a.三类词}return(e,a)=>{const s=T,i=N,l=X,b=V;return c(),I("div",z,[_("div",F,[t(W,{onGetEntityWord:y}),t(s,{type:"primary",size:"default",onClick:g,plain:"",disabled:!v.value},{default:p(()=>[f("改变格式")]),_:1},8,["disabled"]),o.value.length?(c(),u(i,{key:0,class:"mx-1",type:"primary"},{default:p(()=>[f(h(o.value.length),1)]),_:1})):(c(),u(i,{key:1,class:"mx-1",type:"primary"},{default:p(()=>[f(h(n.value.length),1)]),_:1}))]),_("div",G,[B(r)?(c(),u(b,{key:0,data:o.value,stripe:"",style:{width:"100%"},height:"70vh","default-sort":{prop:"实体ID"}},{default:p(()=>[t(l,{prop:"实体ID",label:"实体ID",sortable:"",width:"150"}),t(l,{prop:"实体标准名称（非电商标题名称）",label:"实体标准名称（非电商标题名称）",sortable:""}),t(l,{prop:"一类词",label:"一类词"}),t(l,{prop:"二类词",label:"二类词"}),t(l,{prop:"三类词",label:"三类词"})]),_:1},8,["data"])):(c(),u(b,{key:1,data:n.value,stripe:"",style:{width:"100%"},height:"70vh","default-sort":{prop:"编号"}},{default:p(()=>[t(l,{prop:"实体ID",label:"实体ID",sortable:"",width:"150"}),t(l,{prop:"实体标准名称（非电商标题名称）",label:"实体标准名称（非电商标题名称）",sortable:""}),t(l,{prop:"实体词",label:"实体词"}),t(l,{prop:"词的类型",label:"词的类型"}),t(l,{prop:"处理类型",label:"处理类型"})]),_:1},8,["data"]))]),_("div",S,[t(C,{data:o.value},null,8,["data"])])])}}},J=k($,[["__scopeId","data-v-43934cfb"]]);export{J as default};
