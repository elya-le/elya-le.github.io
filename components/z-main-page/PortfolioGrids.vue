<script setup>
import Isotope from "isotope-layout/js/isotope";
const portfolioData = [
	{
		name: "",
		imageSrc: "https://dsngrid.com/images/wp/blackdsn/portfolio/2.webp",
		link: "/work/work-card-1",
	},
	{
		name: "",
		imageSrc: "https://dsngrid.com/images/wp/blackdsn/portfolio/12.webp",
		link: "/metro-portfolio-1",
	},
	{
		name: "",
		imageSrc: "https://dsngrid.com/images/wp/blackdsn/portfolio/5.webp",
		link: "http://localhost:3000/work/work-card-2",
	},
	{
		name: "",
		imageSrc: "https://dsngrid.com/images/wp/blackdsn/portfolio/11.webp",
		link: "/work/work-classic-2",
	},
	{
		name: "",
		imageSrc: "https://dsngrid.com/images/wp/blackdsn/portfolio/8.webp",
		link: "/work/work-list-1",
	},
	{
		name: "",
		imageSrc: "https://dsngrid.com/images/wp/blackdsn/portfolio/7.webp",
		link: "/work/work-classic-1",
	},
	{
		name: "",
		imageSrc: "https://dsngrid.com/images/wp/blackdsn/portfolio/9.webp",
		link: "/work/work-list-2",
	},
];
const iso = ref(null);
onMounted(() => {
	setTimeout(() => {
		iso.value = new Isotope(".dsn-gisotope", { itemSelector: ".grid-item" });
		iso.value.arrange("*");
	}, 2000);
});
</script>

<template>
	<div class="dsn-award text-center p-relative v-light background-theme">
		<div class="dsn-bg-mask w-100 h-50 top-0 v-dark background-section z-index-1"></div>
		<div
			class="unique-demos section-title section-padding container v-light background-theme border-style p-relative z-index-2">
			<div class="d-flex justify-content-between w-100 v-middle box-content">
				<h6 class="title">Unique</h6>
				<h6 class="title">Portfolio</h6>
			</div>
			<div class="align-items-center text-center">
				<div class="p-relative">
					<h2 class="title-head mb-10">Portfolio Grids</h2>
					<p>
						Choose a homepage to start navigating dsn. Build strong &amp;
						impressive <br />
						websites using dsn’s premade templates.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div ref="iso" class="background-theme v-light section-padding">
		<div class="p-relative dsn-container">
			<div class="p-relative box-image-transform dsn-style-cards">
				<div class="root-posts">
					<div class="dsn-grid-masonry d-grid grid-md-3 dsn-gisotope dsn-isotope dsn-masonry-grid use-filter">
						<div class="box-item grid-item p-30 background-transparent"
							v-for="(item, index) in portfolioData" :key="index">
							<NuxtLink :to="item.link == '' ? $route.path : item.link" target="_blank" rel="nofollow"
								class="w-100">
								<div class="img-box-parallax before-z-index" data-overlay="0">
									<img :src="item.imageSrc" class="cover-bg-img" data-dsn-speed="30%" alt="" />
								</div>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
