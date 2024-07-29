<script setup>
import { xUrl } from "@/hooks/plugin.js";
import Isotope from "isotope-layout/js/isotope";
const demosData = [
    {
        name: "Main Home",
        caption: "Dark",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/main-demo.webp",
        link: "/main-demo",
    },
    {
        name: "Main Home",
        caption: "Light",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/main-demo-light.webp",
        link: "/main-demo",
    },
    {
        name: "Photographer",
        caption: "Dark",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/photographer.webp",
        link: "/photographer",
    },
    {
        name: "Photographer",
        caption: "Light",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/photographer-light.webp",
        link: "/photographer",
    },
    {
        name: "Personal",
        caption: "Dark",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/personal.webp",
        link: "/personal",
    },
    {
        name: "Personal",
        caption: "Light",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/personal-light.webp",
        link: "/personal",
    },
    {
        name: "Business",
        caption: "Dark",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/Business.webp",
        link: "/business",
    },
    {
        name: "Business",
        caption: "Light",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/Business-light.webp",
        link: "/business",
    },
    {
        name: "architecture",
        caption: "Dark",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/architecture.webp",
        link: "/architecture",
    },
    {
        name: "architecture",
        caption: "Light",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/architecture-light.webp",
        link: "/architecture",
    },
    {
        name: "Resume",
        caption: "Dark",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/resume.webp",
        link: "/resume",
    },
    {
        name: "Resume",
        caption: "Light",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/resume-light.webp",
        link: "/resume",
    },
    {
        name: "Portfolio",
        caption: "Dark",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/Portfolio.webp",
        link: "/metro-portfolio-1",
    },
    {
        name: "Portfolio",
        caption: "Light",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/Portfolio-light.webp",
        link: "/metro-portfolio-1",
    },
    {
        name: "Creativity Portfolio",
        caption: "Dark",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/creativity.jpg",
        link: "/metro-portfolio-2",
    },
    {
        name: "Creativity Portfolio",
        caption: "Light",
        imageSrc: "https://dsngrid.com/images/wp/blackdsn/creativity-light.jpg",
        link: "/metro-portfolio-2",
    },
];
const iso = ref(null);
onMounted(() => {
    setTimeout(() => {
        iso.value = new Isotope(".dsn-pageisotope", { itemSelector: ".grid-item" });
        iso.value.arrange("*");
    }, 1000);
});
</script>
<template>
    <div id="demospage" class="unique-demos section-title align-items-center text-center mt-section">
        <div class="container p-relative">
            <div class="d-flex justify-content-between w-100 v-middle box-content">
                <h6 class="title">Unique </h6>
                <h6 class="title">Demos</h6>
            </div>
            <h1 class="heading-h2 mb-10">Stunning Homepages</h1>
            <p>Choose a homepage to start navigating dsn. Build strong &amp; impressive <br> websites using
                dsn’s premade templates.</p>
        </div>
    </div>

    <div ref="iso" class="p-relative section-padding dsn-container">
        <div class="p-relative box-image-transform dsn-style-cards">
            <div class="root-posts">
                <div class="dsn-grid-masonry d-grid grid-md-3 dsn-pageisotope dsn-isotope use-filter">
                    <div class="box-item grid-item p-30 background-section" v-for="(item, index) in demosData"
                        :key="index">
                        <NuxtLink
                            :to="item.link == '' ? $route.path : item.link + `?mode=${item.caption.toLowerCase().trim()}`"
                            target="_blank" rel="nofollow" class="w-100">
                            <div class="img-box-parallax before-z-index" data-overlay="0">
                                <img :src="item.imageSrc" class="cover-bg-img" alt="" />
                                <div class="cap">
                                    <span>{{ item.caption }}</span>
                                </div>
                            </div>

                            <h2 class="d-inline-block p-relative dsn-title sm-title-block">
                                {{ item.name }}
                            </h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
