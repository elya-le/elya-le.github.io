import{H as P,_ as T,T as $}from"./BUCt86GX.js";import{o as r,c as d,e as a,u as t,x as h,t as y,a as n,h as g,d as S,w as l,j as B,q as b,s as H,v as I,f as L,O as p,y as z,z as F,F as f,i as O,b as V,k,B as M}from"./DGuEN7eg.js";import{d as x}from"./BPxwNsT7.js";import{I as R,a as U}from"./CQi5XGLB.js";import{_ as W}from"./CcylaWrO.js";import{_ as E}from"./sTW5hoaW.js";const q={class:"over-hidden"},A={class:"img-box-parallax dsn-effect-down has-popup","data-dsn-grid":"move-up"},D=["data-src","data-caption","data-fancybox","data-dsn-animate"],X=["src"],Y={class:"cap"},G='{"trigger": { "start": "-80% top", "end": "100%" },"from": { "y": "-20%", "height": "120%" },"to": { "y": "0%", "height": "120%" }}',J={__name:"ParallaxImage",props:{src:String,caption:String,animate:String,fancybox:String},setup(_){const e=_;return(o,i)=>(r(),d("div",q,[a("div",A,[a("div",{class:"effect-popup before-z-index h-100","data-src":t(h)(e.src),"data-caption":e.caption,"data-fancybox":e.fancybox?e.fancybox:null,"data-cursor":"open","data-overlay":"2","data-dsn-animate":e.animate?e.animate:G},[a("img",{class:"cover-bg-img has-direction",src:t(h)(e.src),"data-dsn-position":"50% 0%",alt:""},null,8,X)],8,D),a("div",Y,[a("span",null,y(e.caption),1)])])]))}},K={class:"next-project section-padding p-relative footer-animate svg-animate","data-dsn-animate":`{\r
        "trigger":{"start":"-100%","end":"top"},\r
        "from":{"y": "-70%","height": "100%" ,"scale":"1.3"},\r
        "to":{ "y": "0%", "height": "100%","scale":"1" }}`},Q={"data-dsn-ajax":"img",class:"p-absolute dsn-hero-parallax-img transform-3d bg-container over-hidden","data-overlay":"4"},Z=["src"],tt={class:"dsn-container dsn-z-index-2 p-relative h-100 v-dark-head"},et={class:"p-relative h-100 d-flex flex-column justify-content-center"},at={class:"intro-project w-100"},ot={class:"intro-title text-center"},st={class:"metas has-separate p-relative mb-10"},nt={class:"hero-title fill-text"},rt={class:"title"},it={__name:"NextProject",props:{next:Number,light:Boolean},setup(_){const e=_,o=x.find(i=>i.id===Number(e.next));return(i,s)=>{const m=W,v=B;return r(),d("div",K,[a("div",Q,[a("img",{class:"cover-bg-img wp-post-image",src:t(h)(t(o).images[0].src),alt:"","data-dsn-position":"50% 50%"},null,8,Z)]),n(E,{light:e.light},null,8,["light"]),a("div",tt,[a("div",et,[a("div",at,[a("div",ot,[a("div",st,[t(o).categories?(r(),g(m,{key:0,className:"has-separate mb-10",category:t(o).categories,separate:"",catLink:"/work/category/"},null,8,["category"])):S("",!0)]),a("div",nt,[n(v,{to:t(o).link+t(o).slug,"data-cursor":"open",class:"d-inline-block effect-ajax","data-dsn-ajax":"next"},{default:l(()=>[a("h2",rt,y(t(o).title),1)]),_:1},8,["to"])])])])])])])}}},ut={__name:"[slug]",async setup(_){let e,o;const{slug:i}=b().params,s=([e,o]=H(()=>x.find(m=>m.slug===i)),e=await e,o(),e);if(!s)throw I({fatal:!0,statusCode:404,statusMessage:"Work Not Found",data:{msg:b().path,redirectLink:"/work/work-list-1",linkName:"Portfolio"}});return L(()=>{p.defaults.Hash=!1,p.bind("[data-fancybox]",{Thumbs:{Thumbs:!0,showOnStart:!0,type:"modern"},Toolbar:{display:{left:["infobar"],middle:["zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY"],right:["slideshow","thumbs","close"]}},Carousel:{infinite:!0}})}),z(()=>p.close()),F(()=>p.destroy()),(m,v)=>{const w=$,j=P,C=O("HeaderFull"),N=T;return r(),d(f,null,[n(j,null,{default:l(()=>[n(w,null,{default:l(()=>[V(y(t(s).title),1)]),_:1})]),_:1}),n(N,null,{default:l(()=>[n(C,{data:t(s),boxShadow:"",btnScrollTo:"info",linkCircleTo:t(s).autherLink},null,8,["data","linkCircleTo"]),n(R,{id:"info"},{default:l(()=>[(r(!0),d(f,null,k(t(s).infoProject,(c,u)=>(r(),g(U,{key:u,title:c.title,description:c.description},null,8,["title","description"]))),128))]),_:1}),(r(!0),d(f,null,k(t(s).images.toReversed().slice(0,t(s).images.length-1).toReversed(),(c,u)=>(r(),g(J,{id:"info",key:u,src:c.src,caption:c.name,fancybox:"_1",animate:`\r
            {"trigger": { "start": "top" },\r
            "from": { "y": "-10%", "height": "120%" },\r
            "to": { "y": "40%", "height": "120%" }}`},null,8,["src","caption"]))),128)),n(it,{next:t(M)(t(s).id,t(x))},null,8,["next"])]),_:1})],64)}}};export{ut as default};