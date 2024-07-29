<script setup>
import { splittingChar } from "@/hooks/spltting.js";
import { animationUp, animationDown } from "@/components/svg/SvgAnimate.js";
const props = defineProps({ className: String, nav: Element, });
const navbarToggle = ref(null);
const splitMenu = ref(null);
const splitOpen = ref(null);
const splitClose = ref(null);
const backgroundMain = ref(null);
const svg = ref(null);
const store = reactive({ reserved: false, });
const removeOpenMenu = () => {
	const ul = props.nav.querySelectorAll("ul");
	if (ul) { props.nav.querySelectorAll("ul").forEach((item) => item.classList.remove("open")); }
};
const TransEnd = () => {
	if (store.reserved) {
		const ul = props.nav.querySelector(".primary-nav");
		if (ul) { props.nav.querySelector(".primary-nav").classList.add("open"); }
	}
};
const onCompleteAnimate = (e) => {
	props.nav.classList.toggle("dsn-open");
	if (navbarToggle.value) { navbarToggle.value.classList.toggle("open"); }
	document.body.classList.toggle("over-hidden");
};
const toggleClick = (e) => {
	store.reserved = !store.reserved;
	if (store.reserved) {
		removeOpenMenu();
		animationUp(svg.value, TransEnd)
			.to("#main_root", { y: -200, duration: 1, ease: "power4.in" }, "top")
			.set(backgroundMain.value, { autoAlpha: 1 }, "center");
		onCompleteAnimate(this);
		return;
	}
	const ul = props.nav.querySelector(".primary-nav");
	if (ul) { props.nav.querySelector(".primary-nav").classList.remove("open"); }
	animationDown(svg.value, () => onCompleteAnimate(this))
		.to("#main_root", { y: 0, clearProps: "y", duration: 1, ease: "power4" }, "-=1")
		.set(backgroundMain.value, { autoAlpha: 0 }, "center");
};
onMounted(() => {
	splittingChar(splitMenu.value, true);
	splittingChar(splitOpen.value, true);
	splittingChar(splitClose.value, true);
});
</script>

<template>
	<div id="navbar_toggle" class="navbar-toggle" :class="props.className" @click="toggleClick" ref="navbarToggle">
		<div class="toggle-icon">
			<div class="toggle-line" />
			<div class="toggle-line" />
			<div class="toggle-line" />
		</div>
		<div class="toggle-text">
			<div class="text-menu" ref="splitMenu">Menu</div>
			<div class="text-open" ref="splitOpen">Open</div>
			<div class="text-close" ref="splitClose">Close</div>
		</div>
	</div>
	<div class="bg-load background-main" ref="backgroundMain" />
	<svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" class="bg-load dsn-svg-transition">
		<path vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" ref="svg" />
	</svg>
</template>
