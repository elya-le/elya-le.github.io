import{_ as m}from"./CP0fG4HQ.js";import{r as y,o as i,c as r,d,n as g,e as t,f,g as C,a as P,h as u,u as v}from"./DGuEN7eg.js";const b=t("div",{class:"prev-container"},[t("div",{class:"container-inner"},[t("div",{class:"triangle"}),t("svg",{class:"circle",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},[t("g",{class:"circle-wrap",fill:"none",strokeWidth:"1",strokeLinejoin:"round",strokeMiterlimit:"10"},[t("circle",{cx:"12",cy:"12",r:"10.5"})])])])],-1),k=[b],S=t("div",{class:"next-container"},[t("div",{class:"container-inner"},[t("div",{class:"triangle"}),t("svg",{class:"circle",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("g",{class:"circle-wrap",fill:"none",strokeWidth:"1",strokeLinejoin:"round",strokeMiterlimit:"10"},[t("circle",{cx:"12",cy:"12",r:"10.5"})])])])],-1),B=[S],h={__name:"SwiperPagination",props:{classPag:String,setStyle:{type:String,default:"normal"},prev:Boolean,pagination:Boolean,next:Boolean,el:Element},setup(w){const l=w,e=[{style:"normal",main:"dsn-pagination d-flex align-items-center justify-content-between dsn-container mt-30"}],c=()=>{if(!l.setStyle)return e[0];const a=e.find(p=>p.style===l.setStyle);return a||e[0]},s=y(null),n=()=>{var a;return(a=l.el)==null?void 0:a.swiper.slidePrev()},o=()=>{var a;return(a=l.el)==null?void 0:a.swiper.slideNext()};return(a,p)=>(i(),r("div",{ref_key:"pag",ref:s,class:g(["",c().main])},[l.prev?(i(),r("div",{key:0,class:"swiper-prev",onClick:p[0]||(p[0]=x=>n())},k)):d("",!0),l.pagination?(i(),r("div",{key:1,class:g(["swiper-pagination mr-30 ml-30 heading-color",l.classPag]),"data-dsn-type":"progressbar"},null,2)):d("",!0),l.next?(i(),r("div",{key:2,class:"swiper-next",onClick:p[1]||(p[1]=x=>o())},B)):d("",!0)],2))}},_=t("div",{class:"dsn-icon"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25"},[t("g",null,[t("polygon",{points:"24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001"})])])],-1),$=[_],N=t("div",{class:"dsn-icon"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 25"},[t("g",null,[t("polygon",{points:"24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001"})])])],-1),O=[N],j={__name:"SwiperPaginationOne",props:{classPag:String,setStyle:{type:String,default:"normal"},prev:Boolean,pagination:Boolean,next:Boolean,el:Element},setup(w){const l=w,e=y(null),c=()=>{var n;return(n=l.el)==null?void 0:n.swiper.slidePrev()},s=()=>{var n;return(n=l.el)==null?void 0:n.swiper.slideNext()};return(n,o)=>(i(),r("div",{ref_key:"pag",ref:e,class:"dsn-swiper-paginate p-absolute dsn-nav-arrow d-flex p-relative w-100 h-100 mt-50 dsn-container justify-content-center dsn-icon-heading-color"},[l.prev?(i(),r("div",{key:0,class:"border-color-default swiper-prev background-section image-zoom move-circle dsn-nav-left","data-dsn":"parallax",onClick:o[0]||(o[0]=a=>c())},$)):d("",!0),l.pagination?(i(),r("div",{key:1,class:g(["swiper-pagination mr-30 ml-30 heading-color",l.classPag]),"data-dsn-type":"progressbar"},null,2)):d("",!0),l.next?(i(),r("div",{key:2,class:"border-color-default swiper-next background-section image-zoom move-circle dsn-nav-right","data-dsn":"parallax",onClick:o[1]||(o[1]=a=>s())},O)):d("",!0)],512))}},D={key:0,class:"background-overlay bg-1"},V={class:"root-posts"},z={class:"has-parallax-image dsn-swiper p-relative"},T={__name:"PortfolioSwiper",props:{data:Array,setStyle:{type:String,default:"classic"},haveOverlayBG:{type:Boolean,default:!1},grabCursor:Boolean,desktop:{},tablet:{},mobile:{},centeredSlides:Boolean,loop:Boolean,blur:Boolean,parallax:{type:Boolean,default:!0},speed:Number,watchSlidesProgress:Boolean,loopedSlides:Number|Boolean,allowPagination:{type:Boolean,default:!1},allowPrevButton:{type:Boolean,default:!1},allowNextButton:{type:Boolean,default:!1},paginationOne:{type:Boolean,default:!1},allowPaginationOne:{type:Boolean,default:!1},allowPrevButtonOne:{type:Boolean,default:!1},allowNextButtonOne:{type:Boolean,default:!1},dataParallax:{},postContentClass:String,postContentParallax:{},postTitleClass:String,swiperOptions:{},mode:Boolean},setup(w,{expose:l}){const e=w,c=[{style:"classic",main:"mt-section background-section section-padding",divStyle:"dsn-container dsn-right-container dsn-style-classic",stylePost:"h-350 dsn-post-type-classic",paginationClass:"portfolio-pag",pagStyle:"dsn-pagination d-flex align-items-center justify-content-between dsn-container mt-30",titleClass:"title-block",postContentClass:"",postContentParallax:{},dataParallax:{},viewDescription:!1,linkCircle:!0,swiperClass:""},{style:"cards-1",main:"bg-dots section-padding",divStyle:"container dsn-style-cards",stylePost:"dsn-posts dsn-post-type-cards box-image-normal box-image-hover",paginationClass:"portfolio-pag",pagStyle:"dsn-pagination d-flex align-items-center justify-content-between dsn-container mt-30",titleClass:"title-h2",postContentClass:"post-content dsn-bg p-relative z-index-1 d-flex flex-column text-center",postContentParallax:{"data-swiper-parallax-opacity":0},dataParallax:{"data-swiper-parallax-scale":"1.2"},viewDescription:!1,linkCircle:!1,swiperClass:""},{style:"cards-2",main:"mt-section ",divStyle:"dsn-style-cards",stylePost:"box-image-normal box-image-hover",paginationClass:"portfolio-pag",pagStyle:"dsn-pagination d-flex align-items-center justify-content-between dsn-container mt-30",titleClass:"title-h2",postContentClass:"text-center",postContentParallax:{"data-swiper-parallax-opacity":0},dataParallax:{"data-swiper-parallax-scale":"1.2 "},viewDescription:!1,linkCircle:!1,swiperClass:""},{style:"carousel-1",main:"",divStyle:"dsn-style-cards dsn-align-center",stylePost:"dsn-post-type-cards box-image-normal ",paginationClass:"portfolio-pag",pagStyle:"dsn-swiper-paginate p-absolute  dsn-nav-arrow d-flex p-relative w-100 h-100 mt-50 dsn-container justify-content-center dsn-icon-heading-color",titleClass:"title",postContentClass:"",postContentParallax:{"data-swiper-parallax-opacity":0,"data-swiper-parallax":"100%"},dataParallax:{"data-swiper-parallax-scale":"1.2 "},viewDescription:!1,linkCircle:!1,swiperClass:""},{style:"carousel-2",main:"",divStyle:"dsn-style-cards dsn-align-center",stylePost:"dsn-post-type-cards box-image-normal dsn-container",paginationClass:"portfolio-pag",pagStyle:"dsn-swiper-paginate p-absolute  dsn-nav-arrow d-flex p-relative w-100 h-100 mt-50 dsn-container justify-content-center dsn-icon-heading-color",titleClass:"title",postContentClass:"text-center",postContentParallax:{"data-swiper-parallax-opacity":0,"data-swiper-parallax":"100%"},dataParallax:{"data-swiper-parallax-scale":"1.2 "},viewDescription:!1,linkCircle:!1,swiperClass:""},{style:"carousel-3",main:"",divStyle:"dsn-style-metro dsn-background-inherit dsn-metro-2 dsn-align-center",stylePost:"dsn-post-type-metro",paginationClass:"portfolio-pag",pagStyle:"dsn-swiper-paginate p-absolute  dsn-nav-arrow d-flex p-relative w-100 h-100 mt-50 dsn-container justify-content-center dsn-icon-heading-color",titleClass:"title-h2",postContentClass:"",postContentParallax:{"data-swiper-parallax-opacity":0,"data-swiper-parallax":"100%"},dataParallax:{"data-swiper-parallax-scale":"1.2 "},viewDescription:!1,linkCircle:!1,swiperClass:"text-right"}],s=()=>{if(!e.setStyle)return c[0];const a=c.find(p=>p.style===e.setStyle);return a||c[0]},n={desktop:{slidesPerView:1.5},tablet:{slidesPerView:2},mobile:{slidesPerView:2}},o=y(null);return l({slider:o}),f(()=>{const a=o.value;Object.assign(a,{init:!1,grabCursor:e.grabCursor,centeredSlides:e.centeredSlides,loop:e.loop,parallax:e.parallax,speed:e.speed,animating:!0,watchSlidesProgress:e.watchSlidesProgress,loopedSlides:e.loopedSlides,pagination:{el:`.${s().paginationClass}`,enabled:!0,clickable:!0},breakpoints:{992:e.desktop?e.desktop:n.desktop,768:e.tablet?e.tablet:n.tablet,576:e.mobile?e.mobile:n.mobile},...e.swiperOptions}),a==null||a.initialize()}),(a,p)=>(i(),r("div",{class:g(["p-relative",s().main])},[e.haveOverlayBG?(i(),r("div",D)):d("",!0),C(a.$slots,"title"),t("div",{class:g(["p-relative",s().divStyle])},[t("div",V,[t("div",{class:g(["dsn-posts",s().stylePost])},[t("div",z,[t("swiper-container",{ref_key:"slider",ref:o,init:"false",class:g(["work",e.blur?"has-blur":null,s().swiperClass])},[P(m,{data:e.data,tag:"swiper-slide",mode:e.mode,linkCircle:s().linkCircle,dataParallax:s().dataParallax,postTitleClass:s().titleClass,itemDescription:s().viewDescription,postContentClass:s().postContentClass,postContentParallax:s().postContentParallax},null,8,["data","mode","linkCircle","dataParallax","postTitleClass","itemDescription","postContentClass","postContentParallax"])],2),e.allowPrevButton||e.allowNextButton||e.allowPagination?(i(),u(h,{key:0,prev:e.allowPrevButton,next:e.allowNextButton,pagination:e.allowPagination,setPagStyle:s().pagStyle,classPag:s().paginationClass,el:v(o)},null,8,["prev","next","pagination","setPagStyle","classPag","el"])):d("",!0),e.paginationOne||e.allowPrevButton||e.allowNextButton||e.allowPagination?(i(),u(j,{key:1,prev:e.allowPrevButtonOne,next:e.allowNextButtonOne,pagination:e.allowPaginationOne,setPagStyle:s().pagStyle,classPag:s().paginationClass,el:v(o)},null,8,["prev","next","pagination","setPagStyle","classPag","el"])):d("",!0)])],2)])],2)],2))}};export{T as _};
