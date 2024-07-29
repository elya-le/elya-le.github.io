<script setup>
import { Animate } from "@/hooks/pluginanimations.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Toggle from "@/components/menu/nav/contain/Toggle.vue";
const nav = ref(null);
defineExpose({ nav });
const store = reactive({ typeNave: "" });
const props = defineProps({ hamburger: { type: Boolean, default: false }, removeOpenMenu: Function });
const resizeNav = () => {
	if (window.innerWidth > 991) {
		store.typeNave = "";
		props.removeOpenMenu();
		return;
	}
	store.typeNave = "dsn-hamburger";
};
onMounted(() => {
	if (props.hamburger) {
		store.typeNave = "dsn-hamburger";
	} else {
		window.addEventListener("resize", resizeNav);
		resizeNav();
	}
});
</script>

<template>
	<header id="site_menu_header" class="site-header dsn-container"
		:class="store.typeNave, props.hamburger ? 'dsn-hamburger' : null" ref="nav">
		<slot />
		<Toggle :nav="nav" />
	</header>
</template>


