<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pageLoad } from "@/hooks/plugin.js";
import { store as pStore } from '@/store/store'
import Sibling from "@/components/layout/loading/Sibling.vue"
const props = defineProps({ glitchLogo: Boolean, });
const store = reactive({ progressValue: 0, remove: true, useMemo: Element, });
const preloader = ref(null);
const present = { value: 0 };

onMounted(() => {
	const tl = gsap.timeline();
	document.body.style.overflow = "hidden";
	const handleLoad = () => {
		clearInterval(timer);
		tl.to(present, 1, { value: 100, onUpdate() { store.progressValue = present.value; }, })
			.to(".preloader .bg-load", { autoAlpha: 1 })
			.to(".preloader span", { autoAlpha: 0 })
			.to(".preloader p", { autoAlpha: 0 })
			.to(".preloader .v-middle", { autoAlpha: 0 })
			.to(('.preloader .bg-load'), { yPercent: -100, ease: "Expo.easeInOut", duration: 1.5 })
			.to('.bg-load .separator__path', { attr: { d: "M 0 0 C 40 0 55 0 100 0 L 0 0 Z" }, ease: "Power4.easeInOut", duration: 1.5 }, '-=1.5')
			.fromTo(pStore.activeScrollbar ? "#dsn-scrollbar" : "#main_root", 1, { y: 400 }, { y: 0, clearProps: "y", ease: "Expo.easeInOut" }, "-=1.2")
			.call(() => { store.remove = false; document.body.style.overflow = "" });
	}
	const timer = pageLoad(0, 100, 300, (val) => {
		store.progressValue = val;
		present.value = val;
		if (val >= 100)
			clearInterval(timer);
		handleLoad();
	});
});
</script>

<template>
	<div id="dsn_preloader" class="preloader" ref="preloader" v-show="store.remove">
		<div class="dsnload p-absolute" v-if="glitchLogo">
			<Sibling />
			<Sibling isSibling />
			<Sibling isSibling />
			<Sibling isSibling />
		</div>
		<svg width="100%" height="100%" viewBox="0 0 100 100" class="v-middle" preserveAspectRatio="xMinYMin meet"
			fill="none">
			<linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
				<stop offset="0%" style="stop-color:var(--theme-color)" />
				<stop offset="50%" style="stop-color:var(--border-color)" />
				<stop offset="100%" style="stop-color:var(--assistant-color)" />
			</linearGradient>
			<path class="dsn-progress-path" :style="`stroke-dashoffset: ${300 - (store.progressValue * 3)}`"
				d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
		</svg>
		<div class="loading-circle v-middle">
			<p class="loading-count v-middle">{{ store.progressValue.toFixed(0) }}</p>
		</div>
		<div class="loading-text text-uppercase mt-30 dsn-container">
			<span>Loading ...</span>
		</div>
		<div class="bg-load background-section d-flex align-items-end">
			<svg class="dsn-separator-bottom dsn-icon-assistant-color" width="100%" height="100%" viewBox="0 0 100 10"
				preserveAspectRatio="none">
				<path class="path-anim separator__path" vectorEffect="non-scaling-stroke"
					d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z" />
			</svg>
		</div>
	</div>
</template>
