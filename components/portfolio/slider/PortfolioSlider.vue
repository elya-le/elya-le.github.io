<script setup>
import webGelTransition, { xUrl, numberindex } from "@/hooks/plugin.js";
import { gsap } from "gsap";
import dsnSplitting from "@/hooks/spltting.js";
import SliderPrev from "@/components/portfolio/slider/SliderPrev.vue";
import SliderNext from "@/components/portfolio/slider/SliderNext.vue";
import LinkLine from "@/components/links/LinkLine.vue";
import LinkDefualt from "@/components/links/LinkDefualt.vue";
const props = defineProps({
	data: {},
	setStyle: { type: String, default: "full-h" },
	contentStyle: { type: String, default: "center-center" },
	hasDescription: Boolean,
	linkLine: Boolean,
	linkDefualt: Boolean,
	webgel: Boolean,
	webGelOptions: {},
	displacement: String,
	direction: { type: String, default: "horizontal" },
	parallaxSwiper: {},
	swiperOptions: {},
});
const rootSlider = ref(null);
const mainSlider = ref(null);
const sliderContent = ref(null);
const swiperPagination = ref(null);
const prev = ref(null);
const next = ref(null);
const bg = ref(null);
const canvas = ref(null);
const store = reactive({ slideCurrent: 0, countSlides: 0 });
const tl = gsap.timeline();
defineExpose({ mainSlider });
const webgel_Displacement_Image = xUrl("assets/img/displacement/8.jpg");
const styles = [
	{
		style: "full-h",
		direction: "horizontal",
		rootClass: "v-dark-head dsn-slider-width-circle",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "full-v",
		direction: "vertical",
		rootClass: "v-dark-head dsn-slider-width-circle ",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "full-parallax-h",
		direction: "horizontal",
		rootClass: "v-dark-head ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "full-parallax-v",
		direction: "vertical",
		rootClass: "v-dark-head ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "half-h",
		direction: "horizontal",
		rootClass: "v-dark-head-mobile half-right dsn-section-padding ",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "half-v",
		direction: "vertical",
		rootClass: "v-dark-head-mobile half-left dsn-section-padding ",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "half-parallax-h",
		direction: "horizontal",
		rootClass: "v-dark-head-mobile half-left dsn-section-padding ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "half-parallax-v",
		direction: "vertical",
		rootClass: "v-dark-head-mobile half-right dsn-section-padding ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "padding-h",
		direction: "horizontal",
		rootClass: "v-dark-head dsn-section-padding ",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "padding-v",
		direction: "vertical",
		rootClass: "v-dark-head dsn-section-padding ",
		mainClass: "",
		swiperParallax: false,
		webgl: true,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "padding-parallax-h",
		direction: "horizontal",
		rootClass: "v-dark-head dsn-section-padding ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
	{
		style: "padding-parallax-v",
		direction: "vertical",
		rootClass: "v-dark-head dsn-section-padding ",
		mainClass: "",
		swiperParallax: true,
		webgl: false,
		webGelOptions: {
			displacement: props.displacement
				? props.displacement
				: webgel_Displacement_Image,
			speedIn: 2,
		},
	},
];
const contentStyle = [
	{
		cStyle: "center-center",
		contentClass: "align-items-center justify-content-center text-center",
		metaClass: "justify-content-center",
	},
	{
		cStyle: "container-center-center",
		contentClass:
			"dsn-container d-flex align-items-center justify-content-center text-center",
		metaClass: "justify-content-center",
	},
	{
		cStyle: "center-between",
		contentClass: "align-items-center",
		metaClass: "justify-content-between ",
	},
	{
		cStyle: "end-between",
		contentClass: "align-items-end",
		metaClass: "justify-content-between",
	},
];
const itemStyle = () => {
	if (!props.setStyle) {
		return styles[0];
	}
	const getStyle = styles.find((item) => item.style === props.setStyle);
	if (!getStyle) {
		return styles[0];
	}
	return getStyle;
};
const setContentStyle = () => {
	if (!props.contentStyle) return contentStyle[0];
	const getStyle = contentStyle.find((item) => item.cStyle === props.contentStyle);
	if (!getStyle) return contentStyle[0];
	return getStyle;
};
//--------------------------------------------------------------------------------------------
/**
 * Init Swiper
 *
 * @param swiper Swiper
 */
const initSlider = (swiper) => {
	swiper?.slides?.forEach((item) => {
		const video = item.querySelector(
			"swiper-slide:not(.swiper-slide-active) video"
		);
		if (video) video.pause();
	});
};
//--------------------------------------------------------------------------------------------
/**
 *
 * @param swiper
 * @returns {[*, *, any, any]}
 * get New Slide And Old Slide
 */
const getContent = (swiper) => {
	const oldNum = swiper.slides[swiper.previousIndex].getAttribute("data-dsn-id");
	const newNum = swiper.slides[swiper.activeIndex].getAttribute("data-dsn-id");
	const contentOld = sliderContent.value.querySelector(`[data-dsn-id="${oldNum}"]`);
	const contentNew = sliderContent.value.querySelector(`[data-dsn-id="${newNum}"]`);

	return [newNum, oldNum, contentNew, contentOld];
};
//--------------------------------------------------------------------------------------------
/**
 *
 * @param swiper
 * Pause And Play video
 */
const activeVideo = (swiper) => {
	const newVideo = swiper.slides[swiper.activeIndex].querySelector("video");
	const oldVideo = swiper.slides[swiper.previousIndex].querySelector("video");

	if (newVideo) newVideo.play();
	if (oldVideo) oldVideo.pause();
};
//--------------------------------------------------------------------------------------------
/**
 *
 * @param newContent
 * @param oldContent
 *
 */

//--------------------------------------------------------------------------------------------
const setPrev = () => {
	const id = mainSlider.value.swiper.activeIndex;
	const dataLength = mainSlider.value.swiper.slides.length - 1;
	if (id == dataLength) {
		return prev.value.prevSlider.swiper.slideTo(Number(id) - 1);
	}

	if (id < dataLength && id != 0) {
		return prev.value.prevSlider.swiper.slideTo(Number(id) - 1);
	}
	if (id == 0) {
		return prev.value.prevSlider.swiper.slideTo(dataLength);
	}
	return prev.value.prevSlider.swiper.slideTo(id);
};
const setNext = () => {
	const id = mainSlider.value.swiper.activeIndex;
	const dataLength = mainSlider.value.swiper.slides.length - 1;

	if (id > 0 && id != dataLength) {
		return next.value.nextSlider.swiper.slideTo(Number(id) + 1);
	}
	if (id > 0 && id == dataLength) {
		return next.value.nextSlider.swiper.slideTo(0);
	}
	if (id == 0) {
		return next.value.nextSlider.swiper.slideTo(1);
	}
	return next.value.nextSlider.swiper.slideTo(Number(id));
};
//--------------------------------------------------------------------------------------------
/**
 * Event When Slide Change
 * @param swiper
 */
const slideChange = (swiper) => {
	if (swiper.activeIndex === store.slideCurrent) return;

	const [newNum, oldNum, newContent, oldContent] = getContent(swiper);
	const [oldTitle, newTitle] = [
		gsap.utils.selector(oldContent)(".title .char"),
		gsap.utils.selector(newContent)(".title .char"),
	];

	const isRight = oldNum < newNum;
	const animate = {
		show: {
			autoAlpha: 1,
			y: 0,
			stagger: {
				amount: 0.3,
				from: "center",
			},
			ease: "back.out(4)",
			rotation: 0,
			scale: 1,
			yoyo: true,
		},
		hide: {
			autoAlpha: 0,
			y: isRight ? "-25%" : "25%",
			stagger: {
				amount: 0.3,
				from: "center",
			},
			ease: "back.in(4)",
			yoyo: true,
			rotation: 8,
			scale: 1.1,
		},
	};
	newContent.classList.remove("dsn-active-animate");
	oldContent.classList.add("dsn-active-animate");

	if (swiper.dsnOnChange)
		swiper.dsnOnChange(newNum, oldNum, newContent, oldContent);
	activeVideo(swiper);
	tl.progress(1);

	oldContent.classList.remove("dsn-active-animate");
	tl.fromTo(oldTitle, 0.4, animate.show, animate.hide)
		.call(() => {
			oldContent.classList.remove("dsn-active");
			newContent.classList.add("dsn-active");
			newContent.classList.add("dsn-active-animate");
		})
		.fromTo(newTitle, 0.8, animate.hide, animate.show, "-=.005");

	setPrev();
	setNext();
};
//--------------------------------------------------------------------------------------------
onMounted(() => {
	rootSlider.value?.querySelectorAll(".slide-content").forEach((item) => {
		const title = item.querySelector(".title");
		if (title) dsnSplitting.Char(title);

		const meta = item.querySelector(".dsn-slider-content .head-meta");
		if (meta) dsnSplitting.Char(meta, "a");
	});

	gsap.to(bg.value, {
		yPercent: 30,
		ease: "none",
		scrollTrigger: {
			trigger: rootSlider.value,
			start: "top top",
			scrub: true,
		},
	});
});

onMounted(() => {
	setTimeout(() => {
		gsap.to(rootSlider.value.querySelector(".bg-container"), {
			opacity: 1,
		});
	}, 3000);

	/**
	 *
	 * @type HTMLDivElement
	 */
	const sliderSwiper = mainSlider.value;
	Object.assign(sliderSwiper, {
		grabCursor: true,
		parallax: true,
		slidesPerView: 1,
		speed: 1500,
		on: { init: initSlider, slideChange, },
		direction: props.direction ? props.direction : itemStyle().direction,
		pagination: {
			el: swiperPagination.value,
			clickable: true,
			dynamicBullets: true,
			dynamicMainBullets: 1,
			type: "bullets",
		},
		...props.swiperOptions,
	});
	sliderSwiper.initialize();
	const swiperSlides = sliderSwiper.querySelectorAll("swiper-slide");
	store.countSlides = swiperSlides.length;
	sliderSwiper?.swiper.on("slideChange", () => { store.slideCurrent = sliderSwiper.swiper.realIndex; });
	store.slideCurrent = sliderSwiper.swiper.realIndex;
	webGelTransition({
		canvas: canvas.value,
		parent: bg.value,
		sliderSwiper: mainSlider.value,
		data: props.data,
		direction: props.direction,
		displacement: itemStyle().webGelOptions.displacement,
		speedIn: props.webGelOptions
			? props.webGelOptions.speedIn
			: itemStyle().webGelOptions.speedIn,
	});
});
</script>

<template>
	<header ref="rootSlider" :class="itemStyle().rootClass">
		<div class="main-slider dsn-active" :class="props.webgel ? 'dsn-webgl' : null, itemStyle().mainClass">
			<div class="content-slider slide-inner h-100 over-hidden">
				<div ref="bg" data-overlay="4"
					class="bg-container p-absolute w-100 h-100 z-index-1 dsn-hero-parallax-img">
					<swiper-container ref="mainSlider" class="h-100" init="false">
						<swiper-slide class="over-hidden" v-for="(item, index) in props.data" :key="index"
							:class="index === 0 ? 'dsn-active' : null" :data-dsn-id="index">
							<div class="image-bg cover-bg w-100 h-100 before-z-index dsn-swiper-parallax-transform"
								data-overlay="4" :data-swiper-parallax="itemStyle().swiperParallax ? '80%' : null
									">
								<img class="cover-bg-img" :src="xUrl(item.images[0].src)" :alt="item.title"
									data-dsn-position="50% 50%" />
							</div>
						</swiper-slide>
					</swiper-container>
					<canvas v-if="props.webgel" ref="canvas" style="padding: inherit" />
				</div>
				<div ref="sliderContent" class="dsn-container d-flex dsn-hero-parallax-title dsn-slider-content"
					:class="setContentStyle().contentClass">
					<div class="slide-content p-absolute" :class="store.slideCurrent === index
						? 'dsn-active dsn-active-animate'
						: null
						" v-for="(item, index) in props.data" :key="index" :data-dsn-id="index">
						<div class="p-relative head-meta swiper-animate-head d-flex mb-20"
							:class="setContentStyle().metaClass">
							<div class="slide-metas circle-before metas mb-10">
								<NuxtLink class="heading-color" :to="`/work/category/${cat.toString().trim().toLowerCase()}`" data-separator=" -"
									v-for="(cat, index) in item.categories" :key="index">
									{{ cat }}
								</NuxtLink>
							</div>
						</div>
						<h2 class="title has-box-mod p-relative">
							<NuxtLink :to="item.link + item.slug" class="swiper-animate-head effect-ajax">
								{{ item.title }}
							</NuxtLink>
						</h2>
						<p class="description swiper-animate-head max-w570 mt-20" v-if="props.hasDescription">
							{{ item.description }}
						</p>
						<LinkLine v-if="props.linkLine" linkName="VIEW CASE" :linkTo="item.link + item.slug" parallax />
						<LinkDefualt class="swiper-animate-head" v-if="props.linkDefualt" linkName="VIEW CASE"
							:linkTo="item.link + item.slug" parallax />
					</div>
				</div>
			</div>
			<div class="dsn-swiper-paginate">
				<div ref="swiperPagination" class="swiper-pagination dsn-swiper-circle mr-30 ml-30 heading-color"></div>
			</div>
			<div class="control-nav w-100 d-flex dsn-container align-items-center justify-content-between">
				<SliderPrev ref="prev" :data="props.data" :el="mainSlider" />
				<div class="dsn-pagination p-relative d-flex align-items-end">
					<span class="slider-current-index h2">{{
						numberindex(store.slideCurrent)
					}}</span>
					<span class="sm-title-block">/ </span><span class="total sm-title-block">{{
						numberindex(store.countSlides - 1)
					}}</span>
				</div>
				<SliderNext ref="next" :data="props.data" :el="mainSlider" />
			</div>
		</div>
	</header>
</template>
