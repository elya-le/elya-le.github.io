import{i as C,o as a,c as s,F as u,k as h,a as o,w as f,e,t as v,P as g,j as k,r as _,f as A,A as O,N as T,b as $,n as m,E as x}from"./DGuEN7eg.js";import{_ as B}from"./sTW5hoaW.js";const w={class:"dsn-socials box-social"},L={class:"dsn-icon"},S={__name:"SocialGroup",props:{data:Array},setup(c){return(n,r)=>{const i=C("font-awesome-icon"),d=k;return a(),s("ul",w,[(a(!0),s(u,null,h(c.data,(t,l)=>(a(),s("li",{key:l},[o(d,{class:"init-color move-circle border-color-default",to:t.link?t.link:(n._.provides[g]||n.$route).path,target:"_blank","data-dsn":"parallax"},{default:f(()=>[e("span",L,[o(i,{icon:[`${t.type}`,`${t.iconName}`]},null,8,["icon"])]),e("span",null,v(t.name),1)]),_:2},1032,["to"])]))),128))])}}},E={class:"dsn-container pt-60"},P={class:"d-grid grid-lg-4 grid-md-2"},V={class:"grid-col-1"},G={class:"dsn-logo main-logo"},I=x('<div class="grid-col-2"><h4 class="subtitle p-relative line-shape line-shape-after"><span class="background-revere">CONTACT</span></h4><div class="col-contact"><p class="over-hidden mt-10"><a class="link-hover" href="mailto:hello@elya.dev"> hello@elya.dev</a></p></div></div><div class="grid-col-3"><h4 class="subtitle p-relative line-shape line-shape-after"><span class="background-revere">LOCATION</span></h4><div class="col-address"><p> New Orleans, LA<br></p></div></div>',2),j={class:"grid-col-4"},D=e("h4",{class:"subtitle p-relative line-shape line-shape-after"},[e("span",{class:"background-revere"},"NAVIGATION")],-1),F={class:"menu-footer-menu-container"},H={id:"menu-footer-menu",class:"menu"},M=e("div",{class:"footer-bottom mt-60 pt-30 border-top pb-30 text-center"},[e("p",{class:"over-hidden"}," © 2024 Elya.dev ")],-1),U={__name:"DsnFooter",props:{light:Boolean,animate:Boolean,animateContent:{type:Boolean,default:!0},containerContent:Boolean},setup(c){const n=c,r=_(null),i=_(null),d=[{name:"GH",link:"",type:"fab",iconName:"github"},{name:"In",link:"",type:"fab",iconName:"linkedin-in"}],t=[{link:"/",name:"HOME"},{link:"/#project-section",name:"PROJECTS"},{link:"/about",name:"ABOUT"},{link:"/#contact-section",name:"CONTACT"}];return A(()=>{n.animateContent&&new O({start:"top bottom",end:"top "},{yPercent:-70},{yPercent:0},r.value,i.value)}),(l,R)=>{const b=S,y=k;return a(),s("footer",{ref_key:"footer",ref:r,id:"dsn_footer",class:m(["dsn-footer p-relative svg-animate",[n.light?"background-section":"background-main",n.animate?"footer-animate":""]])},[o(B,{light:n.light},null,8,["light"]),e("div",{ref_key:"footerContent",ref:i,class:m(["footer-content p-relative mt-section",n.containerContent?"container":null])},[e("div",E,[e("div",P,[e("div",V,[e("div",G,[o(T,{height:"undefined",width:"undefined"})]),o(b,{class:"mt-20 dsn-icon-heading-color",data:d})]),I,e("div",j,[D,e("div",F,[e("ul",H,[(a(),s(u,null,h(t,(p,N)=>e("li",{class:"menu-item",key:N},[o(y,{to:p.link?p.link:(l._.provides[g]||l.$route).path,class:"effect-ajax"},{default:f(()=>[$(v(p.name),1)]),_:2},1032,["to"])])),64))])])])]),M])],2)],2)}}};export{U as _};